'use strict';
function map_to_even(collection){
  let collections=collection.map((num)=>{
    return num*2;
 });
 return collections;
}
module.exports = map_to_even;
