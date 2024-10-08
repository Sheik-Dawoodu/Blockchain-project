import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { environment } from '../../environments/environment';
const contractAbi = require('../../app/abis/Contractabi.json') 

const web3 = new Web3(environment.PROVIDER);
@Injectable({
  providedIn: 'root'
})
export class ContractService {
contractAdress = environment.CONTRACT_ADDRESS
  constructor() { }

  /**
   * This function retrieves the subscription plan with the given ID.
   * It first creates a web3 contract instance from the ABI and the contract address.
   * Then it calls the `getSubscription` method of the contract and returns the result.
   * @param {number} id - The ID of the subscription plan to retrieve.
   * @returns {any} - The subscription plan data.
   */
  async getSubscription(id: any) {
    const subscriptionContract   = new web3.eth.Contract(contractAbi, this.contractAdress); 
    console.log('subscriptionContractInstance', subscriptionContract);       
    return await subscriptionContract.methods.getSubscription(id).call();
  }
}  
