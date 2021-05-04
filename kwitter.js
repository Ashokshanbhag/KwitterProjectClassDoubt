function addUser(){

    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    console.log("the button works");

    window.location = "kwitter_room.html";

}