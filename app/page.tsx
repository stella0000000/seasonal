// Server components don't support creating or consuming context directly
// Wrap provider in Client Component with directive
"use client";

import { ProduceButton } from "./components/ProduceButton";
import { ProduceContextProvider } from "./context";

export default function Home() {
  return (
    <ProduceContextProvider>
      <main className="flex min-h-screen flex-col p-10">
        <div>spring</div>
        <div>summer</div>
        <div>fall</div>
        <div>winter</div>
        <ProduceButton />
      </main>
    </ProduceContextProvider>
  );
}

// Fetch all fruits
// Fetch all vegetables
// display them
// change SQL queries and UI
