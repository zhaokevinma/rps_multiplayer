// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDyuqD3d8bpYoX8g9TqkZ9G3_XZmY6kDVs",
authDomain: "rps-multiplayer-302af.firebaseapp.com",
databaseURL: "https://rps-multiplayer-302af.firebaseio.com",
projectId: "rps-multiplayer-302af",
storageBucket: "",
messagingSenderId: "143158181419",
appId: "1:143158181419:web:22362ea90dda5239"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Define database
var database = firebase.database();

// Test counter
var clickCounter = 0;

// Main
$("#play1SignInButton").on("click", function() {
    event.preventDefault();
    clickCounter++;
    database.ref().set({
        clickCounter: clickCounter
    })
})