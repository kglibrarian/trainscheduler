var config = {
    apiKey: "AIzaSyBduCiKulHjMEqWh3PSvDgGn3nQvkY86Qc",
    authDomain: "trainscheduler-6060e.firebaseapp.com",
    databaseURL: "https://trainscheduler-6060e.firebaseio.com",
    projectId: "trainscheduler-6060e",
    storageBucket: "",
    messagingSenderId: "706855753773"
  };
  firebase.initializeApp(config);

//  var trainName = " ";
//  var trainDestination = " ";
//  var trainTime= " ";
//  var trainFrequency= " ";

// Assign the reference to the database to a variable named 'database'

 var database = firebase.database();


$(document).ready(function(){
// Whenever a user clicks the submit-id button
$(".js-submit-button").on("click", function() {

    // Prevent default behavior
    // event.preventDefault();

    // Get the input values
    var trainName = $(".js-train-name").val().trim();
    var trainDestination = $(".js-train-destination").val().trim();
    var trainTime = $(".js-train-time").val().trim();
    var trainFrequency = $(".js-train-frequency").val().trim();
    var trainMinutes = $(".js-train-minutes").val().trim();
    
    // consolelog the input
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
    console.log(trainMinutes);
  
    // Save new values to Firebase
    database.ref().set({
        trainName: trainName,
        trainDestination: trainDestination,
        trainTime: trainTime,
        trainFrequency: trainFrequency,
        trainMinutes: trainMinutes,
    });
    //  reset();

    //  // Save new values to Firebase
    //  database.ref("/trainInfo").set({
    //     trainName: trainName,
    //     trainDestination: trainDestination,
    //     trainTime: trainTime,
    //     trainFrequency: trainFrequency,
    // });

    // Code for the push
    // dataRef.ref().push({
    //     trainName: trainName,
    //     trainDestination: trainDestination,
    //     trainTime: trainTime,
    //     trainFrequency: trainFrequency,
    //     trainMinutes: trainMinutes,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    //   });
    });

    database.ref().on("value", function(snapshot) {
    
        // Get reference to existing tbody element, create a new table row element
        var tBody = $("tbody");
        console.log(tBody);
        var tRow = $("<tr>");
    
        var trainNameTd = $("<td>").text(snapshot.val().trainName);
        var trainDestinationTd = $("<td>").text(snapshot.val().trainDestination);
        var trainTimeTd = $("<td>").text(snapshot.val().trainTime);
        var trainFrequencyTd = $("<td>").text(snapshot.val().trainFrequency);
        var trainMinutesTd = $("<td>").text(snapshot.val().trainMinutes);
    
        // Append the newly created table data to the table row
        tRow.append(trainNameTd, trainDestinationTd, trainTimeTd, trainFrequencyTd, trainMinutesTd);
    
        // Append the table row to the table body
        tBody.append(tRow);

        
    });


// function reset () {
//     $(".js-train-name").empty();
//     $(".js-train-destination").empty();
//     $(".js-train-time").empty();
//     $(".js-train-frequency").empty();
//     $(".js-train-minutes").empty();
// }; 


   
}); 

