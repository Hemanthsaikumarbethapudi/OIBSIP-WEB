const listcontainer =document.getElementById("list-container");
const inputbox =document.getElementById("input-box");

    function addtask(){
        if(inputbox.value === ''){
            alert("Enter Some Data");

        }else{
                let li = document.createElement("li");
                li.innerHTML=inputbox.value;
                listcontainer.appendChild(li);
        }
        inputbox.value="";
        saveTask();
    }
    
    function saveTask(){
        localStorage.setItem("data",listcontainer.innerHTML);
    }
    function showTask(){
        listcontainer.innerHTML = localStorage.getItem("data");
    }