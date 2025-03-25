const findTheOldest = function (people) {
  let oldestPerson;
  let oldestAge = 0;
  let age;

  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfBirth !== undefined && people[i].yearOfDeath === undefined) {
      age = new Date().getFullYear() - people[i].yearOfBirth;
    } else {
      age = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    if (age > oldestAge) {
      oldestPerson = people[i];
      oldestAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
