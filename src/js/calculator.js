export default class Calculator {
   constructor(age,lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
}

getMercury(){
    return this.age /.24;
   }

getVenus(){
    return this.age /.62;
   }

getMars(){
    return this.age /1.88;
   }

getJupiter(){
    return this.age /11.86;
   }

getMercuryExpect(){
      return this.lifeExpectancy /.24;
}

getVenusExpect(){
    // return this.lifeExpectancy /.62;
}
// getPlanetExpect(){
//     const lifeEcpectancy = {
//         mercury :getMercuryreturn this.lifeExpectancy /.24;
// }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }    
// }

// export default class Rectangle {
//   constructor(side1, side2) {
//     this.side1 = side1;
//     this.side2 = side2;
//   }
//   getArea() {
//       return this.side1 * this.side2;
//   }
 }