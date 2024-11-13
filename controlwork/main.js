import ExpensesModel from "./model/expenses-model.js";
import ExpensesListComponent from "./view/expenseListComponent.js";


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".expense-list");
    const expensesModel = new ExpensesModel();
    const expensesPresenter = new ExpensesListComponent(container, expensesModel);
  
    expensesPresenter.init();
  });