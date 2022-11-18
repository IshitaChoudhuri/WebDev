// var n=2;
// function square(num)
// {
//     var ans=num*num;
//     return ans;
// }
// var square2=square(n);
// var square4=square(4);
// console.log(square2)
// when a func is invoked execution context is called
// synchronous single threaded language
//callstack--> GEC=global execution context
//hoisting-moves the function/var declaration to the top

// getName();
// console.log(x);
// console.log(getName)
//  var x=7;

// function getName(){
//     console.log("javascript");

// }
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x)
// }

// function b(){
//     var x=100;
//     console.log(x)
// }
// var a=10;
// function b()
// {
//     var x=10;
// }
// console.log(window.a);
// function a()
// {
//     console.log(b);
// }
// var b=10;
// a();
// function a()
// {
//     c()
//     function c(){
//     console.log(b);
//     }
// }
// var b=10;
// a();
// function a()
// {
//     var b=10;
//     c()
//     function c(){
//     console.log(b);
//     }
// }
// console.log(b);
// a();
// function a(){
//     var b=10;
//     c()
//     function c(){
//         console.log(b);
//     }
 
// }

// a();
//functions binded with their lexical environment is called closure.
//callstack
//event-ni rahega
a()
b()
setInterval(c,500)
function a(){
    console.log("a")
}
function b(){
    console.log("b")
}
function c(){
    console.log("c")
}
//callback function returns asynchronous behaviour to javascript