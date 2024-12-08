# Automated Login and Registration Test Suite

## Project Overview

This is a comprehensive Cypress-based test suite for login and registration functionality, designed to validate various user authentication scenarios using TypeScript and Faker for robust test data generation.

## 🚀 Features

- **Comprehensive Test Coverage**

  - Positive login and registration scenarios
  - Negative test cases for error handling
  - User authentication workflows
  - Input validation testing

- **Key Test Scenarios**
  1. User Registration
     - Prevent duplicate username registration
     - Validate email format
     - Password matching
  2. User Login
     - Successful login
     - Handle incorrect credentials
     - Empty field validation
  3. User Logout
     - Verify logout functionality

## 📂 Project Structure

project-root/
│
├── support/
│ │
│ ├── faker.ts # Test data generation
│ └── commands.ts # Custom Cypress commands
│
|── login.cy.ts # Login and registration test scenarios
├── pages/
└── loginPage.ts

## 🛠 Technologies Used

- **Testing Framework**: Cypress
- **Language**: TypeScript
- **Test Data Generation**: Faker.js
- **Testing Approach**: Page Object Model

## 📋 Prerequisites

- Node.js (v20+ recommended)
- npm
- Cypress

# Clone repository

git clone <repository-url>

# Install dependencies

npm install

# Install Cypress

npm install cypress --save-dev

# Run tests

npm run open # Interactive mode
npm run run # Headless mode

# 🧪 Test Scenarios Covered

Registration Tests

✅ Prevent registration with existing username
✅ Validate email format
✅ Ensure password matching
✅ Successful user registration

Login Tests

✅ Successful login
✅ Handle incorrect username
✅ Handle incorrect password
✅ Validate empty credential handling

Logout Tests

✅ Successful logout
✅ Verify logout message

📝 Custom Extensions

Custom Cypress Command: validateText() for text validation
Dynamic Test Data: Faker.js for generating realistic test data

⚠️ Notes

Ensure all sensitive information is appropriately masked
Always use mock/test data for automated tests
Regularly update dependencies to maintain security

Happy Testing! 🚀
