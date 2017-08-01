/**
 * we can use common object-oriented patterns. 
 * Of course, one of the most fundamental patterns in class-based programming --
 *   is being able to extend existing classes to create new ones using inheritance.
*/


class Animal {
  private _Name: string;

  constructor(Name: string) {
    this._Name = Name
  }
  makeSound(behavior:string){
    console.log(`barking`);

  }
  move(distance: number) {
    console.log(`The player who is batting is ${this._Name} and Batting Order is ${distance}`);
    alert(`The player who is batting is ${this._Name} and Batting Order is ${distance}`)
}


};



class Animal1 extends Animal {

  constructor(Name: string) {
    super(Name);
  }
  move(distance= 1){
    super.move(distance);
    
  }
  makeSound (behavior = "barking"){
    super.makeSound(behavior);
  }

}


class Animal3 extends Animal {

  constructor(Name: string) {
    super(Name);
  }
  move(distance= 2){
    super.move(distance);
  }
  makeSound (behavior = "crying"){
    super.makeSound(behavior);
  }
}


let animaldist = new Animal1 ("tiger");
animaldist.move();

let animaldist1 = new Animal3 ("lion");
animaldist.move();



