//bonus en cours
//Bonus1.

function  countLatin(str1){
  console.log(str1.length);
 var count = 0;
  for (i =0; i <str1.length; i++){
    if (str1[i] === "e" && str1[i + 1] === "t")
    count++;
  }
  return (count);
}

console.log(countLatin(str1));
