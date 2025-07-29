import * as ethers from "ethers";
import { writeFileSync, readFileSync } from 'fs';
import { getFirstSessionSig, getPkpAccessControlCondition, getPkpAddressFromSessionSig, mintPkp } from "./utils.js";
import { LIT_ABILITY, LIT_NETWORK, LIT_RPC } from "@lit-protocol/constants";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { EthWalletProvider } from "@lit-protocol/lit-auth-client";

import { LitActionResource } from "@lit-protocol/auth-helpers";

import { api } from "@lit-protocol/wrapped-keys";
import { executeDecryptPrivateAction } from "./decrypt_private_action.js";
import { PUBLIC_ETHEREUM_PRIVATE_KEY, PUBLIC_LIT_PKP_PUBLIC_KEY } from "$env/static/public";

const { generatePrivateKey, importPrivateKey, listEncryptedKeyMetadata, exportPrivateKey, getEncryptedKey } = api;


export async function initializeLit() {
	console.log("Start")

	// const ETHEREUM_PRIVATE_KEY = getEnv("ETHEREUM_PRIVATE_KEY");
	// const NEW_ETHEREUM_KEYPAIR_WALLET = ethers.Wallet.createRandom();
	console.log(PUBLIC_ETHEREUM_PRIVATE_KEY)
	console.log(PUBLIC_LIT_PKP_PUBLIC_KEY)
	// return ""

	const ethersSigner = new ethers.Wallet(
		PUBLIC_ETHEREUM_PRIVATE_KEY,
		new ethers.providers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE)
	);

	console.log("Private Key")
	console.log(ethersSigner.privateKey) // 0x...
	console.log("Public Key")
	console.log(ethersSigner.publicKey)

	let litNodeClient = new LitNodeClient({
		litNetwork: LIT_NETWORK.DatilDev,
		debug: false,
	});

	await litNodeClient.connect();
	console.log("Connected to Lit")

	let pkpPublicKey = PUBLIC_LIT_PKP_PUBLIC_KEY
	console.log("PKP Public Key: (ENV)", pkpPublicKey)

	return {
		litNodeClient,
		pkpPublicKey,
		ethersSigner,
	};
}

export async function fetchPkpSessionSigs(
	litNodeClient: LitNodeClient,
	pkpPublicKey: string,
	ethersSigner: ethers.Signer | ethers.Wallet
) {
	const pkpSessionSigs = await litNodeClient.getPkpSessionSigs({
		pkpPublicKey,
		authMethods: [
			await EthWalletProvider.authenticate({
				signer: ethersSigner,
				litNodeClient,
				expiration: new Date(Date.now() + 1000 * 60 * 1000).toISOString(), // 10 minutes
			}),
		],
		resourceAbilityRequests: [
			{
				resource: new LitActionResource("*"),
				ability: LIT_ABILITY.LitActionExecution,
			},
		],
		expiration: new Date(Date.now() + 1000 * 60 * 1000).toISOString(), // 10 minutes
	});
	console.log("✅ Got PKP Session Sigs");
	return pkpSessionSigs;
}

export async function writePkpSessionSigsToFile(pkpSessionSigs: any) {
	const json = JSON.stringify(pkpSessionSigs, null, 2); // `2` = pretty print
	writeFileSync('pkp_session_sigs.json', json);
	console.log("Wrote PKP Session Sigs to file");
}

export async function readPkpSessionSigsFromFile(): Promise<any> {
	const data = readFileSync('pkp_session_sigs.json', 'utf8');
	const pkpSessionSigs: any = JSON.parse(data);
	console.log("Read PKP Session Sigs from file");
	return pkpSessionSigs;
}

