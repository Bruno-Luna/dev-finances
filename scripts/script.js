const Modal = {
    open (){
        // Abrir modal
        // Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close (){
        // fechar o modal
        // remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    },
}

const transactions = [
    {
        id: 1,
        description: 'Criação Web-site',
        amount: 350000,
        date: "20/01/2021"
    },
    {
        id: 2,
        description: 'Luz',
        amount: -28000,
        date: "23/01/2021"
    },
    {
        id: 3,
        description: 'Curso',
        amount: -78000,
        date: "24/01/2021"
    },
    {
        id: 4,
        description: 'Aluguel',
        amount: -98000,
        date: "28/01/2021"
    },

]

const Transaction = {
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){
        // entradas - saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    
        DOM.transactionsContainer.appendChild(tr)
    
    },
    innerHTMLTransaction(transaction) {


        const html = ` 
              <td class="description">${transaction.description}</td>
              <td class="income">${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remover Quantia">
              </td>
             `
        return html   
    }
}

DOM.addTransaction(transactions[0])