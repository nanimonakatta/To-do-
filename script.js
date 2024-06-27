// TO-DO-PROJECT-FOR-GITHUB
const todoArr = JSON.parse(localStorage.getItem('todo'))  || [
   {
      name: 'Hello! Delete this form list.',
      dueDate: '2024-06-27'
   }
];

listItems();

function add() {
   const inputEl = document.querySelector('.inputEl');
   const dateEl = document.querySelector('.dateEl');
   const nameValue = inputEl.value;
   const dateValue = dateEl.value;
   if (nameValue) {
      todoArr.push(
         {
            name: nameValue,
            dueDate: dateValue
         }
      )
      console.log(todoArr);
      listItems();
      inputEl.value = '';
      saveToStorage();
   }
}

function listItems() {
   let todoListHtml = '';

   for (let i = 0; i < todoArr.length; i++) {
      const todoObject = todoArr[i];
      const {name, dueDate} = todoObject;
      html = `
         <p>${name}</p>
         <p>${dueDate}</p>
         <button onclick="
               todoArr.splice(${i}, 1);
               listItems(); 
               saveToStorage();
            ">Delete
         </button>
      `;
      todoListHtml += html;
   }
   console.log(todoListHtml);
   document.querySelector('.container')
      .innerHTML = todoListHtml;
   
}

function saveToStorage() {
   localStorage.setItem('todo', JSON.stringify(todoArr));
}

function enterBtn(event) {
   if (event.key === 'Enter') {
      add();
   }
}