import { Contract, ethers } from "ethers";

export function genDeployscript(provider: any) {
  return async function deployContract(
    signer: any,
    contractJSON: any,
    args?: any[]
  ) {
    let factory = new ethers.ContractFactory(
      contractJSON.abi,
      contractJSON.bytecode,
      signer
    );
    if (!args) args = [];
    let ins = await factory.deploy(...args, {
      gasPrice: ethers.utils.parseUnits("10", "gwei"),
    });
    await waitForSenconds(ins.deployTransaction.hash, provider);
    return ins;
  };
}

async function waitForSenconds(tx: string, provider: any) {
  let result = null;
  do {
    result = await provider.getTransactionReceipt(tx);
    await sleep(2000);
  } while (result === null);
  await sleep(2000);
}

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, ms)
  );
