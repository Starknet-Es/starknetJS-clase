"use client";
import React from 'react';
import { useAccount, useBalance } from "@starknet-react/core";

const STRK_ADDRESS = '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d';
const ETH_ADDRESS = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
// TODO: obtener el balance de la wallet de tu token erc20 desplegado y mostrarlo en pantalla;

export default function Balances() {
    const { address } = useAccount();
    const { isLoading: isLoadingStrk, isError: isErrorStrk, error: errorStrk, data: dataStrk } = useBalance({
        token: STRK_ADDRESS,
        address,
        watch: true
    });

    const { isLoading: isLoadingEth, isError: isErrorEth, error: errorEth, data: dataEth } = useBalance({
        token: ETH_ADDRESS,
        address,
        watch: true
    })

    if (isLoadingStrk && isLoadingEth) return <div>Loading STRK...</div>;
    if ((isErrorStrk || !dataStrk) && (isErrorEth || !dataEth)) return <div>{errorStrk?.message || errorEth?.message}</div>;
    return <div>{dataStrk?.value.toString()} {dataStrk?.symbol}{' ---- '} {dataEth?.value.toString()} {dataEth?.symbol}</div>
}
