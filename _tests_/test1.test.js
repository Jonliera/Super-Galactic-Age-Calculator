import Calculator from '../src/js/calculator.js';

describe('Calculator', () => {

test('should correctly create a calculator object with a user age and users life expectancy', () => {
     const calculator = new Calculator(41,100);
     expect(calculator.age).toEqual(41);
     expect(calculator.lifeExpectancy).toEqual(100);
});
test('should correctly return the users age in mercury years /.24', () => {
     const newInput = new Calculator(41,100);
     expect(newInput.getMercury()).toEqual(41/.24);
 });
test('should correctly return the users age in venus years /.62', () => {
  const newInput = new Calculator(41,100);
  expect(newInput.getVenus()).toEqual(41/.62);
});
test('should correctly return the users age in mars years /1.88', () => {
  const newInput = new Calculator(41,100);
  expect(newInput.getMars()).toEqual(41/1.88);
});
test('should correctly return the users age in Jupiter years /11.86', () => {
  const newInput = new Calculator(41,100);
  expect(newInput.getJupiter()).toEqual(41/11.86);
});
test('should correctly return life expectancy on mercury', () => {
   const newInput = new Calculator(41,100);
  expect(newInput.getMercuryExpect()).toEqual(100/.24);
});
test('should correctly return life expectancy on venus', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getVenusExpect()).toEqual(100/.62);
});
test('should correctly return life expectancy on mars', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getMarsExpect()).toEqual(100/1.88);
});
test('should correctly return life expectancy on jupiter', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getJupiterExpect()).toEqual(100/11.86);
});
test('should correctly return users years left in mercury', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getMercuryLeft()).toEqual((100/.24)-(41/.24)
 );
});
test('should correctly return users years left in venus', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getVenusLeft()).toEqual((100/.62)-(41/.62)
 );
});
test('should correctly return users years left in Mars', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getMarsLeft()).toEqual((100/1.88)-(41/1.88));
});
test('should correctly return users years left in Jupiter', () => {
  const newInput = new Calculator(41,100);
 expect(newInput.getJupiterLeft()).toEqual((100/11.86)-(41/11.86));
});


 });


