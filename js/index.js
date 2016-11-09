
    function lopping(n) {
    var f;
    for(var i = 2; i <= n; i++) {
    f = (n-2) + (n-1);
    }
    return f;
    }
    var f = Number(prompt('Imput n'));
    var result = lopping(f);
    document.write(result);