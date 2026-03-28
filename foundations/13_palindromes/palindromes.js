const palindromes = function (string) {
 let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
 let reversedString = cleanString.split('').reverse().join('');
 if (cleanString === reversedString) 
  {return true;}
 else
  {return false;}

// 2) const palindromes = function (string) {
//     let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reversedString = cleanString.split('').reverse().join('');
//     return cleanString === reversedString;
//    };

// 3) const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';        // Since we only consider letters and numbers, create a variable containing all valid characters

//   // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
//    const cleanedString = string
//     .toLowerCase()
//     .split('')
//     .filter((character) => alphanumerical.includes(character))
//     .join('');

//    const reversedString = cleanedString.split('').reverse().join('');        // Create a new reversed string for comparison

//    return cleanedString === reversedString;          // Return the outcome of the comparison which will either be true or false
};

// Do not edit below this line
module.exports = palindromes;
