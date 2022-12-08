<?php


$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];


$to = "loic.kalaidjoglou@icloud.com";
$objet = $name .$mail .$message;
$headers = "From : $mail\r\n";
$erreur = array();




  if (mail($to, $name, $mail, $message, $headers)){{
    echo "Mail Envoyé!";
  }

  else{
    echo "Erreur de l'envoie du mail."
  }
}

// if(($_POST)){


//     if(empty($name) && isset ($name)){
//         $erreur["name"] = "Champs Obligatoire";
//     }
//     else if (!preg_match('/^[a-zA-Z]+ [a-zA-Z]+$/', $name)) {
//             $erreur["name"] = "Nom invalide";
//     }



//     if(empty($mail)&& isset($mail)){
//         $erreur["mail"] = 'Mail obligatoire';
//       }
//       else if(!preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(()|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $mail) && (!preg_match('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$'))){ 
//         $erreur["mail"] = 'Mail invalide';
//       }
// }



//       if(empty($message) && isset($message)){
//         $erreur["message"] = "Écrivez-moi un petit mot!";
//       }

//       echo json_encode($erreur);


?>