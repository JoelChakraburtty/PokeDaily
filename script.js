$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      const email = $('#email').val();
  
      $.ajax({
        url: 'https://api.mailjet.com/v3/send',
        type: 'POST',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('b066ffe87c6aa99a1d144aa683c8b:a05ec7cbbf0e040e2785319bd4a4d4fb'));
          xhr.setRequestHeader('Content-Type', 'application/json');
        },
        data: JSON.stringify({
          'Messages': [
            {
              'From': {
                'Email': 'from@example.com',
                'Name': 'From Name'
              },
              'To': [
                {
                  'Email': email,
                  'Name': 'To Name'
                }
              ],
              'Subject': 'Welcome to our newsletter',
              'TextPart': 'Thank you for subscribing to our newsletter!',
              'HTMLPart': '<h3>Thank you for subscribing to our newsletter!</h3>'
            }
          ]
        })
      })
      .done(function(response) {
        console.log(response);
        alert('Thank you for subscribing! An email has been sent to you for confirmation.');
      })
      .fail(function(error) {
        console.error(error);
        alert('An error occurred. Please try again later.');
      });
    });
});  