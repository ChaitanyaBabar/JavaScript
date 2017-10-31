var a = 'This is gloabal a';
var tt = 'This is correct test';
d = 5;
f = 20;

function callme() {
    var a = 10;
    b = 20;
    tt = "This has changed tt";
    var c = function add() {
        a = 11;
        d = 555;
        tt = tt;
        console.log(tt); //This has Changed tt
        console.log(h); //undefined
        return function() {
            var d = d;
            f = 20;
            console.log("a has not Changed i.e " + a); //11
            console.log("This must be 5 i.e " + d); //5
        }
        var h = 1;
    }
    var g = c();
    return g;
    d = d + 1;
    var d;
}
z = callme();
var pointer = z(); // pointer to all 
console.log(z); //Function
console.log(d); //5
console.log(tt); //This has Changed tt



















function callme() {
    var a = 10;
    b = 20;
    tt = "This has changed tt";
    yyo = "This is YYO MAN";
    var c = function add() {
        a = 11;
        d = 555;
        tt = tt;
        console.log(tt); // This has changed tt 
        console.log(h); //555  
        return function() {
            var d = d;
            f = 20;
            console.log("a has Changed i.e " + a);
            console.log(yyo);
            console.log("This must be 5 i.e " + d1);
        }
        var h = 1;
    }
    var g = c();
    return g;
    d = d + 1;
    var d;
}