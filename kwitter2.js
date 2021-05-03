 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAmcEujYvhWg02xLHgm7j1I--fgl_utY0A",
  authDomain: "kwitter-project-ec78e.firebaseapp.com",
  databaseURL: "https://kwitter-project-ec78e-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-ec78e",
  storageBucket: "kwitter-project-ec78e.appspot.com",
  messagingSenderId: "44260121046",
  appId: "1:44260121046:web:d7d68cf971948d9295ec77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + username;

function addRoom(){

  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({

    purpose: "adding room name"

  });

  window.location = "kwitter_page.html";

}

function getData() 
{
  firebase.database().ref("/").on('value',function(snapshot){

    document.getElementById("trending_rooms").innerHTML ="";
    snapshot.forEach(function(childSnapshot){

      childKey =childSnapshot.key;
      Room_names = childKey;

 //Start code

      console.log("The room names are" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
 //End code
 });});}
getData();

function redirectToRoomName(name) { 

  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
   
}

function logOut(){

 localStorage.removeItem("username");
 localStorage.removeItem("room_name");
 window.location = "index.html";

}