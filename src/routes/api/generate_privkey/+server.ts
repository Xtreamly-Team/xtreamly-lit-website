import type { RequestHandler } from '@sveltejs/kit';

import { fetchPkpSessionSigs, generateNewPrivateKey, initializeLit, unwrapPrivateKey } from '$lib/lit/functions';

type Incoming = {
    id: string;
    pkpSessionSigs: any
};

type ResponseBody = {
    received: Incoming;
    message: string;
};

export const POST: RequestHandler = async ({ request }) => {
    const data: Incoming = await request.json();

    const { litNodeClient, pkpPublicKey, ethersSigner } = await initializeLit();

    const decryptedPrivateKey = await unwrapPrivateKey(litNodeClient, data.pkpSessionSigs, data.id);

    const response: ResponseBody = {
        received: data,
        message: JSON.stringify({
            privateKey: decryptedPrivateKey.decryptedPrivateKey,
            memo: decryptedPrivateKey.memo,
            id: decryptedPrivateKey.id,
        }, null, 2)
    };



    return new Response(JSON.stringify(response), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

