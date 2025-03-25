# tech-challenge
E2E tests challenge

## The test scenario : 

In this scenario we are covering the whole flow from login to a successful purchase of a laptop.
The tests are designed to check not only the user interface but also the Http API calls to make sure that we covering both ends of the application.

Pre-conditions:

1. visit https://www.demoblaze.com/index.html
2. make sure the cart is empty before running the tests. For that purpose I used the UI instead of API call since it's not exposed.

Scenario :

| Step  | expected result |
| ------------- | ------------- |
|  Log in with correct credentials  | successful login and the username is displayed in the header  |
| Navigate to Laptops categorie  | laptops are listed  |
| Select a laptop  | product descrption page is opened   |
| Click on add to cart button  | 1. alert window is shown and displying Product added |
|   | 2. the endpoint "POST https://api.demoblaze.com/addtocart" returns 200  |
| Navigate to Cart page  | the selected Laptop figures in the cart list  |
|  Click on place order button  | a user's data form is rendered to fill out  |
| Fill out all the fields of the form  | all the fields are properly filled  |
| Click on Purchase button | 1. modal window is displayed showing the message : Thank you for your purchase  |
|   |  2. the cart should be empty |
|   |  3. the endpoint "POST https://api.demoblaze.com/deletecart" is returning 200 |
   

## Automation tools
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- Typescript
- NodeJs

## Structure of the framework 

The project follows the page object pattern where each page is represented by a class (e.g HomePage). This approach enhances the readability and the usability of the tests.

```
 |- e2e # tests scritps
 |- fixtures # test data
 |- pages # application's pages
 |- support # cypress commands
```

## How to run tests

### Locally 

#### Set up

1. clone the repo

   ```
   git clone https://github.com/mohcine1789/tech-challenge
   
   ```
2. move to cloned repo
3. install project dependencies using [NPM](https://www.npmjs.com/)
   ```
   npm i
   ```
   
There are two options to run tests locally:

- Open Cypress 

```bash
npm run cy:open
```
 - Headless

```bash
npm run cy:run
```

### Using docker image

To run tests in docker container, make sure you have Docker installed and running on your machine. 
Run the `cy-run.sh` script. The tests are run headless.
