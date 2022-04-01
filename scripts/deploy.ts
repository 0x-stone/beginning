import * as dotenv from "dotenv";
import { ethers } from "ethers";
import { genDeployscript } from "./helpers";

import { MetaData } from "../typechain/MetaData";
import MetadataArtifact from "../build/Metadata.json";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY as string
const JSON_RPC = process.env.INFURA_LINK;

const provider = new ethers.providers.JsonRpcProvider(JSON_RPC);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const deployContract = genDeployscript(provider);

deploy();

async function deploy() {
  const metadata = (await deployContract(
    wallet,
    MetadataArtifact
  )) as MetaData;
  console.log("metadata", metadata.address);
}
