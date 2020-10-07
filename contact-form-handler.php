<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'contact@mystarterkit.nl';

  $email_subject = "New Form submission";

  $email_body = "You have received a new message from $name.\n".
                          "Here is the message:\n $message".

                          
  $to = "justin@mystarterkit.nl";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header('Location: pilot.html');

?>