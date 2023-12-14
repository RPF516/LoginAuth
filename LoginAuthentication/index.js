// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkno5UwhTZcTXDNB2GB_gTp0d4GDPCa8E",
  authDomain: "loginauthentication-38184.firebaseapp.com",
  projectId: "loginauthentication-38184",
  storageBucket: "loginauthentication-38184.appspot.com",
  messagingSenderId: "1038626366035",
  appId: "1:1038626366035:web:71c4e008346680c0a89ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('reg-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="inline"
    document.getElementById('login-div').style.display="none"
})
document.getElementById('log-btn').addEventListener('click', function(){
    document.getElementById('register-div').style.display="none"
    document.getElementById('login-div').style.display="inline"
})

document.getElementById('login-btn').addEventListener('click', function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value; 

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Welcome back!!<br>"+"Login Successful";
    document.getElementById('result').style.color = "white";
    document.getElementById('result').style.fontSize = "40px";
    document.getElementById('result').display="flex";
    document.getElementById('result').style.alignItems = "center";
    document.getElementById('result').style.justifyContent = "center";
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result-box').style.display="none";
    document.getElementById('error').innerHTML="Sorry!<br>"+errorMessage;
    document.getElementById('result').style.fontSize = "40px";
   
  });
});

document.getElementById('register-btn').addEventListener('click', function(){
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value; 

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none"
    document.getElementById('result').innerHTML="Welcome<br>"+"Registered Successfully";
    document.getElementById('result').style.color = "white";
    document.getElementById('result').style.fontSize = "40px";
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('register-div').style.display="none"
    document.getElementById('result-box').style.display="none";
    document.getElementById('error').innerHTML="Sorry!<br>"+errorMessage;
    document.getElementById('result').style.color = "white";
    document.getElementById('result').style.fontSize = "40px";
    
  });
});

document.getElementById('log-out-btn').addEventListener('click', function(){
signOut(auth).then(() => {
    document.getElementById('result-box').style.display="none";
    document.getElementById('login-div').style.display="inline";
}).catch((error) => {
    document.getElementById('result').innerHTML="Sorry!<br>"+errorMessage;
    document.getElementById('result').style.color = "white";
    document.getElementById('result').style.fontSize = "40px";
});    
});

