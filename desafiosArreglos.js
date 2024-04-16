// Siempre Hambriento
function siempreHambriento(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "comida") {
            console.log("delicioso")
        }
        else if (arr[i] != "comida"){
            console.log("Tengo Hambre")
        }
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

// Filtro paso Alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Mejor que el promedio
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var prom = sum / arr.length
    var count = 0
    for (var i = 0; i < arr.length; i++){
        if (prom < arr[i]) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Arreglo invertido
function reverse(arr) {
    var arrayReverse = [];
    for (var i = arr.length - 1; i >= 0; i--){
        arrayReverse.push(arr[i])
    }
    return arrayReverse;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

//Arreglo de Fibonacci
function fibonacciArray(n) {
    var fibArr = [0, 1];
    var proxFib = 0
    for (var i = 2; i < n; i++){
        proxFib = fibArr[i-1] + fibArr[i-2]
        fibArr.push(proxFib)
    }
    return fibArr;
}  
var result = fibonacciArray(10);
console.log(result); 
