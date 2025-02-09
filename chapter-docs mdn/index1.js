/* 
compiler == HLL(c,c++,javacript)--> executable (runnable) code so-called binary code or machine code

Feature	            Compiler 🏎	                                     Interpreter 🚶‍♂️
How it works	    Translates the whole program before execution.	 Translates line by line while executing.
Execution Speed 	Faster (since the code is precompiled).          Slower (since it translates while running).
Error Handling 	    Detects all errors at once after compiling.	     Detects errors one by one while running.
Usage	            Best,large high-performance(software, games).	 Best for scripting, web development, and quick testing.
Examples	        C, C++, Java (AOT Compilation).                  Python, JavaScript, PHP.

java used both(compiler+interpreter)

compiler  used two type method (aot,jit)

Feature  	        AOT Compiler	                        JIT Compiler
When it compiles	Before running the program	            While running the program
Speed	            Runs faster but takes time to compile	Starts quickly but optimizes while running
Example         	gcc (for C, C++)	                    JavaScript engines in browsers


advantage of JIT?
1-When you open a website with JavaScript, the browser doesn’t compile everything at once.
2-Instead, it translates and optimizes the most used parts while running.
3-This makes web pages load faster and work smoothly.

4-JIT is a part of an interpreter, but it includes compilation features.
5-It compiles code at runtime, so it's neither a pure compiler nor a pure interpreter.
6-It provides the best of both worlds: faster execution like a compiler and flexibility like an interpreter.
*/
/*
First-Class Function
A programming language is said to have First-class functions when functions in that language are treated like any other variable.
 For example, in such a language, 
 1-a function can be passed as an argument to other functions, 
 2-can be returned by another function and
 3-can be assigned as a value to a variable.
*/ 
/*
const abc = ()=>{
    // console.log("helllo")
   let  a="data from abc"
    return a
}
const pqr=function xyz(){
    console.log("hii")
}
abc() //call the function by just add the () anonymous  func
pqr()// named function

const myexecFunc=(pqrs)=>{
     return  pqrs()
}
const saveData = myexecFunc(abc)
console.log("saveData",saveData)
// console.log(myexecFunc(pqr))
*/
/*
Proto-type-based 
JavaScript is called a prototype-based programming language because it doesn't rely on classes
for inheritance but uses prototypes to allow objects to inherit properties and methods directly from other objects.
This approach allows for more dynamic object creation and inheritance, providing flexibility and ease of use.
*/


//what is javascript ?

/*
1-JavaScript (JS) is a lightweight interpreted (or just-in-time compiled->JIT) 
2-programming language with first-class functions. 
3-It is still called a scripting language because of its origin and the way it is executed inside the browser.
4-prototype-based programming language
5-single threaded language
*/