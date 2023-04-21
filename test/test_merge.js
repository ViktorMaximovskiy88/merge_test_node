//imports the assert module from the Node.js built-in library. 
//The assert module provides a set of assertion methods that can be used to test code.
const assert = require('assert');
// imports the merge function from the ../merge.js file and assigns it to the obTable variable.
const mergeObservations = require('../merge');
//starts a new test suite using Mocha's describe function. 
//The first argument is a string that describes the suite, 
//and the second argument is a function that contains the individual tests.
describe('Observation Test', function() {
    describe('merge', function() {
      //defines a test using Mocha's it function. 
      //The first argument is a string that describes the test, 
      //and the second argument is a function that contains the test code. 
      //In this case, the test calls the merge function with table1 as an 
      //argument and asserts that the result is equal to table1_result.
      it('Test case 1', function() {
        assert.deepStrictEqual(mergeObservations(table1), table1_result);
      });
      it('Test case 2', function() {
        assert.deepStrictEqual(mergeObservations(table2), table2_result);
      });
      it('Test case 3', function() {
        assert.deepStrictEqual(mergeObservations(table3), table3_result);
      });
      it('Test case 4', function() {
        assert.deepStrictEqual(mergeObservations(table4), table4_result);
      });
      it('Test case 5', function() {
        assert.deepStrictEqual(mergeObservations(table5), table5_result);
      });
    });
});

const table1 = [
{ 
    ID: "*", 
    Time: "22:40", 
    Dir:"O", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
},
{ 
    ID: "1", 
    Time: "22:20", 
    Dir:"O", 
    Vehicle:{
        LP:"",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
}
];
const table1_result = [
  { 
      ID: "01", 
      Time: "22:20", 
      Dir:"O", 
      Vehicle:{
          LP:"",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"Y",
          Dam:"None"
      }
  },
  { 
    ID: "02", 
    Time: "22:40", 
    Dir:"O", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  }
];
const table2 = [
  { 
    ID: "*", 
    Time: "22:30", 
    Dir:"I", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  },
  { 
    ID: "1", 
    Time: "22:20", 
    Dir:"O", 
    Vehicle:{
        LP:"",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  }
];
const table2_result = [
  { 
    ID: "01", 
    Time: "22:20", 
    Dir:"O", 
    Vehicle:{
        LP:"",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  },
  { 
    ID: "02", 
    Time: "22:30", 
    Dir:"I", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  }  
];
const table3 = [
  { 
      ID: "*", 
      Time: "22:30", 
      Dir:"O", 
      Vehicle:{
          LP:"X1234",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"Y",
          Dam:"None"
      }
  },
  { 
      ID: "1", 
      Time: "22:20", 
      Dir:"O", 
      Vehicle:{
          LP:"",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"Y",
          Dam:"None"
      }
  }
];
const table3_result = [
  { 
      ID: "01", 
      Time: "22:20", 
      Dir:"O", 
      Vehicle:{
          LP:"X1234",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"Y",
          Dam:"None"
      }
  }
];
const table4 = [
  { 
      ID: "*", 
      Time: "22:30", 
      Dir:"O", 
      Vehicle:{
          LP:"X1234",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"Light",
          Co:"Acme Trucking"
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"Y",
          Dam:"None"
      }
  },
  { 
      ID: "1", 
      Time: "22:20", 
      Dir:"O", 
      Vehicle:{
          LP:"",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"N",
          Dam:"None"
      }
  }
];
const table4_result = [
  { 
    ID: "01", 
    Time: "22:20", 
    Dir:"O", 
    Vehicle:{
        LP:"",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"N",
        Dam:"None"
    }
  },
  { 
    ID: "02", 
    Time: "22:30", 
    Dir:"O", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"Light",
        Co:"Acme Trucking"
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"Y",
        Dam:"None"
    }
  }
];
const table5 = [
  { 
      ID: "*", 
      Time: "22:30", 
      Dir:"O", 
      Vehicle:{
          LP:"X1234",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"Light",
          Co:"Acme Trucking"
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"Red",
          Chassis:"NGLT920928",
          Number:"TRHU7402058",
          RU:"",
          SI:"N",
          Dam:"None"
      }
  },
  { 
      ID: "1", 
      Time: "22:20", 
      Dir:"O", 
      Vehicle:{
          LP:"",
          ST:"",
          Type:"Tractor",
          Clr:"Brn",
          DOT:"",
          Num:"",
          Dam:"None",
          Co:""
      },
      Trailer: {
          Type:"Cont",
          LP:"421664Y",
          ST:"",
          Clr:"",
          Chassis:"NGLT920920",
          Number:"TRHU7402058",
          RU:"",
          SI:"N",
          Dam:"None"
      }
  }
];
const table5_result = [  
  { 
    ID: "01", 
    Time: "22:20", 
    Dir:"O", 
    Vehicle:{
        LP:"",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"None",
        Co:""
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"",
        Chassis:"NGLT920920",
        Number:"TRHU7402058",
        RU:"",
        SI:"N",
        Dam:"None"
    }
  },
  { 
    ID: "02", 
    Time: "22:30", 
    Dir:"O", 
    Vehicle:{
        LP:"X1234",
        ST:"",
        Type:"Tractor",
        Clr:"Brn",
        DOT:"",
        Num:"",
        Dam:"Light",
        Co:"Acme Trucking"
    },
    Trailer: {
        Type:"Cont",
        LP:"421664Y",
        ST:"",
        Clr:"Red",
        Chassis:"NGLT920928",
        Number:"TRHU7402058",
        RU:"",
        SI:"N",
        Dam:"None"
    }
  }
];