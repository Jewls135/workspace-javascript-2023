// Hotel registration

var test = {
    hotelName: "Marriot",
    rooms: 456,
    booked: 123,
    display: function(){
        return this.hotelName;
    }
};

// Accessing properties

console.log(test.hotelName);
console.log(test.booked);
test.booked += 100;
console.log(test.booked);

// Start the Hotel Reservation

var guestGroup = [];

function reservation(){
    // Get the values from the form, and put them in an object

    // Complete this object for practice
    var guest = {
        name: $('#name').val(),
        numberOfGuest: $('#num').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        roomType: $('#room').val()
    };

    guestGroup.push(guest);
    console.log(guest);
    alert("Thank you for your reservation");
}

function displayLists(){
    $('#guestlist').html("");
    $('#guestlist').append("<table>");
    for(var i in guestGroup) {
        $('#guestlist').append("<tr><td>" + guestGroup[i].name + "</td>");
        $('#guestlist').append("<td>" + guestGroup[i].numberOfGuest + "</td>");
        $('#guestlist').append("<td>" + guestGroup[i].checkIn + "</td>");
        $('#guestlist').append("<td>" + guestGroup[i].checkOut + "</td>");
        $('#guestlist').append("<td>" + guestGroup[i].roomType + "</td>");
        $('#guestlist').append("</tr>");
    }
    $('#guestlist').append("</table>");
}

// Register the event handlers

$('#submit').click(reservation);
$('#lists').click(displayLists);