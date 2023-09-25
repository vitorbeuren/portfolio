function sendEmail() {
    var name = $("#Name");
    var email = $("#Email");
    var message = $("#Message");

    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(message)) {
        $.ajax({
           url: 'sendEmail.php',
           method: 'POST',
           dataType: 'json',
           data: {
               name: name.val(),
               email: email.val(),
               message: message.val()
           }, success: function (response) {
                $('#form-for-script')[0].reset();
                $('.sent-notification').text("Message Sent Successfully.");
           }
        });
    }
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '1px solid red');
        return false;
    } else
        caller.css('border', '');

    return true;
}