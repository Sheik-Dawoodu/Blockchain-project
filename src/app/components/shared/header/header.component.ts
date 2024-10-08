import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { switchNetwork, watchAccount, watchNetwork } from '@wagmi/core';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { firstValueFrom, interval, Observable, takeUntil } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from '../../../service/local-storage.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent implements OnInit{
  public supportedChains: any = environment.SUPPORTED_CHAINS;
  connectorInfo: any;

  constructor(private localStorageService: LocalStorageService){
    
  }

  ngOnInit(): void {
    this.wagmiConfigration()
  }

 public wagmiConfigration(){
  const chains = this.supportedChains;
  const projectId = environment.PROJECT_ID

  // Create a metadata object
  const metadata = {
    name: 'ex block chain',
    description:'ex block chain',
    url: environment.APP_URL, // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const config = defaultWagmiConfig({chains,projectId,metadata})
  const modal = createWeb3Modal({
    wagmiConfig:config ,
    projectId,
    themeMode: 'light',
    themeVariables: {
      '--w3m-accent': '#0E9790'
    }
  })
  watchAccount(async (account) => {
    const wagmiStore$ = interval(10).pipe(
      takeUntil(
        new Observable (observer=>{
          const wagmiStore = JSON.parse(localStorage.getItem('wagmi.store')|| '{}')
          if (wagmiStore.state?.data?.account === account.address) {
            observer.next(),
            observer.complete()
          }
        })
      )
    )
    await firstValueFrom(wagmiStore$,{defaultValue:null})
    // Get the wagmi store from local storage and parse it as JSON
    const wagmiAccount = JSON.parse(localStorage.getItem('wagmi.store') || '{}');
    // Update the connector info with the user's account address
    (this.connectorInfo = wagmiAccount?.state?.data?.account) || this.localStorageService.removeToken();
    // // Update the wallet address in the dashboard service
    // this.authService.updateWalletAddress(this.connectorInfo);
  })

  watchNetwork(async(network)=>{
    if(network.chain?.unsupported){
      setTimeout(() => {
        this.switchNetwork()
      }, 1000);
    }
  })
  }

  async switchNetwork(){
    switchNetwork({
      chainId:environment.CHAIN_ID
    }).then((log)=>{
      console.log('log',log);
      
    })
  }
  
}
