'use strict';
var map_to_four_multiples_add_one = function(collection){
  let collections=collection.map((num)=>{
    return num*4+1;
 });
 return collections;
};

module.exports = map_to_four_multiples_add_one;
