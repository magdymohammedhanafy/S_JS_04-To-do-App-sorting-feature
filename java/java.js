
let taskData=[];
let addBtn=document.getElementById("addTask");
let sortBtn=document.getElementById("sort");

let addTask=addBtn.addEventListener("click",function(){
    let taskName=document.getElementById("taskName").value;
    let periority=document.getElementById("Periority").value;
    let  id=taskData.length+1;
    let taskItems={taskName:taskName,periority:periority};
    validate=validation(taskName,periority);
    if(!validate)
    {
     alert("Data not valid ,Try again");
     return;
    }
    addData(taskName,periority);
    display(); 
})

let validation=function(taskName,periority){
    let taskNameCheck=false;
    let periorityCheck=false;
    if(!(taskName.length>10||taskName===""))
    {
        taskNameCheck=true;
    }
    if(!(Number(periority)===NaN||Number(periority)<1))
    {
        periorityCheck=true;
    }
    if(taskNameCheck===true&&periorityCheck===true)  
    {
        return true;
    } 
}

let addData=function(taskName,periority)
{
  let id=taskData.length+1;
  let editMode=false;
  taskData.push({taskName:taskName,periority:periority,id:id,editMode:editMode});
}

let display=function()
{
    let tableRows=  `<tr>
                        <th>No</th>
                        <th>Task Name</th>
                        <th>Periority</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>`
    for(let i=0 ;i<taskData.length;i++)
    {
      let No=i+1;
      tableRows+=`<tr>
        <td>${No}</td>
        <td>${taskData[i].editMode ? `<input type="text" id="name" value="${taskData[i].taskName}"/>`: taskData[i].taskName}</td>
        <td>${taskData[i].editMode ? `<input id="per" value="${taskData[i].periority}"/>`: taskData[i].periority}</td>
        <td><button class="remove" onclick="deleteRow(${i})">Delete</button></td>
        <td>${taskData[i].editMode? `<button class="save" onclick="saveEdit(${i})">Save</button>
        <button class="cancel" onclick="cancelEdit(${i})">Cancel</button>`
        : `<button class="edit" onclick="editRow(${i},${taskData[i].editMode})">Edit</button>`}
        </td>
        </tr>`                         
    }
    document.getElementById("dataTable").innerHTML=tableRows;
    fSort();

}

let deleteRow=function(index)
{
    taskData.splice(index,1);
    display();
}


let editRow=function(index,editMode)
{
    taskData[index].editMode=true;
    display();
}

let saveEdit=function(index)
{
    taskData[index].taskName=document.getElementById("name").value;
    taskData[index].periority=document.getElementById("per").value;
    taskData[index].editMode=false;
    display();
}

let cancelEdit=function(index)
{
    taskData[index].editMode=false;
    display();
}

let fSort=function(){
let sorting=sortBtn.addEventListener("click",function(){
    taskData.sort(function (a, b) {
        return a.periority - b.periority;
    });
   
    display();    
})
}



//Task2...............................
let tasksArray = [
    ["Nathalie Nader Nabil", "Task 01", "Option 2"],
    ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
    ["Salma Nasreldin", "Task 01", "Option 1"],
    ["Engy Mostafa", "Task 01", "Option 1"],
    ["Engy Mostafa", "Task 01", "Option 1"],
    ["Engy ahmed mostafa ", "Task 01", "Option 1"],
    ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
    ["Abdelrahman Shemies", "Task 01", "Option 1"],
    ["Alaa Ahmed", "Task 01", "Option 2"],
    ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
    ["Mark Bassem", "Task 01", "Option 1"],
    ["Anas Ahmed", "Task 01", "Option 1"],
    ["Adham Hesham", "Task 01", "Option 1"],
    ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
    ["rola wafi", "Task 01", "Option 1"],
    ["Moataz Youssef", "Task 01", "Option 2"],
    ["Ahmad Salama", "Task 01", "Option 1"],
    ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
    ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
    ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
    ["Alaa Ahmed", "Task 01", "Option 2"],
    ["rola wafi", "Task 01", "Option 2"],
    ["Mohamed Fahmi", "Task 01", "Option 1"],
    ["Mohamed Fahmi", "Task 01", "Option 2"],
    ["Alaa Ahmed", "Task 01", "Option 2"],
    ["Abdelrahman Shemies", "Task 01", "Option 1"],
    ["Nathalie Nader", "Task 01", "Option 1"],
    ["Mariam Ahmed", "Task 01", "Option 1"],
];


let filterName=tasksArray.map(function(name){
    return name[0];
})

for(let i=0;i<filterName.length;i++)
{
    for(let j=0;j<filterName.length;j++)
    {
        if(i===j)
        {
            continue;
        }
    if(filterName[i]===filterName[j])
    {
       filterName.splice(j,1);
    }
    }
}
console.log(filterName);










































