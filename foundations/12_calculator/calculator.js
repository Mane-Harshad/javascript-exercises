const add = function(a,b) {
 return a+b;
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
  //2)  total = 0;
  //    for (let i = 0; i < array.length; i++) 
  //     {total += array[i];}
  //    return total;

};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
  //2) total = 1;
  //   for (let i = 0; i < array.length; i++) 
  //    {total *= array[i];}
  //   return total;
};

const power = function(x,y) {
  return Math.pow(x,y);
  // 2) return x ** y;
};

const factorial = function(n) {
  if (n===0)
   {return 1;}

  let result = 1;
  for (let i = 1; i <= n; i++)
   {result *= i;}
  return result;
  // 2) if (n === 0)
  //     {return 1;} 
  //    else 
  //     {return n * factorial(n - 1);}   
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
