//todo --> 2. Create a function that:
//*    a. Accepts an array of numbers.
//*    b. Returns the largest and smallest numbers from the array.



const getLargestNumber = (nums) => {

    //* If the array is empty then we return -1 
    if(nums.length === 0) return -1;

    let largestNumber = nums[0];
    for(let value of nums) {
        if(value > largestNumber) {
            largestNumber = value;
        }
    }

    return largestNumber;
}

const getSmallestNumber = (nums) => {

    //* If the array is empty then we return -1 
    if(nums.length === 0) return -1;

    let smallestNumber = nums[0];
    for(let value of nums) {
        if(value < smallestNumber) {
            smallestNumber = value;
        }
    }
    
    return smallestNumber;
}


const nums = [23, 21, 13, 34, 2, 45, 3];

console.log(`The largest number is ${getLargestNumber(nums)}`);

console.log(`The smallest number is ${getSmallestNumber(nums)}`);