export async function generateNewPrivateKey(litNodeClient: LitNodeClient, pkpSessionSigs: any, memo: string) {
	// Each time generates new
	const { pkpAddress, generatedPublicKey, id } = await generatePrivateKey({
		pkpSessionSigs,
		network: 'evm',
		memo: memo,
		litNodeClient,
	});

	console.log("Generated Private Key !")
	console.log("Generated PKP id:", id); // ae096c3b-4ccd-4a2e-a4a8-2ea244127337
	console.log("Generated PKP Address:", pkpAddress); // This same as LIT_PKP_PUBLIC_KEY
	console.log("Generated Public Key:", generatedPublicKey); // 0x02.... a 132 character hex string

	return {
		pkpAddress,
		generatedPublicKey,
		id,
	};
}

export async function importExistingKey(litNodeClient: LitNodeClient, pkpSessionSigs: any, privateKey: string, publicKey: string, memo: string, keyType: 'K256' | 'ed25519' = 'K256') {
	console.log("🔄 Importing private key...");
	const response = await importPrivateKey({
		pkpSessionSigs,
		litNodeClient,
		privateKey,
		publicKey,
		keyType,
		memo,
	});
	console.log(
		`✅ Imported private key, and attached to PKP with address: ${response.pkpAddress}`
	);

	return {
		pkpAddress: response.pkpAddress,
		id: response.id,
	};
}

export async function listExistingKeys(litNodeClient: LitNodeClient, pkpSessionSigs: any) {
	const wrappedKeyMetadatas = await listEncryptedKeyMetadata({
		pkpSessionSigs,
		litNodeClient,
	});
	console.log("Wrapped Key Metadata:", wrappedKeyMetadatas);

	return wrappedKeyMetadatas;
}

export async function unwrapPrivateKey(litNodeClient: LitNodeClient, pkpSessionSigs: any, id: string) {
	const exportedPrivateKeyResult = await exportPrivateKey({
		pkpSessionSigs,
		litNodeClient,
		id: id,
		network: 'evm',
	});
	console.log(exportedPrivateKeyResult);
	return exportedPrivateKeyResult
}

export async function getEncryptedPrivateKeyMetaData(litNodeClient: LitNodeClient, pkpSessionSigs: any, id: string) {
	const exportedPrivateKeyResult = await getEncryptedKey({
		pkpSessionSigs,
		litNodeClient,
		id: id
	});
	return exportedPrivateKeyResult
}

export async function callUnwrapPrivateKeyOnAction(
	litNodeClient: LitNodeClient,
	pkpSessionSigs: any,
	id: string,
) {

	let sessionSig = getFirstSessionSig(pkpSessionSigs);
	let pkpAddress = getPkpAddressFromSessionSig(sessionSig);
	console.log("PKP Address from Session Sig:", pkpAddress); // This same as LIT_PKP_PUBLIC_KEY
	let accessControlCondition = getPkpAccessControlCondition(pkpAddress);

	const {
		ciphertext,
		dataToEncryptHash,
	} = await getEncryptedPrivateKeyMetaData(litNodeClient, pkpSessionSigs, id)

	console.log("Going to call execute decrypt private action")
	await executeDecryptPrivateAction(
		litNodeClient,
		pkpSessionSigs,
		[accessControlCondition],
		ciphertext,
		dataToEncryptHash,
	)

}

async function testWrappedKey() {

	// The plan is to:
	// 1. Make user import their wallet private key and get pkpSessionSigs
	// 2. Write pkpSessionSigs to file (Optional)
	// 3. Transfer pkpSessionSigs as json to our server
	// 4. Whenever we need to trade, call the Hyperliquid Action with the trade details as well as the required params to decrypt the private key (accessControlCondition, ciphertext and dataToEncryptHash). These params are constructed form the session sig we saved earlier on the server. These calls happen for all the saved pkpSessionSigs
	// 5. The Hyperliquid Action will decrypt the private key on the Lit Node and use it alongside the trade details to construct the off-chain request to app.hyperliquid.xyz endpoint to create trades / close trades , etc
	// 6. Profit

}

// await testWrappedKey()
//
