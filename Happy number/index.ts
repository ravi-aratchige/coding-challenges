function happyNumber(num: number) {
    let str: string;
    let temp: number = 0;
    str = num.toString();
    for (let i: number = 0; i < str.length; i++) {
        temp = temp + (parseFloat(str[i]));
    }
    num = temp;
}

console.log(happyNumber(19));