/**
 * Created by Vlad on 2017-06-22.
 */


export interface ICoinNetwork{
  mainNet:{
    messagePrefix:string
    bip32: {
      public: number,
      private: number
    },
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
    dustThreshold: number
  },
  testNet:{
    messagePrefix:string
    bip32: {
      public: number,
      private: number
    },
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
    dustThreshold: number
  }

}


export let DashNetwork = {
    mainNet: {
        messagePrefix: '\x19DarkCoin Signed Message:\n',
        bip32: {
            public: 0x02fe52cc,
            private: 0x02fe52f8
        },
        pubKeyHash: 0x4c,
        scriptHash: 0x10,
        wif: 0xcc,
        dustThreshold: 5460
    },
    testNet: {
        messagePrefix: '\x19DarkCoin Signed Message:\n',
        bip32: {
            public: 0x3a805837,
            private: 0x3a8061a0
        },
        pubKeyHash: 0x8c,
        scriptHash: 0x13,
        wif: 0xef,
        dustThreshold: 5460
    },
}

export let BitcoinNetwork = {
    mainNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
        dustThreshold: 546
    },
    testNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
        dustThreshold: 546
    }
}

export let DogeNetwork = {
    mainNet: {
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: {
            public: 0x02facafd,
            private: 0x02fac398
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e,
        dustThreshold: 0
    },
    testNet: {
      messagePrefix: '\x19Dogecoin Main net:\n',
      bip32: {
        public: 0x02facafd,
        private: 0x02fac398
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0x9e,
      dustThreshold: 0
    }
}

export let LiteCoinNetwork = {
    mainNet: {
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
        },
        pubKeyHash: 0x30,
        scriptHash: 0x05,
        wif: 0xb0,
        dustThreshold: 0
    },
    testNet: {
      messagePrefix: '\x19Litecoin Main net:\n',
      bip32: {
        public: 0x019da462,
        private: 0x019d9cfe
      },
      pubKeyHash: 0x30,
      scriptHash: 0x05,
      wif: 0xb0,
      dustThreshold: 0
    }
}


export let ZCashNetwork = {
    name:'ZEC',
    mainNet: {
        messagePrefix: '\x19ZCash Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x1cb8,
        scriptHash: 0x1cbd,
        wif: 0x80,
        dustThreshold: 0
    },
    testNet: {
        messagePrefix: '\x19ZCash Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x1d25,
        scriptHash: 0x1cba,
        wif: 0xef,
        dustThreshold: 0
    }
}

export let LiskNetwork = {
    mainNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
        dustThreshold: 546
    },
    testNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
        dustThreshold: 546
    }
}






export function getNetwork(coin:string, testNet:boolean = false):ICoinNetwork{
    switch (coin.toUpperCase()){
        case 'BTC':
            return BitcoinNetwork;
        case 'DASH':
            return DashNetwork;
        case 'ZEC':
            return ZCashNetwork;
        case 'DOGE':
            return DogeNetwork;
        case 'LTC':
            return LiteCoinNetwork;
        case 'LISK':
            return LiskNetwork;
        default :
            return null
    }
}