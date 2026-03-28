const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
     {return 'ERROR';}
    let sum=0;
    if(a<b)
     {for(let i=a; i<=b; i++)
      {sum+=i;}}
    else
     {for(let i=b; i<=a; i++)
      {sum+=i;}}
    return sum;

    // 2) if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    //     {return 'ERROR';}
    //    const min = Math.min(a, b);
    //    const max = Math.max(a, b);
    //    let sum = 0;    
    //    for (let i = min; i <= max; i++)
    //     {sum += i;}
    //    return sum;

    // 3) if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    //     {return 'ERROR';}
    //    let test=a-b;
    //    if(test<0)
    //     {test=-test;}                     // Mathematical approach using 'Arithmetic Progression'
    //    return (test+1)*(a+b)/2;          // formula for sum of n numbers: n*(first number + last number)/2 where n =is calculated uing formula l= a+(n-1)*d 
                                           // here n+1 is done to include all numbers in the range and d is 1 as we are counting all numbers in the range
};
// Do not edit below this line
module.exports = sumAll;
