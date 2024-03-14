import React from "react";
// import { useBlock } from "@starknet-react/core";
import Header from "./components/Header";
import Balances from "./components/starknet/Balances";
import Transfer from "./components/starknet/Transfer";

function App() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen gap-12">
      <Header />
      <Balances />
      <Transfer />
    </main>
  );
}

export default App;
