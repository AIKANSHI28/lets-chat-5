// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAlXLK1wog--udIdsV_05AzqlKxyWT8mVM",
    authDomain: "class-test-a1579.firebaseapp.com",
    databaseURL: "https://class-test-a1579-default-rtdb.firebaseio.com",
    projectId: "class-test-a1579",
    storageBucket: "class-test-a1579.appspot.com",
    messagingSenderId: "934524132628",
    appId: "1:934524132628:web:5267b1f325580d3639f601"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
user_name=localStorage.getItem("user_name");



