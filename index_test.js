var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('check to see that 5! is equal to 120', ()=>{

      //setup
  let expected = 120;
  let inputNumber = 5;

      //exercise
  let result = Calculate.factorial(inputNumber);

      //verify
   assert.equal(result, expected);
    });

    it('check to see that a number either that 5 outputs the appropriate result', ()=>{
        //setup
      let expected = 6;
      let inputNumber = 3;
        //exercise
      let result = Calculate.factorial(inputNumber);
        //verify
      assert.equal(result, expected);

    });

    it('check to see that 0! outputs 1', ()=>{
        //setup
      let expected = 1;
      let inputNumber = 0;
        //exercise
      let result = Calculate.factorial(inputNumber);
        //verify
      assert.equal(result, expected);

    });
  });
});