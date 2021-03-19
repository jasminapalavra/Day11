var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
 ]

 var averageDayTemp = [29.75, 36.75, 33, 41.5, 52.5]       
 
 function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

for(int i=0; i<arr.length; i++) {
    var prosjek = 0;
    for (int j=0; i<arr[i].length; j++) {
        prosjek = prosjek + arr[i][j];
    }
    prosjek = prosjek / arr[1];
    averageDayTemp.push(prosjek);
    } 

 return averageDayTemp;

}


console.log(myArrayFunction(temps));
module.exports = myArrayFunction;