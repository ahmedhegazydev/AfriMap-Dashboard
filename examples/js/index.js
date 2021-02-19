


 var firebaseConfig = {
    apiKey: "AIzaSyBR4XlSKoIKhzhKacW7n7APUbtCR4vHtx4",
    authDomain: "afrimapinternational.firebaseapp.com",
    databaseURL: "https://afrimapinternational-default-rtdb.firebaseio.com",
    projectId: "afrimapinternational",
    storageBucket: "afrimapinternational.appspot.com",
    messagingSenderId: "486636940166",
    appId: "1:486636940166:web:ce71e65f1410de61a11a07",
    measurementId: "G-S5LGGJMR2R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.auth.Auth.Persistence.LOCAL;


    $("#btn-add-section").click(function(){

alert("Clickedd");

        var section = $("#section").val();
        // alert("hi"); 
        var database = firebase.database();
        var ref =  database.ref().child("Sections").push().ser("Ahmed");
        

        if(section != ""){
            alert("Enter sction please"); 

            var sectionData = {
                "section":  section
                // "sectionName": section, 
                // "sectionName": section, 
            }
            // firebase.push();
            
            firebase.database().ref("sections").set({
             sectData
              }, (error) => {
                if (error) {
                  // The write failed...
alert("The write failed...");
                } else {
                  // Data saved successfully!
                  alert("Data saved successfull");
                }
              });

        }else{
    
        }
    
    
    });
    