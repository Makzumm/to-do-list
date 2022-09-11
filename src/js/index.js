const inputEl = document.querySelector('.input-text');
const addElBtn = document.querySelector('.task-submit-btn');
const deleteElBtn = document.querySelector('.task-delete-btn');
const list = document.querySelector('.list');
const clearInputBtn = document.querySelector('.clear-input-btn-hidden');
const confirmTaskStatus = document.createElement('button');
const listItem = document.createElement('li');


addElBtn.addEventListener('click', addItem);

deleteElBtn.addEventListener('click', () => {
        list.innerHTML = '';
});

inputEl.addEventListener('input', onInputBtnCleaner);

clearInputBtn.addEventListener('click', () => {
    inputEl.value = '';
})

confirmTaskStatus.addEventListener('click',);

function addItem() {
    const isInputFilled = inputEl.value === '';

    if (!isInputFilled) {
        return createItem(listItem),
            itemButtons(),
            inputEl.value = '';
        
    }
}

function createItem(item) {
    item.textContent = inputEl.value;
    item.classList = 'list__item';
    item.style.fontSize = '20px';

    list.append(item)
} 

function onInputBtnCleaner() {
    const isInputEmpty = inputEl.value.trim() === '';

    inputClassChange(isInputEmpty);
}   

function inputClassChange(inputStatus) {

    if (!inputStatus) {
        return clearInputBtn.classList.add('clear-input-btn-shown'),
        clearInputBtn.classList.remove('clear-input-btn-hidden');
        
    } else{
        return clearInputBtn.classList.add('clear-input-btn-hidden'),
        clearInputBtn.classList.remove('clear-input-btn-shown');

    }
}

function itemButtons() {

    confirmTaskStatus.type = 'submit';
    confirmTaskStatus.classList = 'list__status-btn'

    list.append(confirmTaskStatus);

}