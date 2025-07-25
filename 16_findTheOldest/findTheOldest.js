const findTheOldest = function(people) {
  let person;
  let age = 0;
  people.forEach((p) => {
    const death = p.yearOfDeath ? p.yearOfDeath : 2025;
    if (death - p.yearOfBirth > age) {
      age = death - p.yearOfBirth;
      person = p;
    }
  })
  return person;
};

// Do not edit below this line
module.exports = findTheOldest;
