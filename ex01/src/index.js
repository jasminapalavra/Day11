{
var myItems = [2, 4, 0, 8, 10];
myItems[2] = 6;

};
function myArrayFunction(arr) {
var myItems = [...arr];

return myItems;

}


console.log(myArrayFunction([myItems]));
module.exports = myArrayFunction;