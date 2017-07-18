var TodoContract = artifacts.require("./TodoContract.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoContract);
};
