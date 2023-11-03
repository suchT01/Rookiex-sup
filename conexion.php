<?php

class Conn {
    
    public static function Conectarse(){
        $user = "root";
        $pass = "root";
        $host = "localhost";
        $db = "compilador";

        try{
            $conexion = mysqli_connect($host, $user, $pass, $db);

            if(!$conexion){
                die("No se ha podido conectar con el servidor".mysqli_connect_error());
            }

            else{
                return ($conexion);
            } 
        }
        catch (Exception $ex){
            echo "Algo pasó: ", $ex;
        }

    }
}
    
?>