var doSearch = function (array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var puntoMedio;
    var valor;

    while (max >= min)
    {
        puntoMedio = parseInt((min + max) / 2);
        valor = array[puntoMedio];

        if (valor == targetValue) return puntoMedio;
        else if (valor > targetValue) max = puntoMedio - 1;
        else  min = puntoMedio + 1;
    }

    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29
    , 31, 37,41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];

console.log("Found prime at index " + doSearch(primes, 97));