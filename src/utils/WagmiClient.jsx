import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { polygon } from "wagmi/chains";
// import * as dotenv from "dotenv";
// dotenv.config();

//chains
const chains = [polygon];
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

//grabbing provider from chains and project Id
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

//creating a wagmiclient
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
