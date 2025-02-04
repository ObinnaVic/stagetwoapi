const axios = require("axios");

const properties = (num) => {
    const obj = [];
    let sum = 0

    const numberArray = num.toString().split("");

    for (const element of numberArray) sum+=(Number(element) ** numberArray.length);

    if(sum == num) obj.push("armstrong") 

    num % 2 ? obj.push("odd") : obj.push("even");

    return obj;
    
}

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (!(num % i)) {
            return false;
        }
    }

    return false;

}

const digitSum = (num) => {
    let sum = 0;
    const numberArray = num.toString().split("");
    for (const element of numberArray) sum += Number(element)
    
    return sum;
}

const isPerfect = (num) => {
    if (num <= 1) return false;

    let sum = 1;
    
    const sqrt = Math.sqrt(num);
    
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== sqrt) {
                sum += num / i;
            }
        }
    }
    
    return sum === num;
}


const funFact = async (num) => {
    
    try {
        const response = await axios.get(`http://numbersapi.com/${num}`);
        
        return response.data;
    } catch (error) {
        console.error('API Error:', error.message);
        throw {
            status: error.response?.status || 500,
            message: 'Error fetching data from number API'
        };
    }
    

}



module.exports = {
    properties,
    isPerfect,
    isPrime,
    digitSum,
    funFact
}