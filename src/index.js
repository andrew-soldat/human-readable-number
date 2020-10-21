module.exports = function toReadable(number) {
    const oneDigitNumber = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ],
        tenDigitNumber = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        twoDigitNumber = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        threeDigitNumber = [
            "",
            "one hundred",
            "two hundred",
            "three hundred",
            "four hundred",
            "five hundred",
            "six hundred",
            "seven hundred",
            "eight hundred",
            "nine hundred",
        ],
        fourDigitNumber = [
            "one thousand",
            "two thousand",
            "three thousand",
            "four thousand",
            "five thousand",
            "six thousand",
            "seven thousand",
            "eight thousand",
            "nine thousand",
        ];
    let arr = number.toString().split("");
    let readableNumber;
    if (number === 0) {
        return "zero";
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            readableNumber = oneDigitNumber[arr[i]];
        }
        if (arr.length === 2 && arr[0] == 1) {
            readableNumber = tenDigitNumber[arr[1]];
        }
        if (arr.length === 2 && arr[0] > 1) {
            readableNumber = `${twoDigitNumber[arr[0]]} ${
                oneDigitNumber[arr[1]]
            }`;
        }
        if (arr.length === 3 && arr[1] > 1) {
            readableNumber = `${threeDigitNumber[arr[0]]} ${
                twoDigitNumber[arr[1]]
            } ${oneDigitNumber[arr[2]]}`;
        }
        if (arr.length === 3 && arr[1] == 1) {
            readableNumber = `${threeDigitNumber[arr[0]]} ${
                tenDigitNumber[arr[2]]
            }`;
        }
        if (arr.length === 3 && arr[1] == 0) {
            readableNumber = `${threeDigitNumber[arr[0]]} ${
                oneDigitNumber[arr[2]]
            }`;
        }
    }
    let result = readableNumber.split("");

    if (result[result.length - 1] === " ") {
        result.splice(-1, 1);
        return result.join('');
    } else {
        return result.join("");
    }
};
