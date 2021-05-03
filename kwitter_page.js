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

function logOut(){

    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   
}

user_name= localStorage.getItem("username");
room_name= localStorage.getItem("room_name");

function send(){

    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({

           name:username,
           message:msg,
           like:0 

    });
    document.getElementById("message").value = "";

}
function getData() { 

    firebase.database().ref("/"+room_name).on('value', function(snapshot)
     { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
      { childKey = childSnapshot.key;
         childData = childSnapshot.val();
          if(childKey != "purpose") 
          { firebase_message_id = childKey;
             message_data = childData;
              //Start code
                console.log("Firebase  messages are" + firebase_message_id);
                console.log("The message data is " + message_data);

                name = message_data['name'];
                message = message_data['message'];
                likes = message_data['like'];

                name_width_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
                message_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_tag = "<button class='btn btn-warning' id=" + firebase_message_id + "value = " + likes + "onclick='updateLike(this.id)'>"
                span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + likes + "<span></button><hr>";

                row = name_width_tag + message_tag + like_tag + span_tag;
                document.getElementById("output").innerHTML = row;

               //End code 
} }); }); } 
getData();

function updateLike(message_id){

    console.log(message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1 ;
    console.log("The no. of likes are" + update_likes);
    firebase.database().ref(room_name).child(message_id).update({
  
      like: update_likes
  
    });
  
}
  
function logOut(){
  
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
  
    window.location.replace("index.html");
  
}