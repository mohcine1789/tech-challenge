# tech-challenge
E2E tests challenge

## The test scenario : 

The focus is on the purchase flow after loging in. 

Pre-conditions:

1. visit https://www.demoblaze.com/index.html
2. make sure the cart is empty before running the tests. For that purpose I used the UI instead of API call since it's not exposed.

Scenario :

(action => expected result)

1. Log in with correct credentials => successful login and the username is displayed in the header
2. Go to Laptops categorie => laptops are listed
3. Select a laptop => product descrption page is opened 
4. Click on add to cart button => alert window is shown and displying Product added
                               => the endpoint "POST https://api.demoblaze.com/addtocart" is returning 200

5. Go to Cart page => the selected item is shown
6. Click on place order button => a user data form is rendered to fill out
7. Fill out all the fields of the form => all the fields are properly filled
8. Click on Purchase button => modal window is displayed showing the message : Thank you for your purchase
                            => the cart should be empty 
                            => the endpoint "POST https://api.demoblaze.com/deletecart" is returning 200


## Automation tools
- Cypress
- Typescript

For a better readibility and usibility, I used the Page Object Model (POM) where each page is represented by a class. In each class we have all respective DOM elements and actions.

## How to run tests

### Locally 

#### Set up

Install the dependencies using [NPM](https://www.npmjs.com/)

```bash
npm install
```
There are two options to run tests locally:

1. Open Cypress 

```bash
npm run cy:open
```

3. Headless

```bash
npm run cy:run
```

### Using docker image

To run tests in docker container, make sure you have Docker installed and running on your machine. 
Run the `cy-run.sh` script. The tests are run headless.
