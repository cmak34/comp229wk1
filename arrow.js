export class Arrow {
    constructor(numbers, odds = [], evens = []) {
        this.numbers = numbers;
        this.evens = evens;
        this.odds = odds;
    }

    // expression body
    square = () => this.numbers.map(numbers => numbers * numbers);

    printOdd = () => console.log(this.odds.join(", "));

    printEven = () => console.log(this.evens.join(", "));

    // statement body
    separateOddAndEven = () => {
        this.numbers.forEach(n => {
            if (n % 2 === 0) {
                this.evens.push(n);
            } else {
                this.odds.push(n);
            }
        });
    }
}