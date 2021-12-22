const addNetwork = () => {
  const params = [{
    chainId: '0x1e',
    chainName: 'RSK Mainnet',
    nativeCurrency: {
      name: 'RSK BTC',
      symbol: 'RBTC',
      decimals: 18
    },
    rpcUrls: ['https://public-node.rsk.co'],
    blockExplorerUrls: ['https://explorer.rsk.co']
  }]

  window.ethereum.request({ method: 'wallet_addEthereumChain', params })
    .then(() => console.log('Success'))
    .catch((error: Error) => console.log("Error", error.message))
}

return (
  <button onClick={addNetwork}>Add RSK Mainnet to Metamask</button>
)
