//1.Implicit binding
//2.Explicit binding
//3.new binding
//4.window binding


//IMPLICIT BINDING
//function printPlayerName(name){
 // console.log(name);
//}

//Example:01

//printPlayerName("Sakib")
            
  //          let sakib = {
  //            name : "Sakib",
  //            age : 35,
  //            printPlayerName : function(){
  //              console.log(this.name);
  //            }
  //          
  //            
  //          };
  //          sakib.printPlayerName();
  
  
  //Example:02
// Receiving object from outer side
        
//        function printPlayerNameFunction(obj){
//          obj.printPlayerName = function(){
//            console.log(this.name);
//          }
//        };
 //       let sakib = {
//          name:'Sakib',
 //         age : 35
 //       };
 //       let tamim = {
 //         name:'Tamim',
 //         age : 35
//        };
        
//        printPlayerNameFunction(sakib);
//        printPlayerNameFunction(tamim);


//Example :03

        // function Person(name,age){
        //   return{
        //     name: name,
        //     age: age,
        //     printName:function(){
        //       console.log(this.name);
        //     },
            
        //     father : {
        //     name: "Mr. XXX",
        //     printName:function(){
        //       console.log(this.name);
        //     }
        //   }
        //   };
        // }
        
        // var sakib = Person("Sakib",35);
        // sakib.printName();
        // sakib.father.printName();

//Explicit BINDING
// function printPlayerName(){
//   console.log(`${this.name} is ${v1},${v2} & ${v3}`);
// }

// let sakib = {
//   name :"Sakib Al Hasan",
//   age :35
// };
// var v1 = "Handsome ";
// var v2 = "All rounder";
// var v3 = "Best Player";
// var v = [v1,v2,v3];
// //printPlayerName.call(sakib,v1,v2,v3);
// //printPlayerName.apply(sakib,v);

// var newFunc = printPlayerName.bind(sakib,v1,v2,v3);
// //bind() is almost similar to call(). the main difference is that bind() returns all things into a new function  when the main function is called  

// New Binding
// function Person(name,age){
//   this.name = name;
//   this.age = age;
  
// }
// var sakib = new Person("Sakib",35);

// Window binding
'use strict'
var printName = function(){
  console.log(this.name);
};

var sakib = {
  name : 'Sakib Al Hasan',
  printName : function(){
    console.log('hi')
  }
};
