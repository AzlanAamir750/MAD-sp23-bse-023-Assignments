function sortOddNumbers(arr) {
    const odds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    let oddIndex = 0;

    return arr.map(n => {
        if (n % 2 !== 0) {
            return odds[oddIndex++];
        } else {
            return n;
        }
    });
}

// Test cases
console.log(sortOddNumbers([7, 1]));                  
console.log(sortOddNumbers([5, 8, 6, 3, 4]));          
console.log(sortOddNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); 