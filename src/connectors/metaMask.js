import detectEthereumProvider from "@metamask/detect-provider";
import { toast } from "react-toastify";

const metaMask = async (updateAddress) => {
  const provider = await detectEthereumProvider();

  if (provider !== window.ethereum) {
    toast("Do you have multiple wallets installed?");
  }

  if (window.ethereum) {
    // Do something
    toast("wallet ethereum?");
  } else {
    console.log("wallet install?");
    console.warn("install metamask extension!!");
  }
  window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
    // Return the address of the wallet
    updateAddress(res);
    console.log(res);
  });
};

export default metaMask;
