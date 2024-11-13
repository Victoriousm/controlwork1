import AbstractComponent from "../framwork/abstractComponent";

export default class ExpensesListComponent extends AbstractComponent{
    getTemplate(){
        return  `<ul id="expense-list"></ul>`;
    }
} 