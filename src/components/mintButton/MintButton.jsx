import "./mintButton.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Alchemy, Network } from "alchemy-sdk";
// import * as dotenv from "dotenv";
import { contractAddress, abi } from "../../utils/constants";
// dotenv.config();

const config = {
  apiKey: import.meta.env.VITE_APP_ALCHEMY_KEY,
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

const feeData = async () => {
  const response = await alchemy.core.getFeeData();
  return response;
};

const checkNftHolderOrNot = async (userAddress) => {
  const nfts = await alchemy.nft.verifyNftOwnership(
    userAddress,
    contractAddress
  );
  return nfts;
};

function MintButton() {
  const MintNow = async () => {
    const WalletConnectProvider = window.WalletConnectProvider.default;
    let providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          alchemyId: import.meta.env.VITE_APP_ALCHEMY_KEY,
          chainId: 137,
          rpc: {
            1: import.meta.env.VITE_APP_ALCHEMY_URL,
          },
        },
      },
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = web3.eth.getAccounts();

    //check nft holding or not
    const isHoldingNFT = await checkNftHolderOrNot(accounts[0]);
    console.log(accounts[0] + " is holding an NFT ", isHoldingNFT);

    //if not holding proceed with transaction
    if (!isHoldingNFT) {
      //get fee data
      const response = await feeData();
      const { maxPriorityFeePerGas, maxFeePerGas } = response;
      const reccomendedMaxPriorityFeePerGas = maxPriorityFeePerGas.toString();
      console.log(reccomendedMaxPriorityFeePerGas);
      const reccomendedmaxFeePerGas = maxFeePerGas.toString();
      console.log(reccomendedmaxFeePerGas);

      //create contract instance
      const contractInstance = new web3.eth.Contract(abi, contractAddress);

      //get mint price
      const mintPrice = await contractInstance.methods.mintPrice().call();

      accounts.then(async (result) => {
        console.log(result[0]);
        const balance = web3.eth.getChainId();
        // const NftCount = await contractInstance.methods.walletMints(result[0]);
        // console.log(NftCount);

        balance.then((r) => {
          if (r === 137) {
            console.log("current mint price is " + mintPrice);
            let txTransfer = {
              from: result[0],
              to: contractAddress,
              //  gas: web3.utils.toHex(web3.utils.toWei( '.028' , 'gwei' )),
              maxPriorityFeePerGas: web3.utils.toWei(
                reccomendedMaxPriorityFeePerGas
              ),
              maxFeePerGas: web3.utils.toWei(reccomendedmaxFeePerGas),
              value: 1 * mintPrice,
              // gas: 21000,1
              data: contractInstance.methods.mint(1).encodeABI(),
            };
            console.log("Transaction Created");
            web3.eth
              .sendTransaction(txTransfer)
              .on("transactionHash", function (hash) {
                if (
                  window.confirm(
                    "NFT mint Sucessful. Click, Ok to view the transaction"
                  )
                ) {
                  window.open(`https://polygonscan.com/tx/${hash}`, "_blank");
                }

                // alert(`NFT Mint Successful https://polygonscan.com/tx/${hash}`);
              })
              .on("error", function (error) {
                alert(error.message);
              });
          } else {
            alert("Please connect to polygon chain");
          }
        });
      });
    } else {
      alert("One NFT per Account only");
    }
  };
  return (
    <>
      <button className="mint-button" onClick={MintNow}>
        Mint Now
      </button>
    </>
  );
}
export default MintButton;
