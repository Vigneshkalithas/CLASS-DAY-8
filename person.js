
class Person{
    constructor(firstname,lastname,age,gender,interests){
        this.name ={ 
            first : firstname,
             last : lastname,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    getFirstname(){
        return `First name : ${this.name.first}`;
    }
    getlastname(){
        return `Last name : ${this.name.last}`;
    }
    getFullname(){
        return `Full name :  ${this.name.first} ${this.name.last}`;
    }
    getAge(){
        return `${this.name.first} ${this.name.last} Age is ${this.age}`;
    }
    getEligible(){
        if(this.age >= 18){
            return `${this.name.first} is eligible for Voting `;
        }
        return`${this.name.first} is not eligible for Voting `;
    }
    getInterests(){
        return `${this.name.first} intersted in : ${this.interests}`;
    }
    getGender(){
        return `Gender is : ${this.gender}`;
    }
}


const vicky = new Person("Vignesh","Kalithas",23,"male","learning,coding");
const sri = new Person("Sri","Vishalini",20,"female","Music,Movies");
const andavar = new Person("Andavar","Mani",23,"male","Car Racing");
const sachin = new Person("Aathi","Sachin",10,"male","Running");


console.log(vicky);
console.log(sri);
console.log(andavar);
console.log(sachin);        


console.log(vicky.getFirstname());
console.log(vicky.getlastname());
console.log(vicky.getFullname());
console.log(vicky.getAge());
console.log(vicky.getEligible());
console.log(vicky.getInterests());
console.log(vicky.getGender());

console.log(sri.getFirstname());
console.log(sri.getlastname());
console.log(sri.getFullname());
console.log(sri.getAge());
console.log(sri.getEligible());
console.log(sri.getInterests());
console.log(sri.getGender());

console.log(andavar.getFirstname());
console.log(andavar.getlastname());
console.log(andavar.getFullname());
console.log(andavar.getAge());
console.log(andavar.getEligible());
console.log(andavar.getInterests());
console.log(andavar.getGender());

console.log(sachin.getFirstname());
console.log(sachin.getlastname());
console.log(sachin.getFullname());
console.log(sachin.getAge());
console.log(sachin.getEligible());
console.log(sachin.getInterests());
console.log(sachin.getGender());











