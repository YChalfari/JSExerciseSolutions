const letterCount  =  {
  h: 3,  e: 4,  l: 3,  o: 7,  g: 3,  d: 3, ' ': 2,  a: 2,  y: 2,  u: 2,  r: 3,  w: 1, c: 1,  m: 2,  t: 1,  b: 1,  s: 1 };

// function switchKeyAndValue (obj){
//   let switched ={};  
//   for(i=0;i<Object.entries(obj).length;i++){
//     switched = Object.fromEntries(Object.entries(obj).map(e =>e.reverse()))}
//    return switched;
// }
// const switchedObj = switchKeyAndValue(letterCount);
// console.log(switchedObj)

function switchKeyAndValue(obj){
  let switched = {};
  Object.entries(obj).forEach((item,index) => {
    console.log(item,item[1],index);
    switched[item[1]] = item[0];
  });
  return switched;
}
console.log( switchKeyAndValue(letterCount));