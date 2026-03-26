const reverseString = function(string) {
    let reversedString = '';
    let n=string.length;
    for (let i = n - 1; i >= 0; i--)
     {reversedString += string.at(n-1);
      n=n-1;}

       //   Other ways to reverse a string:-       
      //  reversedString += string[i];}
     //  return string.split("").reverse().join(""); --> Odin's solution
    //   reversedString += string.at(i); --> Which eliminates use of "n--" above
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
