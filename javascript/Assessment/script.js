function showOptions() {
    var bookingType = document.getElementById("bookingType").value;
    var dateContainer = document.getElementById("dateContainer");
    var timeContainer = document.getElementById("timeContainer");
    var slotContainer = document.getElementById("slotContainer");

    dateContainer.style.display = "none";
    timeContainer.style.display = "none";
    slotContainer.style.display = "none";

    if (bookingType === "fullDay") {
        dateContainer.style.display = "block";
    }

    else if (bookingType === "halfDay") {
        dateContainer.style.display = "block";
        slotContainer.style.display = "block"; 
    }

     else if (bookingType === "hourly") {
        dateContainer.style.display = "block";
        timeContainer.style.display = "block";
    }
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    alert("Form submitted successfully!");
});
