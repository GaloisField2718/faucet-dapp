import { ethers } from "ethers";

const faucetAbi = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "address",
        name: "token_",
        internalType: "contract IERC20",
      },
      {
        type: "uint256",
        name: "maxRedeems_",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountPerRedeem_",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "amountPerRedeem",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maxRedeems",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "redeem",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
];

const faucetContract = (provider) => {
  return (
    new ethers.Contract("0x5649dFa98CC3923635E0D20783a4d5db0b491715"),
    faucetAbi,
    provider
  );
};

export default faucetContract;
