let findTheOldest = function(arr) {
    const today = new Date();
    
    const sorted = arr.sort(function(a, b) {
        if (!a.yearOfDeath) {
            a.yearOfDeath = today.getFullYear();
        }
        if (!b.yearOfDeath) {
            b.yearOfDeath = today.getFullYear();
        }

        const first = a.yearOfDeath - a.yearOfBirth;
        const second = b.yearOfDeath - b.yearOfBirth;

        return first > second ? -1 : 1;
    });

    return sorted[0];
}

module.exports = findTheOldest
