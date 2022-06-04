onload = taskMain;

function taskMain(){
  let inputElem,
      inputElem2,
      dueDate,
      dueTime,
      button,
      selectElem;
      taskList = [];

  getElements();
  addListeners();
  load();
  renderRows();

  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    dateInput = document.getElementById('dueDate');
    timeInput = document.getElementById('dueTime');
    button = document.getElementById('addBtn');
    selectElem = document.getElementById('priorityFilter');
  }

  function addListeners(){
    button.addEventListener("click", addEntry, false);
    selectElem.addEventListener('change', filterEntries, false);
  }

  function addEntry(event){

    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem.value = "";

    let dateValue = dateInput.value;
    dateInput.value = "";

    let timeValue = timeInput.value;
    timeInput.value = "";

    let obj = {
        task : inputValue,
        category: inputValue2,
        date: dateValue,
        time: timeValue,
        done: false,
    }

    renderRow(obj);

    taskList.push(inputValue);

    save();
    

  }

  function filterEntries() {

    let selection = selectElem.value;

    if(selection == "all"){
        let rows = document.getElementsByTagName('tr');

      Array.from(rows).forEach((row, index)=>{
     
        row.style.display = "";
        
      });


    }else{



      let rows = document.getElementsByTagName('tr');

      Array.from(rows).forEach((row, index)=>{
        if(index==0){
            return;
        }
        let category = row.getElementsByTagName('td')[2].innerText;
        if(category == selectElem.value){
        row.style.display = "";
    }else{
            row.style.display = "none";
          }
        
      });
    }

  }

  function save() {
    let stringified = JSON.stringify(taskList);
    localStorage.setItem('taskList', stringified);
}
    function load(){
        let retrieved = localStorage.getItem('taskList');
        taskList = JSON.parse(retrieved);
        console.log(typeof taskList)
        if (taskList == null)
        taskList = [];
    }

    function renderRows() {
        taskList.forEach(task => {
            renderRow(task, null);
        })
    }

    function renderRow({task: inputValue, category: inputValue2, date, time, done}) {

        let table = document.getElementById('taskTable');

        let trElem = document.createElement('tr');
        table.appendChild(trElem);
    
        //checkbox
    
        let checkboxElem = document.createElement('input');
        checkboxElem.type = "checkbox";
        checkboxElem.addEventListener('click', done, false)
        let tdElem1 = document.createElement('td');
        tdElem1.appendChild(checkboxElem);
        trElem.appendChild(tdElem1);

        //date
        
        let dateElem = document.createElement('td');
        dateElem.innerText = date;
        trElem.appendChild(dateElem);


        //time
        
        let timeElem = document.createElement('td');
        timeElem.innerText = time;
        trElem.appendChild(timeElem);

    
        //task
    
        let tdElem2 = document.createElement('td');
        tdElem2.innerText = inputValue;
        trElem.appendChild(tdElem2);
    
        //category
    
        let tdElem3 = document.createElement('td');
        tdElem3.innerText = inputValue2;
        trElem.appendChild(tdElem3);
    
        //delete 
    
         let spanElem = document.createElement("span");
        spanElem.innerText = "delete";
        spanElem.className = "material-icons";
        spanElem.addEventListener('click', deleteItem, false);
        let tdElem4 = document.createElement('td');
        tdElem4.appendChild(spanElem);
        trElem.appendChild(tdElem4);

        
    function deleteItem(){
        trElem.remove();
      }
  
    function done(){
        trElem.classList.toggle('strike');
        
      }
    }
}