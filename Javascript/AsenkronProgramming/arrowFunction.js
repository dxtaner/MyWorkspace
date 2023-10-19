const person = {
  age: 26,
  // tellAge : function(){

  //     // this - Person
  //     console.log(this);
  //     console.log(this.age);
  // }.bind(this)

  tellAge: function () {
    console.log(this);
    console.log(this.age);
  },

  // this - Window
};

person.tellAge();
