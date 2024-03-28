import React from "react";
import Header from "./components/Header";
import Balances from "./components/starknet/Balances";
import Transfer from "./components/starknet/Transfer";
import Airdrop from "./components/starknet/Airdrop";

function App() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen gap-12">
      <Header />
      <Balances />
      <Transfer />
      <Airdrop />
    </main>
  );
}

export default App;
