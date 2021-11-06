 var firebaseConfig = {
    apiKey: "AIzaSyCSF4OgD5otM6XYlGuRRqW_c1E6uzAmYh4",
    authDomain: "kwitter-cdd5e.firebaseapp.com",
    databaseURL: "https://kwitter-cdd5e-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdd5e",
    storageBucket: "kwitter-cdd5e.appspot.com",
    messagingSenderId: "711946132947",
    appId: "1:711946132947:web:8b6a8a2bd87d6ad42c6326"
  };
  firebase.initatializeApp(firebaseConfig);

  function addUser()
  {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});
  }
//ADD YOUR FIREBASE LINKS