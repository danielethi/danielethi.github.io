let student={
    firstName:"",
    lastName:"",
    grades:[],  
 
 inputNewGrades:function(){
         
       
 },
 computeAverageGrades:function(){
       
 }
 }
 
 //person 1
 let person1=Object.create(student);
 person1.firstName="John"
 person1.lastName="Doe"
 person1.grades=[90,88,100,86];
 
 //person 2
 let person2=Object.create(student);
 person2.firstName="Alex"
 person2.lastName="Vian"
 person2.grades=[82,94,100,96];
 
 //person 3
 let pesron3=Object.create(student);
 person3.firstName="peter"
 person3.lastName="Boo"
 person3.grades=[89,85,100,82];
 
 console.log(pesrson1,person2,person3);
 
 function Student(firstName,lastName){
   this.firstName=firstName;
   this.lastName=lastName;
   this.grades=[];
 }
 
 let stu1=new Student("John","Dod",[90,88,100,86])
 let stu2=new Student("Alex","Vian",[82,94,100,96])
 let stu3=new Student("John","Dod",[89,85,100,82])
 Student.prototype.inputNewGrades=function(){
       
       
 }
 Student.prototype.computeAverageGrades=function(){
        
         let total=this.grades.reduce((acc,item)=>item.grades+acc,0);
         avg=total/this.grades.length;
         return avg;
       
 }
 
 Student.prototype.sort=function(){
        console.log(arr.sort((a,b)=>a-b));
 }
 
 class User{
   constructor(firstName,lastName,age){
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;    
   }
   getFullName(()=>fullName='${this.firstName);
 
    
 }
 let john=new User("John","Daniel",30);
 console.log(john.age)
 console.log(john)
 
 
 
 
 
 
 
 
 
 