function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(checkVotingEligibility(19));
