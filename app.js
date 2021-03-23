var task_list = document.getElementById("taskList");
var task_form = document.getElementById("taskForm");
var task_data = document.getElementById("data");
var idx = 1;



function setTime(){
    var time = new Date();
    document.getElementById("crrtTime").innerHTML = time.getHours()+":"+time.getMinutes();

}

function setDay(){
    var day = new Date().getDay();
    if(day == 1){
        document.getElementById("crrtDay").innerHTML = "Monday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 2){
        document.getElementById("crrtDay").innerHTML = "Tuesday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 3){
        document.getElementById("crrtDay").innerHTML = "Wednessday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 4){
        document.getElementById("crrtDay").innerHTML = "Thursday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 5){
        document.getElementById("crrtDay").innerHTML = "Friday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 6){
        document.getElementById("crrtDay").innerHTML = "Saturday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
    else if(day == 7){
        document.getElementById("crrtDay").innerHTML = "Sunday";
        document.getElementById("dayImg").src = "./assets/bg"+day+".jpg";
    }
}


function toggle(){
    task_form.style.display= "flex";
    task_data.focus();
}

function hide(){
    task_form.style.display= "none";
    task_data.value ="";
}

function remove(i){
    document.getElementById(i).style.display="none";
    idx--;
}




function temp(i){
    var date = new Date();
    return `<div class="task_wrap" id="${i}">\n
    <div class="task_desc">\n
    <h5 class="date"><strong>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}- ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} </strong></h5>\n
    <div class="task">${task_data.value}
    </div>\n
    </div>\n
    <input type="button" value="X" onclick="remove(${i})">\n
    </div>`;
}


function addNote(){
    var date = new Date();
    task_list.innerHTML += temp(`${date.getDate()}${date.getMonth()}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getUTCMilliseconds()}`);
    hide();
    idx++;
}


setDay();

document.body.onload = setInterval (setTime, 1000);