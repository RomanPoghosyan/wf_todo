const input = document.getElementById("add");
const container = document.getElementById("tasks");
const button = document.getElementById("button");

function addTask(){
    let li = document.createElement("li");
    let value = input.value;
    input.value = "";
    li.innerHTML = `<span class="body">${value}</span><span class="remove">X</span>`
    container.append(li);
}

function clickHendler(event){
    if(event.target.className == "body"){

    }else if(event.target.className == "remove"){

    }
    console.log(event.target.className);
}

container.addEventListener("click", clickHendler);
button.addEventListener("click", addTask);