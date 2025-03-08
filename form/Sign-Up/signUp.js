import {
    createUserWithEmailAndPassword,
    updateProfile,
 } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'

 import { auth,
  } from '../../firebaseConfig.js';






  let signUp = async (event) => {
    event.preventDefault();
    let userName = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Sign up successfull")
            console.log("User: ", user)
            updateProfile(auth.currentUser, {
                displayName: userName.value,
            }).then(() => {
                localStorage.setItem("userName", JSON.stringify(displayName))
                // Profile updated!
                console.log("Profile updated")
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
           

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
            console.log(errorCode)
            console.log("Sign up failed")
            // ..
        });




    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         displayName: userName.value,
    //         email: email.value,
    //         password: password.value,
            

    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //     console.log("user added to database");
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    // await setDoc(doc(db, `users`, uid), {
    //     displayName: userName.value,
    //     email: email.value,
    //     userID : uid,
    // });

    // await updateDoc(docRef, {
    //     "displayName":userName.value,
       
    // });
}

let signUpBttn = document.getElementById("signUpBttn")
signUpBttn.addEventListener("click", signUp)