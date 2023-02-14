/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EcdhinaE2E, EcdhinaE2EInterface } from "../EcdhinaE2E";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "testDummy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50608b8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80632e078d4914602d575b600080fd5b603b6038366004603d565b50565b005b600060208284031215604e57600080fd5b503591905056fea26469706673582212204dfcf15c030b4fd6fc2c869a4621965226c3700583d5896dbe7788e07a06c91864736f6c63430008070033";

export class EcdhinaE2E__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EcdhinaE2E> {
    return super.deploy(overrides || {}) as Promise<EcdhinaE2E>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EcdhinaE2E {
    return super.attach(address) as EcdhinaE2E;
  }
  connect(signer: Signer): EcdhinaE2E__factory {
    return super.connect(signer) as EcdhinaE2E__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EcdhinaE2EInterface {
    return new utils.Interface(_abi) as EcdhinaE2EInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EcdhinaE2E {
    return new Contract(address, _abi, signerOrProvider) as EcdhinaE2E;
  }
}
