const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const getAge = (person) => {
            const deathYear = person.yearOfDeath || new Date().getFullYear();
            return deathYear - person.yearOfBirth;
        };
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);

        return currentAge > oldestAge ? current : oldest;
    }

    )
};

// Do not edit below this line
module.exports = findTheOldest;
