import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const CoinifyLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/Coinify_primary_logo.svg' : '/Coinify_primary_logo-invert.svg'}
      height={45}
      width={150}
      alt="Coinify"
    />
  );
};

export default CoinifyLogo;
