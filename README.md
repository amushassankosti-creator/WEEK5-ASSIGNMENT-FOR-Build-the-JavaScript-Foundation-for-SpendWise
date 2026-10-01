# WEEK5-ASSIGNMENT-FOR-Build-the-JavaScript-Foundation-for-SpendWise
End of Week 6 (Friday, 17:00 EAT)
# SpendWise - JavaScript Foundation

SpendWise is a lightweight personal budgeting helper application. This foundational update transforms the platform from a purely visual web layout into a functional, data-driven application capable of processing basic user metrics directly inside the browser.

## Project Summary
* **Due Date:** End of Week 6 (Friday, 17:00 EAT)
* **Format:** GitHub Repository Submission (Public)

---

## Technical Implementations Explained

### 1. Project Purpose
SpendWise captures a user's initial weekly budget parameters alongside their actual expenses to compute an active, dynamic representation of their net remaining disposable balance.

### 2. JavaScript Concepts Implemented
* **Dynamic Data Typing:** Handled programmatic conversion of string-based user inputs into math-ready variables.
* **Basic Control Flow:** Utilized conditional loops (`if`, `else if`, `else`) to analyze the financial health status of the end balance.
* **Error Prevention:** Validated input formats natively using `isNaN` checkpoints.

### 3. Variable Usage
Variables within `script.js` store foundational budgeting data:
* `rawBudgetInput` / `rawExpenseInput`: Temporal variables holding literal prompt strings.
* `weeklyBudget` / `weeklyExpenses`: Structured floating-point numeric objects holding clean calculation figures.
* `remainingBalance`: Holds the calculated result of the budget minus the expenses.

### 4. Collecting User Input
User entry data collection is managed interactively using native window prompt models via `prompt()`. This intercepts browser action and forces safe text capture into our program storage stream.

### 5. Budget Calculations
Calculations are executed arithmetic-style using subtraction filters (`-`). The program computes data through pure math processing:
\[\text{Remaining Balance} = \text{Weekly Budget} - \text{Weekly Expenses}\]

### 6. Code Organization via Functions
The script utilizes functions to separate concerns:
* `calculateRemainingBalance(budget, expenses)`: A pure utility function built strictly to receive numerical parameters and output calculations, isolated from interface updates.
* `runSpendWise()`: The controller routine managing the interactive application loop from validation to printing outputs.