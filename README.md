# Tax Calculator

A web-based tax calculator that allows users to input their annual gross income, extra income, deductions, and age group to calculate their overall income after tax deductions.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/tax-calculator.git

2. Open the `index.html` file in your web browser.
3. Fill in the required fields (annual gross income, extra income, deductions, and age group) and click the "Calculate" button to see the overall income after tax deductions.

## Usage

1. Enter your annual gross income in the "Annual Gross Income" field.
2. Enter any extra income you may have in the "Extra Income" field.
3. Enter your total deductions in the "Deductions" field.
4. Select your age group from the dropdown menu.
5. Click the "Calculate" button to see your estimated tax liability.

## Validation and Error Handling

- The input fields (annual gross income, extra income, and deductions) accept only numeric values. If the user enters non-numeric values, an error icon will appear, and on hovering the icon, a tooltip will show the error message "Please enter numbers only".
- If any of the required fields are left empty, an error icon will appear, and on hovering, a tooltip will show the error message "Input is mandatory".
- The age dropdown field has three options: "<40", "≥40 & <60", and "≥60". If the user does not select a value, an error icon will appear, and on hovering, a tooltip will show the error message "Please select an age group".
- The error icons are not visible by default and only appear when there are validation issues.

## Tax Calculation Logic

The tax calculation is based on the following formula:

- If the overall income (annual gross income + extra income - deductions) is less than or equal to ₹8 lakhs, no tax is applied.
- If the overall income is greater than ₹8 lakhs, the amount over ₹8 lakhs is taxed at:
- 30% for people with age < 40
- 40% for people with age ≥ 40 but < 60
- 10% for people with age ≥ 60

## Deployment

The tax calculator is hosted at: [tax-calculator](https://tax-calculator-web-app.netlify.app/)


## Testing

The following tests have been performed to ensure the tax calculator is working as expected:

![Screenshot (245)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/9bdf6d10-f5d7-4fd1-b7eb-45be8f70bad4)
![Screenshot (239)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/c28c97c2-59c2-48e4-acd3-b03d3bb308a6)
![Screenshot (240)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/81d8370f-34df-46fb-85a9-6d75e8bb1806)
![Screenshot (241)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/863aebad-31db-43b2-992e-62d3269e8e93)
![Screenshot (242)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/22f713ad-2b36-478a-83f7-b8ecfd57ee11)
![Screenshot (243)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/22ed46ac-c7db-43f0-8223-a276317b664a)
![Screenshot (244)](https://github.com/jayprakash25/Tax-Calculator/assets/110524709/10c79165-5bb8-4ea7-87af-257a049e05b7)





