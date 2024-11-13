import ExpensesListComponent from "../view/expensesListComponent.js";
import ExpenseComponent from "../view/expenseComponent.js";
import { render } from "../framework/render.js";
import AddExpensesComponent from "../view/addExpenseComponent.js";


export default class ExpensesPresenter{
    constructor(container,expensesModel){
        this.container = container;
        this.expensesModel = expensesModel;
    }

    init(){
        const expensesListComponent= new ExpensesListComponent;
        const addExpenseComponent = new AddExpensesComponent;

        render(document.querySelector("#add-expense-form"),addExpenseComponent);
        render(this.container,expensesListComponent);
      

        this.setAddExpenseHandler(addExpenseComponent);
        this.updateExpensesView();
      }

    
    updateExpensesView() {
    this.renderExpenses(this.expensesModel.getExpenses()); // Обновляем список книг через renderBooks
    }

    renderExpenses(expenses) {
        const listElement = document.querySelector("#expenses-list");
        listElement.innerHTML = ""; // Очистить список перед рендерингом
        
    
        expenses.forEach((expense) => {
          const expenseComponent = new ExpenseComponent(expense, this.handleDeleteExpense.bind(this)); // для удаления добавлено his.handleDeleteBook.bind(this)
          render(listElement, expenseComponent);
          expenseComponent.setEventListeners(); // добавлено при создании удаления, для прослушки
        });
    }

    // удаление
  handleDeleteExpense(expenseId) {
    this.expensesModel.deleteExpense(expenseId);
    this.updateExpensesView(); // Обновляем список книг после удаления
  }

  setAddExpenseHandler(formComponent){
    formComponent.getElement().addEventListener("submit",(event)=>{
      event.preventDefault();

      const formData = new FormData(event.target);
      const newExpense = {
        id: Date.now(), // Уникальный ID
        name: formData.get("name"),
        amount: formData.get("amount"),
        category: formData.get("category"),
      };
      this.expensesModel.addExpense(newExpense);
      // Обновляем список книг
      this.renderExpenses(this.expensesModel.getExpenses());
    
      // Очищаем форму
      event.target.reset();
    })
  }

}