const removeFromArray = function(array, ...args) 
{return array.filter(item => !args.includes(item));
    // 2) for (let i = 0; i < args.length; i++)
    //    {// for (let j = 0; j < array.length; j++)
    //     {// if (args[i] === array[j])
    //      {// array.splice(j, 1);
    //       j--;}}}
    // return array;

    // 3) for (let i = 0; i < args.length; i++)             /*
    //     {let index = array.indexOf(args[i]);
    //      if (index !== -1)                                   Does not work for multiple of the same value, as indexOf only returns the first index of the value
    //       {array.splice(index, 1);}}
    //    return array;                                     */

    // 4) args.forEach(item => {                            /*
    //     const index = array.indexOf(item);
    //     if (index !== -1)                                    Does not work for multiple of the same value, as indexOf only returns the first index of the value
    //      {array.splice(index, 1);}
    //   });
    //   return array;                                      */  

    // 5) const newArray = [];
    //    array.forEach(item => {
    //     if (!args.includes(item)) 
    //      {newArray.push(item);}
    //   });
    //   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
