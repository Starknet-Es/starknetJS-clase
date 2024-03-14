"use client";
import React from 'react';
import { useContractWrite, useAccount, useNetwork, useContract } from "@starknet-react/core";
import { ERC20 as erc20ABI } from "../../ABI's/ERC20";
import { useMemo } from "react";

export default function Transfer() {
    const { address } = useAccount();
	const { chain } = useNetwork();

	const { contract } = useContract({
		abi: erc20ABI,
		address: chain.nativeCurrency.address,
	});

    const calls = useMemo(() => {
		if (!address || !contract) return [];
		return contract.populateTransaction["transfer"]!('0x03F1242961727C5eA1215E78548B83fd311a7b5d171F3934906bB183274CDc0E', { low: 1, high: 0 });
	}, [contract, address]);

	const {
		writeAsync,
		data,
		isPending,
	} = useContractWrite({
		calls,
	});

    return (
		<>
		<button onClick={() => writeAsync()} style={{ border: '2px solid red', padding: '5px'}}>Transfer</button>
		<p>status: {isPending && <div>Submitting...</div>}</p>
		<p>hash:<a href={`https://sepolia.starkscan.co/tx/${data?.transaction_hash}`} target='blank'>{data?.transaction_hash}</a></p>
		</>
	);
}