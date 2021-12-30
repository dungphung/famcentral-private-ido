import { useState, useCallback, useEffect } from 'react'
import * as ethers from 'ethers'
import { BigNumber, utils, constants } from 'ethers'
import membershipRankAbi from 'src/config/abi/MembershipRankAbi'
import bep20Abi from 'src/config/abi/erc20.json'
import useActiveWeb3React from 'src/hooks/useActiveWeb3React'
import FixedAPRStakingPoolAbi from 'src/config/abi/FixedAPRStakingPoolAbi'
import { useToast, Box } from '@chakra-ui/react'

const addressConfig = {
  FAM_TOKEN: '0x005829a74cec13aa375256Ab2E15f5E6360F6AcF',
  FixedAPRStakingPool: '0x46F6AD5ae704626990059F5BeCF0E9323915eFDD',
  MembershipRank: '0x6F03b054962CC012576903c8DaBb1DC90Fd918f0',
}

interface UserInfo {
  amount: BigNumber
  lastRewardBlock: BigNumber
  timeWithdraw: BigNumber
}

const useMembershipVault = () => {
  const toast = useToast()
  const { formatEther } = utils

  const { library, account } = useActiveWeb3React()
  const [isLoading, setLoading] = useState(false)
  const [rankName, setRankName] = useState('')
  const [isApprove, setApprove] = useState(false)
  const [balance, setBalance] = useState(BigNumber.from(0))
  const [isDepositSuccess, setIsDepositSuccess] = useState(false)
  const [isWithDrawSuccess, setIsWithDrawSuccess] = useState(false)
  const [isPendingRewardSuccess, setIsPendingRewardSuccess] = useState(false)

  const [txDeposit, setTxDeposit] = useState('')
  const [txWithDraw, setTxWithDraw] = useState('')
  const [txPendingReward, setTxPendingReward] = useState('')

  const [amount, setAmount] = useState('0')
  const [amountWithdraw, setAmountWithdraw] = useState('0')
  const [pendingReward, setPendingReward] = useState('0')

  const [userInfo, setUserInfo] = useState<UserInfo>({
    amount: BigNumber.from(0),
    lastRewardBlock: BigNumber.from(0),
    timeWithdraw: BigNumber.from(0),
  })
  const [tiers, setTiers] = useState<
    { id: number; title: string; description: string; value: string }[]
  >([])

  const loadListTier = useCallback(async () => {
    try {
      const membershipRank = new ethers.Contract(
        addressConfig.MembershipRank,
        membershipRankAbi,
        library,
      )
      const tiers: BigNumber[] = await membershipRank.getListTier()
      const data = tiers.map((amount, idx) => {
        return {
          id: idx + 1,
          title: `VIP ${idx + 1}`,
          description: `${formatEther(amount)}  FAM staked`,
          value: formatEther(amount),
        }
      })
      setTiers(data)
    } catch (error) {
      // toast({
      //   title: error?.message ?? 'Error',
      //   position: 'top-right',
      //   isClosable: true,
      //   status: 'error',
      // })
    }
  }, [formatEther, library])

  const getRank = useCallback(async () => {
    if (!account) {
      setRankName('No rank')
    } else {
      const membershipRank = new ethers.Contract(
        addressConfig.MembershipRank,
        membershipRankAbi,
        library,
      )
      try {
        const rank = await membershipRank.getRank(account)
        console.log('-------------------')
        console.log(rank.toNumber())
        console.log('-------------------')
        if (rank) {
          setRankName(`VIP ${rank.toNumber()}`)
        } else {
          setRankName('No rank')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [account, library])

  const getUserInfo = useCallback(async () => {
    if (!account) {
      setUserInfo({
        amount: BigNumber.from(0),
        lastRewardBlock: BigNumber.from(0),
        timeWithdraw: BigNumber.from(0),
      })
    } else {
      const membershipRank = new ethers.Contract(
        addressConfig.MembershipRank,
        membershipRankAbi,
        library,
      )
      try {
        const userInfo = await membershipRank.getUserInfo(account)

        const { amount, lastRewardBlock, timeWithdraw } = userInfo

        console.log({
          isCheck: amount.gt(0),
        })

        setUserInfo({
          amount,
          lastRewardBlock,
          timeWithdraw,
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [account, library])

  const getPendingReward = useCallback(async () => {
    if (!account) {
      setPendingReward('0')
    } else {
      const pool = new ethers.Contract(
        addressConfig.FixedAPRStakingPool,
        FixedAPRStakingPoolAbi,
        library,
      )
      try {
        const pending = await pool.pendingReward(account)
        if (pending) {
          setPendingReward(formatEther(pending))
        } else {
          setPendingReward('0')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [account, formatEther, library])

  const balanceOf = useCallback(async () => {
    try {
      const signer = library?.getSigner()
      const famContract = new ethers.Contract(
        addressConfig.FAM_TOKEN,
        bep20Abi,
        signer,
      )
      const value = await famContract.balanceOf(account)
      setBalance(value)
    } catch (error) {
      // toast({
      //   title: error?.message ?? 'Error',
      //   position: 'top-right',
      //   isClosable: true,
      //   status: 'error',
      // })
    }
  }, [account, library])

  const selectTier = (item: any) => {
    setAmount(item.value)
  }

  const withdraw = async () => {
    setLoading(true)
    setTxWithDraw('')
    try {
      const signer = library?.getSigner()
      const pool = new ethers.Contract(
        addressConfig.FixedAPRStakingPool,
        FixedAPRStakingPoolAbi,
        signer,
      )
      const tx = await pool.withdraw(utils.parseEther(amountWithdraw))
      const receipt = await tx.wait()
      const { transactionHash } = receipt
      console.log('-------------------')
      console.log(transactionHash)
      console.log('-------------------')
      setIsWithDrawSuccess(true)
      setTxWithDraw(transactionHash)
    } catch (error) {
      toast({
        title: error?.message ?? 'Error',
        position: 'top-right',
        isClosable: true,
        status: 'error',
      })
      console.log('-------------------')
      console.log(error)
      console.log('-------------------')
    }
    setLoading(false)
  }

  const harvest = async () => {
    setLoading(true)
    setTxPendingReward('')
    try {
      const signer = library?.getSigner()
      const pool = new ethers.Contract(
        addressConfig.FixedAPRStakingPool,
        FixedAPRStakingPoolAbi,
        signer,
      )
      const tx = await pool.harvest()
      const receipt = await tx.wait()
      const { transactionHash } = receipt
      setIsPendingRewardSuccess(true)
      setTxPendingReward(transactionHash)
    } catch (error) {
      toast({
        title: error?.message ?? 'Error',
        position: 'top-right',
        isClosable: true,
        status: 'error',
      })
      console.log('-------------------')
      console.log(error)
      console.log('-------------------')
    }
    setLoading(false)
  }

  const approve = async () => {
    setLoading(true)
    try {
      const signer = library?.getSigner()
      const famContract = new ethers.Contract(
        addressConfig.FAM_TOKEN,
        bep20Abi,
        signer,
      )
      const tx = await famContract.approve(
        addressConfig.FixedAPRStakingPool,
        constants.MaxInt256,
      )
      const receipt = await tx.wait()
      const { transactionHash } = receipt
      console.log('-------------------')
      console.log(transactionHash)
      console.log('-------------------')
      setApprove(true)
    } catch (error) {
      console.log('-------------------')
      console.log(error)
      console.log('-------------------')
      toast({
        title: error?.message ?? 'Error',
        position: 'top-right',
        isClosable: true,
        status: 'error',
      })
    }
    setLoading(false)
  }

  const allowance = useCallback(async () => {
    try {
      const signer = library?.getSigner()
      const famContract = new ethers.Contract(
        addressConfig.FAM_TOKEN,
        bep20Abi,
        signer,
      )
      const data: BigNumber = await famContract.allowance(
        account,
        addressConfig.FixedAPRStakingPool,
      )

      //   console.log('-------------------')
      //   console.log(formatEther(data))
      //   console.log('-------------------')
      setApprove(data.gt(BigNumber.from(0)))
    } catch (error) {
      //   toast({
      //     title: error?.message ?? 'Error',
      //     position: 'top-right',
      //     isClosable: true,
      //     status: 'error',
      //   })
      console.log('-------------------')
      console.log(error)
      console.log('-------------------')
    }
    //   setLoading(false);
  }, [account, library])

  const deposit = async () => {
    setLoading(true)
    setTxDeposit('')
    try {
      const signer = library?.getSigner()
      const pool = new ethers.Contract(
        addressConfig.FixedAPRStakingPool,
        FixedAPRStakingPoolAbi,
        signer,
      )
      const tx = await pool.deposit(utils.parseEther(amount))

      const receipt = await tx.wait()
      const { transactionHash } = receipt
      setTxDeposit(transactionHash)
      setIsDepositSuccess(true)
      getUserInfo()
      getRank()
    } catch (error) {
      toast({
        title: error?.message ?? 'Error',
        position: 'top-right',
        isClosable: true,
        status: 'error',
      })
      console.log('-------------------')
      console.log(error)
      console.log('-------------------')
    }
    setLoading(false)
  }

  const onChangeInput = (e: any) => {
    const { value } = e.target
    setAmount(value)
  }
  const onChangeInputWithdraw = (e: any) => {
    const { value } = e.target
    setAmountWithdraw(value)
  }

  const refreshData = useCallback(() => {
    getRank()
    allowance()
    balanceOf()
    getPendingReward()
    getUserInfo()
    loadListTier()
  }, [
    getRank,
    allowance,
    balanceOf,
    getPendingReward,
    getUserInfo,
    loadListTier,
  ])

  useEffect(() => {
    getRank()
    allowance()
    balanceOf()
    getPendingReward()
    getUserInfo()
  }, [
    library,
    account,
    getRank,
    allowance,
    balanceOf,
    getPendingReward,
    getUserInfo,
  ])

  useEffect(() => {
    loadListTier()
  }, [loadListTier])

  return {
    isLoading,
    tiers,
    balance,
    isDepositSuccess,
    amountWithdraw,
    isWithDrawSuccess,
    isPendingRewardSuccess,
    pendingReward,
    loadListTier,
    userInfo,
    amount,
    selectTier,
    onChangeInput,
    onChangeInputWithdraw,
    harvest,
    getRank,
    deposit,
    withdraw,
    txDeposit,
    txWithDraw,
    txPendingReward,
    isApprove,
    approve,
    rankName,
    refreshData,
  }
}

export default useMembershipVault
