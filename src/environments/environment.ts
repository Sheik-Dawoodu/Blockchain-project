import { holesky } from "viem/chains";

export const environment = {
production: false,
PROJECT_ID : 'fba971b4497de21803afe77470f5abc5',
SUPPORTED_CHAINS: [holesky],
APP_URL: 'http://localhost:4500/',
ENCRYPT_LOCAL_STORAGE: false,
LOCAL_STORAGE_SECRET: 'fba971b4497de21803afe77470f5abc5',
CHAIN_ID:17000,
PROVIDER:'https://eth-holesky.g.alchemy.com/v2/0ZmIJC5Ml1gAI6Nf4RUZv86VKvMpjktt',
CONTRACT_ADDRESS:'0xBa4595e22d85FcA35755433282180356A4f35E3f'

};
