// Server components don't support creating or consuming context directly
// Wrap provider in Client Component with directive
"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo";

import { ProduceButton } from "@/components/ProduceButton";
import { ProduceContextProvider } from "./context";
import Fruits from "@/components/Fruits";

const client = createApolloClient();

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <ProduceContextProvider>
        <main className="flex min-h-screen flex-col p-10">
          <div>spring</div>
          <div>summer</div>
          <div>fall</div>
          <div>winter</div>
          <ProduceButton />
          <Fruits />
        </main>
      </ProduceContextProvider>
    </ApolloProvider>
  );
}

// Fetch all fruits
// Fetch all vegetables
// display them
// change SQL queries and UI
