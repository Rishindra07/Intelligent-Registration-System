📌 Project Description

This project implements a modern Intelligent Registration System with smart client-side validation and full UI automation testing. The application is built using React JS with modular JSX components and tested using Selenium WebDriver with JavaScript (Node.js).

The system validates user input in real time, enforces business rules, provides inline feedback, and supports automated validation of negative, positive, and dynamic form logic scenarios.

This project demonstrates both frontend engineering and automation testing capability.

🎯 Objectives Covered

Responsive registration form UI

Smart client-side validation

Inline error feedback

Password strength meter

Disposable email blocking

Country → State → City dependent dropdowns

Submit button enable/disable logic

Success confirmation + form reset

Selenium-based UI automation

Screenshot capture during tests

Screen-recorded automation execution

🧱 Tech Stack
Frontend

React JS (JSX)

Modular Components

CSS styling

Controlled inputs + state validation

Automation

Selenium WebDriver

JavaScript (Node.js)

ChromeDriver

Tools

Node.js

VS Code

Google Chrome

📂 Project Structure
src/

 ├── components/
 
 │   ├── RegistrationForm.jsx
 
 │   ├── InputField.jsx
 
 │   ├── SelectField.jsx
 
 │   └── PasswordStrength.jsx
 │
 
 ├── utils/
 
 │   ├── validation.js
 
 │   └── locationData.js
 
 │
 ├── styles/
 
 │   └── form.css
 │
 
 ├── App.jsx
 
 └── index.js

automation/

 ├── registration.test.js
 
 └── screenshots/

✨ Features Implemented
Registration Fields

First Name (Required)

Last Name (Required)

Email (Required)

Phone Number with country code validation

Age

Gender (Required)

Address

Country / State / City (dependent dropdowns)

Password & Confirm Password

Terms & Conditions (Required)

Smart Validation Rules

Required field checks with inline error messages

Invalid fields highlighted

Disposable email domains blocked

Phone must start with country code (+)

Password strength indicator (Weak / Medium / Strong)

Confirm password must match

Terms checkbox mandatory

Submit button disabled until valid

Advanced Form Logic

Dynamic dropdown update:

Country → States update

State → Cities update

Real-time validation using React state

Form reset after successful submission

Top-level error summary message

🤖 Automation Test Coverage

Automation implemented using Selenium WebDriver (JavaScript).

Flow A — Negative Scenario

Launch page

Print URL and Title

Skip required Last Name

Attempt submission

Verify validation errors

Capture screenshot

Flow B — Positive Scenario

Fill all required fields

Submit form

Verify success message

Verify form reset

Capture screenshot

Flow C — Logic Validation

Password strength behavior test

Confirm password mismatch test

Country/state/city dropdown dependency test

Submit button enable/disable validation

Capture screenshots

📸 Automation Evidence

Automation script captures screenshots automatically:

screenshots/error-state.png
screenshots/success-state.png
screenshots/password-mismatch.png
screenshots/dropdown-update.png


Screen recording of automation execution is included in submission drive link.

🛠️ Setup Instructions — Frontend
npm install
npm start


Application runs at:

http://localhost:5173

🧪 Setup Instructions — Automation
cd automation
npm init -y
npm install selenium-webdriver chromedriver
node registration.test.js

📝 Automation Script Behavior

The Selenium script:

Opens the registration page

Logs page URL and title

Executes negative validation scenario

Executes positive submission scenario

Tests password and dropdown logic

Captures screenshots at each key step

Closes browser after completion

Stable element IDs are used in JSX to ensure reliable automation.

🧠 Design Decisions

Modular JSX components for maintainability

Validation logic separated into utility module

Controlled inputs for consistent validation

Automation-friendly selectors (IDs)

State-driven validation updates

Selenium JS chosen to align with JavaScript stack

📎 Submission Artifacts Included

React source code

Selenium automation script

Automation screenshots

Automation test report

Screen recording

README documentation
