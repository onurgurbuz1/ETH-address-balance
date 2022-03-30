# ETH-adress-investigation
This application receives ETH addresses and investigate their balance.

In order to run code successfully you can type terminal 'npm run dev' and 'npm run start', a POST request should held to 'localhost:3000/data' in a JSON array format. An example of the JSON test content is below.
    
    {"eth_addresses": [
    "0x00000000219ab540356cBB839Cbe05303d7705Fa",
    "74674839Cbe05303d7705Fasds",
    "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
    "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
    "Eth cüzdanı olmayan bir yazı"
    ]}
    
Detailed explanation have given in the code comments.

Version Description
Node version v14.16.0
NPM version 8.3.0
