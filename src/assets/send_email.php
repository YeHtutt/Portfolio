<?php

########### CONFIG ###############

$recipient = 'yehaung.nov@gmail.com';
$redirect = '';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [email] Email address of the sender
#     [message] Message that should be sent to you
#
##################################


###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Contact From " . $_POST['name'];
        $headers = "From: ". $_POST['email'] . "\r\n";
        $headers .= "Bcc: " . $_POST['email'] . "\r\n"; // Add sender's email as Bcc
        $headers .= "Reply-To: " . $_POST['email'] . "\r\n"; // Set the reply-to address

        $message = "Name: " . $_POST['name'] . "\n";
        $message .= "Email: " . $_POST['email'] . "\n";
        $message .= "Message: " . $_POST['message'];

        mail($recipient, $subject, $message, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>