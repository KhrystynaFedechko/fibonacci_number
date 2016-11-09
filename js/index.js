// function methodR(n) {
// if ( n <= 2 ) {
//     return 1;
// } 
// return methodR ( n - 1 ) + methodR ( n - 2 );
// } 
// var x = Number(prompt('Imput number'));
// var result = methodR(x);
// document.write("The Fibonacci number is " + result);

    function methodLoop(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
    }
    var x = Number(prompt('Imput number'));
    var result = methodLoop(x);
    document.write("The Fibonacci number is " + result);


   
    
    
  