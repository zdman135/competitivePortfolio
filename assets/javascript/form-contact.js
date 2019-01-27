function clearFields() {
    $('#email').val("")
    $('#first-name').val("")
    $('#description').val("")
}

$(document).ready(function() {
    $('#submitButton').on('click', function(e) {
        e.preventDefault();
        
        var template_params = {
            "reply_to": $('#email').val(),
            "from_name": $('#first-name').val(),
            "to_name": "Rich",
            "message_html": $('#description').val()
         }
        
        emailjs.send('gmail', 'template_X4CCpTcv', template_params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            clearFields();
        }, function(error) {
            clearFields();
            console.log('FAILED...', error);
        });
    });
});