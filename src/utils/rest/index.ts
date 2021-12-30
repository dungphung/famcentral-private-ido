import { http } from './client'
import {
  GET_DETAIL_MOCK,
  GET_LIST_MOCK,
  GET_LIST_NFT_COLLECTION,
  GET_LIST_NFT_LIBRARY,
  GET_LIST_NFT_TYPE,
  GET_DETAIL_NFT,
  GET_LIST_NFT_LEVEL,
  CLAIM_NFT,
  GET_SIGNATURE_NONCE,
  REDEMM_NFT,
} from './endpoints'

export const API = {
  GET_DETAIL_MOCK: (variables) => http.get(GET_DETAIL_MOCK, variables),
  GET_LIST_MOCK: (variables) =>
    http.get(GET_LIST_MOCK, {
      params: variables,
    }),
  GET_LIST_NFT_COLLECTION: () => http.get(GET_LIST_NFT_COLLECTION, {}),
  GET_LIST_NFT_LIBRARY: (variables) =>
    http.post(GET_LIST_NFT_LIBRARY, variables),
  GET_LIST_NFT_TYPE: () => http.get(GET_LIST_NFT_TYPE, {}),
  GET_DETAIL_NFT: (params) => {
    return http.get(GET_DETAIL_NFT, {
      params,
    })
  },
  GET_LIST_NFT_LEVEL: () => http.get(GET_LIST_NFT_LEVEL, {}),
  CLAIM_NFT: (variables) => http.post(CLAIM_NFT, variables),

  GET_SIGNATURE_NONCE: ({ walletAddress }) =>
    http.post(GET_SIGNATURE_NONCE, { walletAddress }),
  REDEMM_NFT: ({ id, transactionHash }) =>
    http.post(REDEMM_NFT, { id, transactionHash }),
}
