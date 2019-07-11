'use strict';

function choose_multiples_of_three(collection) {
  let collections=collection.filter((num)=>{
    return num%3==0;
 });
 return collections;
}

module.exports = choose_multiples_of_three;
