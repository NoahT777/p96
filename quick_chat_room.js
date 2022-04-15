var firebaseConfig = {
      apiKey: "AIzaSyAQJHC4rKH1XLz23kILao6f1Tk5okgCrq4",
      authDomain: "kwitter-4ccdf.firebaseapp.com",
      databaseURL: "https://kwitter-4ccdf-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ccdf",
      storageBucket: "kwitter-4ccdf.appspot.com",
      messagingSenderId: "516925371100",
      appId: "1:516925371100:web:ae70259508c3df23033a19",
      measurementId: "G-JM6ED8854X"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " - Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}


