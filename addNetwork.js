const addNetwork = () => {
  const params = [{
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com']
  }]

  window.ethereum.request({ method: 'wallet_addEthereumChain', params })
    .then(() => console.log('Success'))
    .catch((error: Error) => console.log("Error", error.message))
}

return (
  <button onClick={addNetwork}>Connect to Binance Smart Chain</button>
)
