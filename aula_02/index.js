var n = 10;

function fatorial(n) {
    var f = 1;  
    for (var i = 1; i <= n; i++) {
        f *= i;
    }        
    return f;
}

console.log("Fatorial é = " + fatorial(n));