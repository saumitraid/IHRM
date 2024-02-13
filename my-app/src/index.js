import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

);
function hello(){
  for(const i=1; i<=5; i++){
    console.log(i);
  }
  // console.log(i);
}
// hello();
const person={
  name:'Atanu',
  walk:function(){
    console.log(this);
  },
  talk(){}
}
// person.walk()
// console.log(person.name);
const walk=person.walk.bind(person);
console.log(walk);

// const square=function(num){
//   return num*num;
// }

// console.log(square(4));
// Arrow Function

const square=(num)=>num*num;
// console.log(square(4));
const jobs=[
  {id:1, isActive:true},
  {id:2, isActive:true},
  {id:3, isActive:true},
  {id:4, isActive:false}
];

// const activeJobs=jobs.filter(function(job){ 
//   return job.isActive
// })
// console.log(activeJobs);

const activeJobs=jobs.filter(job=>job.isActive)
console.log(activeJobs);

const colors=['red', 'green', 'blue'];
// const item=colors.map(function(color){
//   return '<li>'+color+'</li>'
// });
// console.log(item);
const item=colors.map(color=>`<li>${color}</li>`)
console.log(item);

const address={
  street:'30/A MG Road',
  city:'Mumbai',
  country:'India'
}
const {street:st, city, country}=address;
console.log(st);

const a1=[1,2,3];
const a2=[4,5,6];
const combine=[...a1,9,...a2];
console.log(combine);

class Person{
  constructor(name){
    // this.name=name;
    console.log(name);
  }
  walk(){
    console.log('Can Walk');
  }
}
class Teacher extends Person{
  tech(){
    console.log('Tech us');
  }
}
const obj=new Teacher('Sanjoy');
obj.tech();
obj.walk();

reportWebVitals();

