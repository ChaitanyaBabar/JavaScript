// @Object Creation Patterns
// @Contructor Patterns
var Person = function(name, age, city) {
    this.name = name
    this.age = age
    this.city = city

    this.getPerson = function() {
        console.log(this.name + ' ' + this.city + ' ' + this.age)
    }
}

/*
 * New key word cretes a new Object Simielar to java
 * & Person Function in thias case acts as an class
 * This is called instantiation
 */
var Person1 = new Person('Chaitanya', '25', 'Satara')
Person1.getPerson()

var Person2 = new Person('Mayur', '25', 'Satara')
Person2.getPerson()

// @Factory Patterns
var FactoryPerson = function(name, age, city) {
    var temp = {}
        // or var temp = new Object()

    temp.name = name
    temp.age = age
    temp.city = city

    temp.getPerson = function() {
        console.log(temp.name + ' ' + temp.city + ' ' + temp.age)
    }
    return temp
}

// Not Sure about how the new key Word Works as of ###### Mon Jan 9 01:10:36 IST 2017
// Works as it creates a new Instance of the FactoryPerson
var FactoryPerson1 = new FactoryPerson('Chaitanya', '25', 'Satara')
FactoryPerson1.getPerson()

var FactoryPerson2 = new FactoryPerson('Mayur', '25', 'Satara')
FactoryPerson2.getPerson()

// @prototype Patterns

// All the JavaScript Functions & JavaScripts Objects have Some Shared Space in prototype
var PrototypePerson = function() {}

PrototypePerson.prototype.name = 'no name'
PrototypePerson.prototype.age = '0'
PrototypePerson.prototype.city = 'no city'
    // Here 'this' can acees the values of the curent object 
PrototypePerson.prototype.getPerson = function() {
    console.log(this.name + ' ' + this.city + ' ' + this.age)
}

var PrototypePerson1 = new PrototypePerson()
PrototypePerson1.name = 'Chaitanya'
PrototypePerson1.age = '25'
PrototypePerson1.city = 'Satara'
PrototypePerson1.getPerson()

var PrototypePerson2 = new PrototypePerson()
PrototypePerson1.name = 'Mayur'
PrototypePerson1.age = '25'
PrototypePerson1.city = 'Satara'
PrototypePerson1.getPerson()

// Problem with the Prototype Pattern is 
// 1. Cannot create the Properties in Single Line
// 2. Also Each time the Object is Created an getPerson Function is attached to everyObject that is Created , 
//    resulting into Heavy Object Formed

// @Dynamic Prototype Pattern

// Both the Problems i.e ease of creation of the Object & Formation of the heavy Object
// handled using @Dynamic Prototype Pattern

var DynamicPrototypePattern = function(name, age, city) {
    this.name = name
    this.age = age
    this.city = city

    // This Checks if the fucntion is already attched to the prototype (i.e. Shared Memory ) 
    // it avoids creation of the Object
    if (this.getPerson.typeOf != 'function') {
        DynamicPrototypePattern.prototype.getPerson = function() {
            console.log(this.name + ' ' + this.city + ' ' + this.age)
        }
    }
}

var DynamicPrototypePatternPerson1 = new DynamicPrototypePattern('Chaitanya', '25', 'Satara')
DynamicPrototypePatternPerson1.getPerson()

var DynamicPrototypePatternPerson2 = new DynamicPrototypePatternPerson('Mayur', '25', 'Satara')
DynamicPrototypePatternPerson2.getPerson()