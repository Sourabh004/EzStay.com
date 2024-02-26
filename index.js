$(document).ready(function() {
    // Register form validation
    $('#registerForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            contact: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your full name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 6 characters long"
            },
            contact: {
                required: "Please enter your contact number",
                minlength: "Please enter a valid contact number"
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorPlacement: function(error, element) {
            error.addClass("error-message"); 
            error.insertAfter(element); 
        }
    });

    // Login form validation
    $('#loginForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorPlacement: function(error, element) {
            error.addClass("error-message"); 
            error.insertAfter(element); 
        }
    });
   
    $(document).ready(function() {
        $('#bookingForm').submit(function(event) {
            event.preventDefault(); 
            // Check if all fields are filled
            var whereTo = $('#whereTo').val();
            var personCount = $('#personCount').val();
            var startDate = $('#startDate').val();
            var endDate = $('#endDate').val();
            var description = $('#description').val();
    
            if (whereTo && personCount && startDate && endDate && description) {
                // All fields are filled, display alert
                alert('Booking Successful!');
                // You can optionally submit the form here if needed
                // $('#bookingForm').submit();
            } else {
                // Not all fields are filled, display error message 
                alert('Please fill in all fields.');
            }
        });
    });

   
});