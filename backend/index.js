

//Middleware
const express = require('express')
var Web3 = require('web3');

// Router
const router = new express.Router


var url = 'https://mainnet.infura.io/v3/e035c16a985a496f9d377357af039ef9'
const web3 = new Web3(url);

// Function that checks address balance

checkBalance = async function (address) {

    check =  web3.utils.isAddress(address)
    
    if(check){
        await web3.eth.getBalance(address, (err,bal) => {
            balance = bal
            balance = web3.utils.fromWei(balance,'ether')
            
        })
        return balance +' ETH'
    }else{
        return('It is not a valid address')
    }
}

// Iterating through ETH addresses and checking their balance

var ethDict = new Object();
iterate = async function(addressArray){
    ethDict = {}
    for(let i=0; i<addressArray.length;i++){
        balance = await checkBalance(addressArray[i])
        ethDict[addressArray[i]]= balance
    }
    return ethDict

}





// Post request receiving the req and answare with balance response

router.post('/data', async (req, res) =>
{
    try
    {
       
        console.log(req.body)
        data = await iterate(req.body.eth_addresses)
        
        res.status(201).send(data)
    }
    catch (e)
    {
        res.status(400).send(e)
    }
})

module.exports = router