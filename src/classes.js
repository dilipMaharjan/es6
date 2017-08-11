class Person{
  constructor(name,location){
    this.name=name;
    this.location=location;
  }
  register(){
    console.log(this.name + " is registered");
  }
}

let person=new Person('Dilip',"Fl");
person.register();
