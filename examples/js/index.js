


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

        var section = $("#section").val();
      

        if(section){

            var database = firebase.database();
            var ref =  database.ref().child("Sections").push().set({section}, (error) => {
                if (error) {
                    alert("Data saving failed");
                } else {
                 
                    alert("Section saved Successfully");
                }
              });


            // var sectionData = {
                // "section":  section
                // "sectionName": section, 
                // "sectionName": section, 
            // }
            // firebase.push();
            
            // firebase.database().ref("sections").set({
            //     sectionData
            //   }, (error) => {
            //     if (error) {
               
            //         alert("Data saving failed");
            //     } else {
                 
            //         alert("Section saved Successfully");
            //     }
            //   });

        }else{
            alert("Enter sction please"); 
        }
    
    
    });
    