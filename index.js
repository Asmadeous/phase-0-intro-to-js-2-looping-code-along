function writeCards (names, gift) {
    const ary =[]
    for (let i = 0; i < names.length; i++) {
      ary.push( `Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
}
return ary;
}
function countDown(c){
  while (c >= 0){
    console.log(c--)
  }
}