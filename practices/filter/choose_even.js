'use strict';

function choose_even(collection) {
   let collections=collection.filter((num)=>{
      return num%2==0;
   });
   return collections;
}

module.exports = choose_even;
