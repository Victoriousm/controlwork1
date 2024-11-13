import AbstractComponent from "../framework/abstractComponent.js";

export default class ExpensesComponent extends AbstractComponent{
    constructor(expense,onDelete){
        super();
        this.expense = expense;
        this.onDelete = onDelete;
    }


getTemplate() {
    return` 
    <li class="expenses">
        <div class="expense-item">
            <div class="expense-details">
                <p class="namePrice">${this.expense.name} ${this.expense.amount}p.</p>
                <p class="category">Категория: ${this.expense.category}</p>
            </div>
            <div class="expenses-actions">
                <button class="delete-btn">Удалить</button>
            </div>
        </div>
    </li>
    `;
  }
  setEventListeners(){
    this.element.querySelector(".delete-btn").addEventListener("click",()=>{
        this.onDelete(this.expense.id)
    });
  }
}