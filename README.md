This is a project which involves building a public api which sends response on GET request. 
This API is hosted using render.com. 

To run the project locally, use the following steps: 

* clone the project into your system using the command "git clone https://github.com/ObinnaVic/stagetwoapi" in your terminal. Or open the project repository and use the clone button.
* After cloning the project, open your terminal and run the command "npm start"
* This command starts up the server and runs the server locally using localhost:5000

Endpoint Usage:

GET: (https://stagetwoapi.onrender.com):

* /classify-number?number=371 - JSON response format example {"number":371,"is_prime":false,"is_perfect":false,"properties":["armstrong","odd"],"digit_sum":11,"fun_fact":"371 is a number for which we're missing a fact (submit one to numbersapi at google mail!)."}

exmaple: 
GET: https://stagetwoapi.onrender.com/classify-number?number=371 
=> {"number":371,"is_prime":false,"is_perfect":false,"properties":["armstrong","odd"],"digit_sum":11,"fun_fact":"371 is a number for which we're missing a fact (submit one to numbersapi at google mail!)."}

Backlink: https://hng.tech/hire/nodejs-developers
