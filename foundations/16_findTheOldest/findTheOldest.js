const findTheOldest = function(people) {
 const oldest = people.reduce((oldestPerson, currentPerson) => {
  const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
  const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
  return currentAge > oldestAge ? currentPerson : oldestPerson;
 }, people[0]);
 return oldest;

// 2) people.sort((a, b) => {
//     const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
//     const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
//     return ageB - ageA; // Sort in descending order
//    });
//    return people[0]; // Return the first person in the sorted array (the oldest)   

// 3) let oldestPerson = people[0];
//    for (let i = 1; i < people.length; i++)
//    {const currentPerson = people[i];
//     const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
//     const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
//     if (currentAge > oldestAge)
//      {oldestPerson = currentPerson;}}  
//    return oldestPerson;







};

// Do not edit below this line
module.exports = findTheOldest;
