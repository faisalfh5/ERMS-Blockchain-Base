import detectEthereumProvider from '@metamask/detect-provider';
import { toast } from 'react-toastify';

const metaMask = async () => {
  const provider = await detectEthereumProvider();

  if (provider !== window.ethereum) {
    toast.error('Do you have multiple wallets installed?');
  }

  if (window.ethereum) {
    // Do something
  } else {
    toast.error('install metamask extension!!');
  }
  window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
    // Return the address of the wallet
    console.log(res);
  });
};

export default metaMask;
