import {ConnectWallet, ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import { loadavg } from "os";
import "./styles/Home.css";

export default function Home() {
  const {contract} = useContract("0x67a52099faf7d21f6eADC49f425a8668720352EE"); 
  const {data: nfts, isLoading} = useNFTs(contract); 
  const {data: metadata, isLoading: loadingMetadata} = useContractMetadata(contract)

  return (
    <main className="container">
      {!loadingMetadata &&
        <header className="heading">
          <div>
            <img src={metadata?.image} alt="music NFT Collection Thumbnail" />
            <h1>{metadata?.name}</h1>
          </div>
        </header>
      }
      {!isLoading?
      (<div className="gallery">
        {nfts?.map(e =>
          <div className="card">
            <ThirdwebNftMedia metadata={e.metadata} />
          </div>

        )}
      </div>)
      : (<p className="loading">Loading...</p>)
      }
    </main>
  );
}
