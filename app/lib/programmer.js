export default class Programmer{
  constructor(name, language="Ruby"){
    this.name = name;
    this.language = language ; 
  }

  evangelize(){
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}

export var bestLanguages = ["Ruby", "Elixir"];


export function addJavaScript(otherList){
  var new_list = [otherList];
  new_list.push("JavaScript");
  return new_list;
};





