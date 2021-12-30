// Array of available nodes to connect to
export const envs = {
  REACT_APP_NODE_1: process.env.REACT_APP_NODE_1,
  REACT_APP_NODE_2: process.env.REACT_APP_NODE_2,
  REACT_APP_NODE_3: process.env.REACT_APP_NODE_3,
  REACT_APP_REDEEM_WALLET: process.env.REACT_APP_REDEEM_WALLET,
  REACT_APP_BSCSCAN: process.env.REACT_APP_BSCSCAN
}
// console.log('-------------------');
// console.log({ envs });
// console.log('-------------------');

const getEnv = () => {
  return envs
}

export default getEnv
