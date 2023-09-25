<system.webServer>
  <modules runAllManagedModulesForAllRequests="true" >
    <remove name="WebDAVModule"/>
  </modules>
  <handlers accessPolicy="Read, Execute, Script">
    <remove name="WebDAV" />
    <remove name="ExtensionlessUrlHandler-Integrated-4.0" />
    <remove name="OPTIONSVerbHandler" />
    <remove name="TRACEVerbHandler" />

    <add name="ExtensionlessUrlHandler-Integrated-4.0" path="*."
         verb="GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS"
         type="System.Web.Handlers.TransferRequestHandler"
         preCondition="integratedMode,runtimeVersionv4.0" />
  </handlers>
 </system.webServer>

function sendEmail() {
    var name = $("#Name");
    var email = $("#Email");
    var message = $("#Message");

    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(message)) {
        $.ajax({
           url: 'sendEmail.php',
           method: 'POST',
           dataType: 'json',
           contentType: "application/json; charset=utf-8",
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