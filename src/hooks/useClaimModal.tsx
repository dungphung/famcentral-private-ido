import React from 'react'
import useModal from './useModal'

import ClaimModal from 'src/layouts/ClaimModal'

const useClaimModal = ({ refreshData = () => {} }) => {
  const [onPresentClaimModal] = useModal(
    <ClaimModal refreshData={refreshData} />,
  )

  return { onPresentClaimModal }
}

export default useClaimModal
