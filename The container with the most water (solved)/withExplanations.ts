function containerWithMostWater(height: number[]): number {
    let minHeight: number = 0, amountOfWater: number = 0;
    for (let column1: number = 0; column1 < height.length; column1++) {
        console.log(`Currently checking against column ${column1} as the first column. Height is ${height[column1]}`);
        for (let column2: number = 1; column2 < height.length; column2++) {
            console.log(`Currently checking against column ${column2} as the second column. Height is ${height[column2]}`);
            // getting minimum height between columns being compared currently
            if (height[column1] < height[column2]) {
                minHeight = height[column1];
                console.log(`Minimum height between column ${column1} and column ${column2} is ${minHeight}`);
            } else {
                minHeight = height[column2];
                console.log(`Minimum height between column ${column1} and column ${column2} is ${minHeight}`);
            }
            // checking whether amount of water between columns being compared is greater than the greatest amount currently
            if (amountOfWater < (minHeight * (column2 - column1))) {
                amountOfWater = (minHeight * (column2 - column1));
                console.log(`Amount of water between column ${column1} and column ${column2} is ${amountOfWater}`);
            }
        }
    }
    return amountOfWater;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));       // output = 49
console.log(containerWithMostWater([1,1]));                     // output = 1