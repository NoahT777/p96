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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code

      } });  }); }
getData();

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}