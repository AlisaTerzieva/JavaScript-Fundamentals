function compoundInterest(input) {
    let principalSum = Number(input[0]);
    let interestRate = Number(input[1]);
    let compPeriodMonths = Number(input[2]);
    let timespanYears = Number(input[3]);

    let compPeriod = 12 / compPeriodMonths;

    let interest = principalSum * Math.pow(1 + interestRate * 0.01/ compPeriod, timespanYears*compPeriod);
    console.log(interest.toFixed(2));
}

compoundInterest(['100000', '5', '12', '25']);