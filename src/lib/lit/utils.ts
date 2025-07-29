import * as ethers from "ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { LIT_NETWORK } from "@lit-protocol/constants";
import fs from "fs";
// import dotenv from 'dotenv';
// dotenv.config();
//
// export const getEnv = (name: string): string => {
//   // Browser environment
//   if (typeof globalThis !== "undefined" && "window" in globalThis) {
//     const envMap: Record<string, string | undefined> = {
//       ETHEREUM_PRIVATE_KEY: process.env.NEXT_PUBLIC_ETHEREUM_PRIVATE_KEY,
//       SOLANA_PRIVATE_KEY: process.env.NEXT_PUBLIC_SOLANA_PRIVATE_KEY,
//     };
//     const env = envMap[name];
//     if (env === undefined || env === "")
//       throw new Error(
//         `Browser: ${name} ENV is not defined, please define it in the .env file`
//       );
//     return env;
//   }
//
//   // Node environment
//   const env = process.env[name];
//   // console.log(`Searched env for ${name}`)
//   // console.log(env)
//   if (env === undefined || env === "")
//     throw new Error(
//       `Node: ${name} ENV is not defined, please define it in the .env file`
//     );
//   return env;
// };

export const mintPkp = async (ethersSigner: ethers.Wallet) => {
  try {
    console.log("🔄 Connecting LitContracts client to network...");
    const litContracts = new LitContracts({
      signer: ethersSigner,
      network: LIT_NETWORK.DatilDev
    });
    await litContracts.connect();
    console.log("✅ Connected LitContracts client to network");

    console.log("🔄 Minting new PKP...");
    const pkp = (await litContracts.pkpNftContractUtils.write.mint()).pkp;
    console.log(
      `✅ Minted new PKP with public key: ${pkp.publicKey} and ETH address: ${pkp.ethAddress}`
    );
    return pkp;
  } catch (error) {
    console.error(error);
  }
};

export function getFirstSessionSig(pkpSessionSigs) {
  const sessionSigsEntries = Object.entries(pkpSessionSigs);
  if (sessionSigsEntries.length === 0) {
    throw new Error(`Invalid pkpSessionSigs, length zero: ${JSON.stringify(pkpSessionSigs)}`);
  }
  const [[, sessionSig]] = sessionSigsEntries;
  // (0, misc_1.log)(`Session Sig being used: ${JSON.stringify(sessionSig)}`);
  return sessionSig;
}

export function getPkpAddressFromSessionSig(pkpSessionSig) {
  const sessionSignedMessage = JSON.parse(pkpSessionSig.signedMessage);
  const capabilities = sessionSignedMessage.capabilities;
  if (!capabilities || capabilities.length === 0) {
    throw new Error(`Capabilities in the session's signedMessage is empty, but required.`);
  }
  const delegationAuthSig = capabilities.find(({ algo }) => algo === 'LIT_BLS');
  if (!delegationAuthSig) {
    throw new Error('SessionSig is not from a PKP; no LIT_BLS capabilities found');
  }
  const pkpAddress = delegationAuthSig.address;
  return pkpAddress;
}

export function getPkpAccessControlCondition(pkpAddress: string) {
  // if (!ethers_1.ethers.utils.isAddress(pkpAddress)) {
  //     throw new Error(`pkpAddress is not a valid Ethereum Address: ${pkpAddress}`);
  // }
  return {
    contractAddress: '',
    standardContractType: '',
    // chain: constants_1.CHAIN_ETHEREUM,
    chain: 'ethereum',
    method: '',
    parameters: [':userAddress'],
    returnValueTest: {
      comparator: '=',
      value: pkpAddress,
    },
  };
}
