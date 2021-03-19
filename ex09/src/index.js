function myBouncer(arr){
   var noviArr = [];
for(var i=0; i<arr.length; i++) {
    if(arr[i] == false) {
  noviArr.push(arr[i]);
    } 
}
return noviArr;

    
}

console.log(myBouncer([444, "", 0, false, null, 8, undefined, "", true, 0, false]));
module.exports = myBouncer;