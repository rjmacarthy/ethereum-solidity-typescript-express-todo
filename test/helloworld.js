var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld', function() {
  it("should have a be able to set a message", function() {
    return HelloWorld.deployed().then(function(instance) {
        hw = instance;
        hw.setMessage("Test");
        return hw;
    }).then(function(hw) {
        console.log(hw);
        assert.equal(hw.message.call(), "Test");
    });
  });

});
