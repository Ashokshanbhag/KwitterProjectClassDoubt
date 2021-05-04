
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDwesF9EsN96_xBVTtWgsecISv4GlB69og",
      authDomain: "kwitterclass2.firebaseapp.com",
      databaseURL: "https://kwitterclass2-default-rtdb.firebaseio.com",
      projectId: "kwitterclass2",
      storageBucket: "kwitterclass2.appspot.com",
      messagingSenderId: "629536464865",
      appId: "1:629536464865:web:6d7bffaa3628b5f1527ca0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("The room names are" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

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