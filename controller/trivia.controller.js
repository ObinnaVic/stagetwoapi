const express = require("express");
const triviaModel = require("../model/trivia.model")


const triviaController = async (req, res) => {
    const passedNum = req.query.number;

    const num = parseInt(passedNum);

    if (!num) {
        return res.status(400).json({
            "number": null,
            error: true
        });
    }
    
    if (isNaN(num)) {
        return res.status(400).json({
            "number": "alphabet",
            error: true
        });
    }

    const result = {
        number: num,
        is_prime: triviaModel.isPrime(num),
        is_perfect: triviaModel.isPerfect(num),
        properties: triviaModel.properties(num),
        digit_sum: triviaModel.digitSum(num),
        fun_fact:  await triviaModel.funFact(num)
    }

    res.status(200).json(result);
}

module.exports = {triviaController}