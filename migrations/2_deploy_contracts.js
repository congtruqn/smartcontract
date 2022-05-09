const ERC20Basic = artifacts.require("ERC20Basic");
var TokenSale = artifacts.require("TokenSale");
module.exports = function(deployer) {
  deployer.deploy(ERC20Basic).then(function() {
    var tokenPrice = 2;
    return deployer.deploy(TokenSale,ERC20Basic.address,tokenPrice);
  });
};