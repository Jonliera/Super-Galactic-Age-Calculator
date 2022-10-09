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
     return this.lifeExpectancy /.62;
}

getMarsExpect(){
    return this.lifeExpectancy /1.88;
}
getJupiterExpect(){
    return this.lifeExpectancy /11.86;
}
getMercuryLeft(){
    return (this.lifeExpectancy/.24) - (this.age/.24);
}
getVenusLeft(){
   return (this.lifeExpectancy/.62) - (this.age/.62);
}
getMarsLeft(){
   return (this.lifeExpectancy/1.88) - (this.age/1.88);
}
getJupiterLeft(){
    return (this.lifeExpectancy/11.86) - (this.age/11.86);
 }
 }