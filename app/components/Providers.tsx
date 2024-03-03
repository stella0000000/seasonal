"use-client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createApolloClient } from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { FC, ReactNode } from "react";
import { DescriptionsProvider } from "../context/description";
import { ProduceContextProvider } from "../context/produce";

interface ProvidersProps {
  children: ReactNode;
}

const client = createApolloClient();

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <ProduceContextProvider>
          <DescriptionsProvider>{children}</DescriptionsProvider>
        </ProduceContextProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default Providers;
