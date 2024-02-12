/*---------Basic way Object Understanding-----------*/
var stud1 = {
    name: 'John',
    getName: function() {
        return this.name;
    }
}
var stud2 = {
    name: 'Doe',
    getName: function() {
        return this.name;
    }
}
stud1.getName(); // VALUE OF "this" DEPENDS UPON THE OBJECT WHICH CALLS THE FUNCTION IN THIS CASE
stud2.getName();

// A bit more clear
var getName = function() { // Function can be assigned to the variables
    return this.name;
};
//  Above form is called function Expression i.e assiging the varaible to the function
// Same cab be done as follows which is known as Function Declaration
function getName() {
    return this.name;
}
// Advantage of doing Function Decalration over
//Function Expression is the Function declaration is hoisted  :)

var stud1 = {
    name: 'John',
    getName: getName // These Varaibles can also be assigned to another variables 
        //  i.e in JavaScript functions are First Class Object
};
var stud2 = {
    name: 'Doe',
    getName: getName
};