import React from 'react'
import useModal from './useModal'

import DepositModal from 'src/layouts/DepositModal'

const useDepositModal = ({ refreshData = () => {} }) => {
  const [onPresentDepositModal] = useModal(
    <DepositModal refreshData={refreshData} />,
  )

  return { onPresentDepositModal }
}

export default useDepositModal
