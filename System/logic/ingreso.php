<?php

    require_once 'conexion.php';
    $conn = Conn::Conectarse();

    $usuario = $_POST["Usuario"];
    $contraseña = $_POST["Contraseña"];

    $query = "SELECT username, pass FROM usuario WHERE username = '$usuario' AND pass = '$contraseña';";
    $result = mysqli_query($conn, $query);
    $num = mysqli_num_rows($result);

    if($num == 1){
        header ("Location:Profile.html");
        exit;
    }
    else if($usuario == "adm"){
        header ("Location:estadistica.php");
        exit;
    }
    else{
        header ("Location:registrar-usuario.php");
        exit;
    }

    mysqli_close($conn);

?>
