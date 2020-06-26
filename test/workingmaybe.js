import {
    addition,
    subtract,
    multiply,
    division
} from '../math.js';

const test = QUnit.test;

test('it should return 13 when passed 8 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 8;
    const arguement2 = 5;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 21 when passed 19 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 19;
    const arguement2 = 2;
    const expected = 21;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 3 when passed 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 1;
    const arguement2 = 2;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 21 when passed 24 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 24;
    const arguement2 = 3;
    const expected = 21;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 7 when passed 11 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 11;
    const arguement2 = 4;
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 32 when passed 100 and 68', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 100;
    const arguement2 = 68;
    const expected = 32;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 44 when passed 11 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 11;
    const arguement2 = 4;
    const expected = 44;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 72 when passed 9 and 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 9;
    const arguement2 = 8;
    const expected = 72;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 18 when passed 6 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 6;
    const arguement2 = 3;
    const expected = 18;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 11 when passed 44 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 44;
    const arguement2 = 4;
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 9 when passed 81 and 9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 81;
    const arguement2 = 9;
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 2 when passed 86 and 43', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arguement1 = 86;
    const arguement2 = 43;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(arguement1, arguement2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
