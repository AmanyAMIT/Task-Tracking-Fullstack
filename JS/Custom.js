let 
// HTML Tasks' Variables, The first one is refereing to the first anchor tag and the second one is refereing to the second anchor tag
// HTMLTask1 = document.getElementById("HTMLTask1"),
// HTMLTask2 = document.getElementById("HTMLTask2"),
Task1 = document.getElementById("Task1"),
Task2 = document.getElementById("Task2"),
Task3 = document.getElementById("Task3"),
Task4 = document.getElementById("Task4"),

// End HTML Tasks Variables
    Input = document.getElementById("formInput"),
    LoginForm = document.getElementById("login-form"),
    Model_One = document.getElementById("Model_One"),
    Model_Two = document.getElementById("Model-two"),
    Model_Three = document.getElementById("Model-three"),
    Model_Four = document.getElementById("Model-four"),
    Model_Five = document.getElementById("Model-five"),
    Model_Two_One = document.getElementById("Model-two-one"),
    Model_Two_Two = document.getElementById("Model-two-two"),
    Model_Two_Three = document.getElementById("Model-two-three"),
    Model_Two_Four = document.getElementById("Model-two-four");



Task1.addEventListener("click" , ShowTaskOne);
function ShowTaskOne() {
    document.getElementById("TaskOne").classList.remove("hide");
    document.getElementsByClassName("app-content")[0].classList.add("hide");
}
Task2.addEventListener("click" , ShowTaskTwo);
function ShowTaskTwo() {
    document.getElementById("TaskTwo").classList.remove("hide");
    document.getElementsByClassName("app-content")[0].classList.add("hide");
}
Task3.addEventListener("click" , ShowTaskThree);
function ShowTaskThree() {
    document.getElementById("TaskThree").classList.remove("hide");
    document.getElementsByClassName("app-content")[0].classList.add("hide");
}
Task4.addEventListener("click" , ShowTaskFour);
function ShowTaskFour() {
    document.getElementById("TaskFour").classList.remove("hide");
    document.getElementsByClassName("app-content")[0].classList.add("hide");
}

function Pass() {
    if(Input.value == 1) {
        window.location = "JSModels/ModelOne.html";
    }else if (Input.value == 2) {
        window.location = "JSModels/ModelTwo.html";
    }else if (Input.value == 3) {
        window.location = "JSModels/ModelThree.html";
    }else if (Input.value == 4) {
        window.location = "JSModels/ModelFour.html";
    }
}