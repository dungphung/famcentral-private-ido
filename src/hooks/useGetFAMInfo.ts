import axios from 'axios'
import { useEffect, useState } from 'react'
import { formattedNum } from 'src/utils'

const famAddress = '0x4556a6f454f15c4cd57167a62bda65a6be325d1f'

const useGetFAMInfo = () => {
  const [price, setPrice] = useState(0)
  const [liquidity, setLiquidity] = useState(0)

  const loadTokenInfo = async () => {
    axios({
      method: 'GET',
      url: `https://api.pancakeswap.info/api/v2/tokens/${famAddress}`,
    }).then(({ data: priceInfo }) => {
      const price = priceInfo?.data?.price
      setPrice(price)
    })

    axios({
      method: 'GET',
      url: 'https://api.famcentral.finance/info',
    }).then(({ data: liquidityInfo }) => {
      const { liquidity = 0 } = liquidityInfo
      setLiquidity(liquidity)
    })
  }

  useEffect(() => {
    loadTokenInfo()
  }, [])

  const priceFormat = price ? formattedNum(price, true) : ''

  const liquidityFormat = liquidity
    ? formattedNum(liquidity, true, false)
    : liquidity === 0
    ? '$0'
    : '-'

  return {
    priceFormat,
    liquidityFormat,
  }
}

export default useGetFAMInfo
