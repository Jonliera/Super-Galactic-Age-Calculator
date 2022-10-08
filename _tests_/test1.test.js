import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

test('should correctly create a calculator object with a user age and users life expectancy', () => {
     const calculator = new Calculator(41,80);
     expect(calculator.age).toEqual(41);
     expect(calculator.lifeExpectancy).toEqual(80);

});
test('should correctly return the users age in mercury years /.24', () => {
     const newInput = new Calculator(41,80);
     expect(newInput.getMercury()).toEqual(41/.24);
 });
test('should correctly return the users age in venus years /.62', () => {
  const newInput = new Calculator(41,80);
  expect(newInput.getVenus()).toEqual(41/.62);
});
test('should correctly return the users age in venus years /1.88', () => {
  const newInput = new Calculator(41,80);
  expect(newInput.getMars()).toEqual(41/1.88);
});
test('should correctly return the users age in venus years /11.86', () => {
  const newInput = new Calculator(41,80);
  expect(newInput.getJupiter()).toEqual(41/11.86);
});
// test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isoscTriangle = new Triangle(5,5,7)
//     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
//   describe('show how beforeEach() works', () => {
//     let reusableTriangle;
//     beforeEach(() => {
//         reusableTriangle = new Triangle(5, 5, 5);
//       });
//       test('should use the resuableTriangle and update the value of one side', () => {
//         reusableTriangle.side1 = 6;
//         console.log(reusableTriangle);
//       });
//       test('should show how this reusableTriangle is reset to sides of 5', () => {
//         console.log(reusableTriangle);
//       });
//   });
 });


// describe('Calcuilator', () => {
//     let rectangle;
  
//     beforeEach(() => {
//       rectangle = new Rectangle(3,5);
//     });
  
//     test('should correctly create a rectangle object using two sides', () => {
//       expect(rectangle.side1).toEqual(3);
//       expect(rectangle.side2).toEqual(5);
//     });
  
//     test('should correctly get the area of a rectangle object', () => {
//       expect(rectangle.getArea()).toEqual(15);
//     });
//   });
