import React from 'react'
import useModal from './useModal'

import WithDrawModal from 'src/layouts/WithDrawModal'

const useWithDrawModal = ({ refreshData = () => {} }) => {
  const [onPresentWithDrawModal] = useModal(
    <WithDrawModal refreshData={refreshData} />,
  )
  return { onPresentWithDrawModal }
}

export default useWithDrawModal
