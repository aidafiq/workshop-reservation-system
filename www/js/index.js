/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var scheduleButton = document.getElementById('scheduleButton');
    scheduleButton.addEventListener('click', scheduleAppointment);

    loadAppointments();
}

function scheduleAppointment() {
    var appointmentDate = prompt('Enter appointment date (YYYY-MM-DD):');
    var appointmentTime = prompt('Enter appointment time (HH:MM AM/PM):');

    var appointment = {
        date: appointmentDate,
        time: appointmentTime
    };

    saveAppointment(appointment);
}

function saveAppointment(appointment) {
    var appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    loadAppointments();
}

function loadAppointments() {
    var appointmentsElement = document.getElementById('appointments');
    var appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    var html = '';
    if (appointments.length > 0) {
        html = '<h2>Your Appointments:</h2>';
        html += '<ul>';
        for (var i = 0; i < appointments.length; i++) {
            html += '<li>' + appointments[i].date + ' at ' + appointments[i].time + '</li>';
        }
        html += '</ul>';
    } else {
        html = '<p>No appointments scheduled.</p>';
    }

    appointmentsElement.innerHTML = html;
}

function bookAppointment() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const appointmentDetails = `Date: ${date}, Time: ${time}, Name: ${name}, Email: ${email}`;
    
    // Send appointment details to the server or perform any required actions
    
    // Display confirmation message to the user
    document.getElementById('appointmentDetails').innerText = appointmentDetails;
    
    // Show the confirmation section and hide the booking form
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';

  }
  function purchaseItem() {
      const item = document.getElementById('item').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      // Validate the form data
      if (!name || !email) {
        alert('Please fill in all the required fields.');
        return;
      }
      
      const cardNumber = document.getElementById('cardNumber').value;
      const expiration = document.getElementById('expiration').value;
      const cvv = document.getElementById('cvv').value;
      
      // Perform any required payment processing or API integration here
      
      // Display success message to the user
      alert(`Thank you for purchasing ${item}! Your payment has been processed.`);
      
      // Reset the form
      document.getElementById('checkoutForm').reset();
    }
    function addToCart(productName) {
      // Implement your add-to-cart logic here
      alert(`Added ${productName} to the cart!`);
    }
    let cart = [];
  
  // Function to display the cart items
  function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
  
    if (cart.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Your cart is empty.';
      cartItemsElement.appendChild(li);
    } else {
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
      });
    }
  }
  
  // Call the displayCart function when the cart page loads
  window.addEventListener('DOMContentLoaded', displayCart);
  
  // Call the displayCart function when the cart page loads
  window.addEventListener('DOMContentLoaded', displayCart);
  function purchaseItem() {
      const item = document.getElementById('item').value;
      const quantity = document.getElementById('quantity').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      // Validate the form data
      if (!name || !email) {
        alert('Please fill in all the required fields.');
        return;
      }
      
      const cardNumber = document.getElementById('cardNumber').value;
      const expiration = document.getElementById('expiration').value;
      const cvv = document.getElementById('cvv').value;
      
      // Perform any required payment processing or API integration here
      
      // Display success message to the user
      alert(`Thank you for purchasing ${quantity} ${item}(s)! Your payment has been processed.`);
      
      // Reset the form
      document.getElementById('checkoutForm').reset();
    }

    

    
    // Initialize Firebase
    var firebaseConfig = {
			apiKey: "AIzaSyAmH7cHPeX6ruzhBXvaKX46Zj3oNu4S6AI",
			authDomain: "assg2-74a95.firebaseapp.com",
			databaseURL: "https://assg2-74a95-default-rtdb.asia-southeast1.firebasedatabase.app",
			projectId: "assg2-74a95",
			storageBucket: "assg2-74a95.appspot.com",
			messagingSenderId: "203610662159",
			appId: "1:203610662159:web:657166ed57adb67f040a7a",
			measurementId: "G-HYJZ473LXZ"
		};

		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		// Get a reference to the database service
		var database = firebase.database();

		// Function to handle form submission
		document.getElementById('myForm').addEventListener('submit', function (event) {
			event.preventDefault(); // Prevent the default form submission

			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var password = document.getElementById('password').value;



			// Push data to the database
			database.ref('users').push({
				name: name,
				email: email,
				password: password
			}

				, function (error) {
					if (error) {
						console.error("Error writing to database: ", error);
					} else {
						alert("completed");

						// Redirect to login.html

						window.location.href = "appointment.html";
					}
				});
		});

		document.getElementById('loginForm').addEventListener('submit', function (event) {
			event.preventDefault(); // Prevent the default form submission

			var email = document.getElementById('email').value;
			var password = document.getElementById('password').value;

			// Retrieve data from the database
			database.ref('users').orderByChild('email').equalTo(email).once('value')
				.then(function (snapshot) {
					var users = snapshot.val();

					// Check if a user with the provided email exists
					for (var key in users) {
						if (users.hasOwnProperty(key)) {
							var user = users[key];

							// Verify the password
							if (user.password === password) {
								// Redirect to dashboard.html or perform login logic
								window.location.href = "home.html";
								return;
							}
						}
					}

					// Display an error message if login fails
					alert("Invalid email or password.");
				})
				.catch(function (error) {
					console.error("Error retrieving data: ", error);
				});
		});


