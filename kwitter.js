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

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwiiter_page.html";    
}
function getData() {firebase.database().ref("/").on('value', function (snapshot) {document.getElementById("output").innerHTML= ""; snapshot.forEach(function(childSnapshot) {childKey= childSnapshot.key; 
    Room_names= childKey;  
    console.log("room_Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirctToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
     getData();

     function redirctToRoomName(name){
        console.log(name); 
        localStorage.setItem("room_name",room_name);
        window.location="kwiiter_page.html";  
     }
  
     function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.Location="kwitter.html";
}

function send{
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
}