<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $company = $_POST['company'];
  $message = $_POST['message'];

  $email_from = 'contact@mystarterkit.nl';

  $email_subject = "Someone submited a form on your website!";

  $email_body = "You have received a new message from $name.\n\n".
                          "Here is the message:\n\n $message \n"
                         " Contact him back at: $visitor_email \n"
                          "Company name: $company \n ";

                          
  $to = "contact@mystarterkit.nl";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);
  header('Location: pilot.html');

?>