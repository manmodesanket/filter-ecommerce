import Head from "next/head";
import { useReducer, useState } from "react";
import { Filters, Result } from "../components";
import { data } from "../data/data";

export default function Home() {
  const [displayData, dispatch] = useReducer(reducerFunction, data);

  return (
    <div className="">
      <Head>
        <title>Flipkart Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex">
        <Filters data={data} displayData={displayData} dispatch={dispatch} />
        <Result data={displayData} />
      </main>
    </div>
  );
}

function reducerFunction(state, action) {
  switch (action.type) {
    case "CHANGE_RESULT":
      return action.payload;
    default:
      return state;
  }
}
