import { ethers } from "ethers";

const faucetAbi = [
  {
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxRedeems_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountPerRedeem_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amountPerRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRedeems",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const faucetContract = (provider) => {
  return new ethers.Contract("0x1a5e177CF6e505e132caDE8f18Cd2b4376408fE1",
    faucetAbi,
    provider
  );
};

export default faucetContract;
