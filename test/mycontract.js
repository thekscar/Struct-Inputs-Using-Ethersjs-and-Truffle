const MyContract = artifacts.require('MyContract');
const ethers = require('ethers');
const toBytes32 = require('./helpers/toBytes32.js');

contract ( 'MyContract', function(accounts) {
  
  const userOne = accounts[0];
  const userTwo = accounts[1];

  const hashOne = toBytes32(120887903481703);
  const hashTwo = toBytes32(971026487123128907);

  let mycontract;
  let mycontractAddress;
  let mycontractABI;

  const provider = new ethers.providers.Web3Provider(web3.currentProvider);
  
  let myetherscontract;
  let etherswallet; 

  beforeEach(async() => {
    mycontract = await MyContract.new(); 
    mycontractAddress = mycontract.address;
    mycontractABI = mycontract.abi;
    
    myetherscontract = new ethers.Contract(mycontractAddress, mycontractABI, provider);

  });

  it('Should allow a struct to be added', async() => {
    
    const temp = {
      number: 100,
      person: userOne,
      random: hashOne
    };

    const signer = provider.getSigner(userOne);
    myetherscontract = myetherscontract.connect(signer);
    const result = await myetherscontract.addStruct(temp, { gasLimit: 3000000 });
    
    console.log(result);
    
  });
    
});

