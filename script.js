/**
 * SpendWise - JavaScript Foundation
 * Fulfills core assignment requirements: Variables, User Input, Calculations, Functions, and Console Display.
 */

// 1. Reusable function to calculate the remaining budget balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// 2. Main controller function to run the application logic
function runSpendWise() {
    console.clear(); // Clear previous logs for readable output
    console.log("--- 🏁 SpendWise Session Started ---");

    // Collecting User Input via Prompts
    let rawBudgetInput = prompt("Enter your total weekly budget amount (e.g., 5000):");
    let rawExpenseInput = prompt("Enter your total estimated weekly expenses (e.g., 3200):");

    // Converting input string data types to Numbers for accurate mathematical calculations
    let weeklyBudget = Number(rawBudgetInput);
    let weeklyExpenses = Number(rawExpenseInput);

    // Data Validation: Ensure the user entered valid numbers
    if (isNaN(weeklyBudget) || isNaN(weeklyExpenses) || rawBudgetInput === null || rawExpenseInput === null) {
        console.error("❌ Error: Please enter valid numerical values for your budget and expenses.");
        alert("Invalid input! Please check your browser console for details.");
        return;
    }

    // Performing calculations by calling our reusable function
    let remainingBalance = calculateRemainingBalance(weeklyBudget, weeklyExpenses);

    // 3. Displaying clearly labeled results in the browser console
    console.log(`Initial Weekly Budget: KSh ${weeklyBudget.toFixed(2)}`);
    console.log(`Total Weekly Expenses: KSh ${weeklyExpenses.toFixed(2)}`);
    console.log(`-----------------------------------------`);
    console.log(`Calculated Remaining Balance: KSh ${remainingBalance.toFixed(2)}`);

    // Contextual feedback based on financial standings
    if (remainingBalance > 0) {
        console.log("🎉 Good job! You are currently under budget.");
    } else if (remainingBalance === 0) {
        console.log("⚖️ Notice: You have exactly broken even on your budget.");
    } else {
        console.log("⚠️ Warning: You have exceeded your budget! Consider reducing expenses.");
    }
    
    alert("Calculations complete! Please open your browser console to view your SpendWise financial breakdown.");
}