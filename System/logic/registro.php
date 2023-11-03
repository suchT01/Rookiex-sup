<?php

    require_once 'conexion.php';
    $conn = Conn::Conectarse();

    $usuario = $_POST["Usuario"];
    $correo = $_POST["Correo"];
    $contraseña = $_POST["Contraseña"];

    $query = "SELECT * FROM usuario WHERE email = '$correo' or username = '$usuario';";
    $result = mysqli_query($conn,$query);
    $tabla = mysqli_fetch_array($result);

    if(empty($tabla)){
        $query = "INSERT INTO usuario (email, username, pass) VALUES ('$correo', '$usuario', '$contraseña')";
    
        if(mysqli_query($conn, $query)){
            header ('Location:login.html');
        }
        else{
            echo "Error: ".$query."<br>".mysqli_error($conn);
        }
    }

    else{
        header ('Location:registrar-usuario.php');
    }
    
    mysqli_close($conn);

?>