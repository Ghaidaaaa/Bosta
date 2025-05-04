# Cypress API & UI Test Automation

This project includes Cypress automation tests integrated with the Cypress Dashboard and OpenAI API for dynamic testing logic.

## ✨ Features

- ✅ Uses a free and available OpenAI API to generate or manipulate test data.
- ✅ Cypress tests are integrated with the Cypress Dashboard.
- ✅ All test results are public for full transparency and traceability.

## 🚀 Getting Started

### 1. Clone the repository

git clone 
cd <project-directory>

### 2. Install dependencies

Run the following to install everything you need:

npm install
 npm install cypress --save-dev

Required dependencies:

- cypress
- dotenv
- axios

To install them manually:

npm install cypress dotenv axios

### 3. Run tests from the terminal

npx cypress run

To open the Cypress Test Runner UI:

npx cypress open

## 📊 Cypress Dashboard Integration

You can view the public test reports and runs here:

https://cloud.cypress.io/projects/4aa9r3

### 4. What to Expect

1- Run the following Tests: BankInfo.API.cy.js
                        ForgotPassword-API.cy.js
                        ForgotPassword-API.cy.js
2- The scripts will run the Promt into OpenAI API to generate security tests as the Curl Example and get the Response
3- Insert the scripts into Generated folder with the OpenAI's response in JSON format


