const fibonacci = function(member) {
 member = Number(member);
 if (member < 0)
  return "OOPS";
 if (member === 0)
  return 0;
 if (member === 1)
  return 1;
 return fibonacci(member - 1) + fibonacci(member - 2);
// 2) if (member < 0)
//     return "OOPS";
//    if (member === 0)       
//     return 0;
//    if (member === 1)
//     return 1;
//    let a = 0;
//    let b = 1;
//    let c = 0;
//    for (let i = 2; i <= member; i++)
//     {c = a + b;
//      a = b;
//      b = c;}
//    return c;
};

// Do not edit below this line
module.exports = fibonacci;
