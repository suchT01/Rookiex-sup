<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="icon.png">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">

    <link rel="manifest" href="site.webmanifest">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald|PT+Sans" rel="stylesheet">
    <script src="https://kit.fontawesome.com/c631d0424b.js" crossorigin="anonymous"></script>
    <meta name="theme-color" content="#fafafa">
</head>

<body>

    <!-- Add your site or application content here -->
    <div class="borde">
        <div class="contenedor">
            <form id="" class="" action="registro.php" method="post">
                <h2 class="">Registro de usuario</h2>
                <div id="datos_usuario" class=" ">
                    <div class="campo">
                        <input type="text" required="required" name="Usuario" id="user">
                        <span>Usuario:</span>
                        <i></i>
                    </div>
                    <div class="campo">
                        <input type="text" required="required" name="Correo" id="email">
                        <span>Correo Electronico:</span>
                        <i></i>
                    </div>
                    <div class="campo">
                        <input type="password" required="required" name="Contraseña" id="password">
                        <span>Contraseña:</span>
                        <i></i>
                    </div>
                    <div class="buttonWrapper">
                        <div class="button">
                            <input type="submit" class="boton-registrar" value="Registrar">
                            
                        </div>
                    </div>
                    <div class="error"></div>
                    <div class="registerWrapper">
                        <a href="login.html" class="goRegister">Ingresa Aqui</a>
                    </div>
                </div>
                <div class="copyrightWrapper">
                    Desarrollado por alumnos de la UGMA
                </div>
            </form>
        </div>
    </div>





    <script src="js/vendor/modernizr-{{MODERNIZR_VERSION}}.min.js"></script>
    <script src="js/app.js"></script>

</body>

</html>