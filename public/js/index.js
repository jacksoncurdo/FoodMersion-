const submitBtn = document.querySelector('.reservation-form');
  submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
alert("clicked")
    // Grab form elements
    let newReservation = {
      name: document.getElementById('reserve-name').value.trim(),
      phone_number: document.getElementById('reserve-phone').value.trim(),
      email: document.getElementById('reserve-email').value.trim(),
      // customerID: document.getElementById('reserve-unique-id').value.trim(),
    };

    console.log('submitBtn.onclick -> newReservation', newReservation);

    // Here we make our fetch by providing a URL, the object we want to send as the body object, then we have a "promise".
    // The promise is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // If a table is available... tell user they are booked.

          alert('Yay! You are officially booked!');
        } else {
          // Otherwise, tell the  user they are on the wait list

          alert('Sorry you are on the wait list');

          // Clear the form
          document.getElementById('reserve-name').value = '';
          document.getElementById('reserve-phone').value = '';
          document.getElementById('reserve-email').value = '';
          // document.getElementById('reserve-unique-id').value = '';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });