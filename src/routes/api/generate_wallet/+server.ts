import type { RequestHandler } from '@sveltejs/kit';

import { fetchPkpSessionSigs, generateNewPrivateKey, initializeLit } from '$lib/lit/functions';

type Incoming = {
    nickname: string;
};

type ResponseBody = {
    received: Incoming;
    message: string;
};

export const POST: RequestHandler = async ({ request }) => {
    const data: Incoming = await request.json();

    const { litNodeClient, pkpPublicKey, ethersSigner } = await initializeLit();
    const pkpSessionSigs = await fetchPkpSessionSigs(litNodeClient, pkpPublicKey, ethersSigner);
    console.log('PKP Session Sigs:', pkpSessionSigs);
    const { pkpAddress, generatedPublicKey, id } = await generateNewPrivateKey(litNodeClient, pkpSessionSigs, data.nickname);


    const response: ResponseBody = {
        received: data,
        message: JSON.stringify({
            pkpSessionSigs: pkpSessionSigs,
            pkpAddress: pkpAddress,
            publicKey: generatedPublicKey,
            id: id
        }, null, 2)
    };

    console.log("Sending to user server")
    // Sending PkP Session Sigs to our user server
    const res = await fetch('http://localhost:4002/user_signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pkpSessionSigs: pkpSessionSigs,
            id: id
        })
    });

    console.log(res)

    return new Response(JSON.stringify(response), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
