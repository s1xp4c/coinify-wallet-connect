import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WagmiProvider } from 'wagmi';
import { http } from 'viem';
import {
  mainnet,
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
} from 'wagmi/chains';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'Coinify Coins',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with your actual WalletConnect Project ID
  chains: [
    mainnet,
    arbitrum,
    arbitrumGoerli,
    avalanche,
    avalancheFuji,
    bsc,
    bscTestnet,
    fantom,
    fantomTestnet,
    foundry,
    goerli,
    optimism,
    optimismGoerli,
    polygon,
    polygonMumbai,
    sepolia,
  ],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumGoerli.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [fantom.id]: http(),
    [fantomTestnet.id]: http(),
    [foundry.id]: http(),
    [goerli.id]: http(),
    [optimism.id]: http(),
    [optimismGoerli.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider resetCSS theme={theme}>
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  </ChakraProvider>
);

export default MyApp;
