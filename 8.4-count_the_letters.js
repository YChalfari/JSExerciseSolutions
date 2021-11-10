const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
/*!-----   HOW  IS COUNT RECEIVING ANYTHING?   -----!*/
function letterCountOrganizer(arr){
  let count ={};
  arr.forEach(str => {
      str.toLowerCase().split('').forEach( (letter) => {
      console.log(letter);
      count[letter] ? count[letter]++ : count[letter] = 1;
    })
  });
  return count;
}
console.log(letterCountOrganizer(array));