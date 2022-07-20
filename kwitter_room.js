
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCrwQq9hhnMs254uRugevaOIkOz-B8OeNY",
      authDomain: "let-s-chat-47e1d.firebaseapp.com",
      databaseURL: "https://let-s-chat-47e1d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-47e1d",
      storageBucket: "let-s-chat-47e1d.appspot.com",
      messagingSenderId: "128246460493",
      appId: "1:128246460493:web:b6e35f819f091e299b2c04"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
