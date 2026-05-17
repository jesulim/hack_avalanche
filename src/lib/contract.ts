// TODO: Replace with deployed contract address after Remix deployment to Fuji
// Deploy UYScoreRegistry.sol at https://remix.ethereum.org
// Network: Avalanche Fuji C-Chain (chainId: 43113)
// RPC: https://api.avax-test.network/ext/bc/C/rpc
export const CONTRACT_ADDRESS =
  "0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F" as `0x${string}`

export const UY_SCORE_ABI = [
  {
    name: "certifyScore",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "scoreValue", type: "uint256" },
      { name: "scoreHash", type: "bytes32" },
    ],
    outputs: [],
  },
  {
    name: "getScore",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        components: [
          { name: "scoreValue", type: "uint256" },
          { name: "scoreHash", type: "bytes32" },
          { name: "timestamp", type: "uint256" },
          { name: "certified", type: "bool" },
        ],
      },
    ],
  },
  {
    name: "ScoreCertified",
    type: "event",
    inputs: [
      { name: "user", type: "address", indexed: true },
      { name: "scoreValue", type: "uint256", indexed: false },
      { name: "scoreHash", type: "bytes32", indexed: false },
      { name: "timestamp", type: "uint256", indexed: false },
    ],
  },
] as const
