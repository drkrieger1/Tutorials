import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
   // Properties
   firstName: string = 'John';
   lastName: string = 'Doe';
   age: number = 30;
   address;

   foo: any;
   hasKinds: boolean;
   numberArray: number[];
   stringArray: string[];
   myTuple: [string, number, boolean];
   anyArray: any[];
   unusable: void;
   u: undefined;
   n: null;
   //Methods
   constructor(){
    //    this.sayHello();
    // console.log(this.age);
    // this.hasBirthday();
    // console.log(this.age);

    this.address ={
        street: '1234 50th st',
        city: 'Seattle',
        zip: '98002' 
    }
    
    this.foo = 1;
    this.hasKinds = false;
    this.numberArray = [1,2,3];
    this.stringArray = ['hello', 'world'];
    this.myTuple = ['dope', 8 , true]; 
    this.anyArray = [1, false, 'hello'];
    
    console.log(this.addnumbers(10, 200));
   }

   sayHello(){
       console.log(`Hello ${this.firstName}...`);
   }

   hasBirthday(){
       this.age += 1;
   }
//    <-- Data type in Data type out -->
   addnumbers(num1: number, num2:number):number{
        return num1 + num2; 
   }
}