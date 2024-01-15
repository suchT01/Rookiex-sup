<?php
// Datos de conexión
$servername = "localhost";
$username = "root";
$password = "";

// Crear conexión
$conn = new mysqli($servername, $username, $password);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Crear la base de datos
$sql = "CREATE DATABASE IF NOT EXISTS DB_RookiexSup";
if ($conn->query($sql) === TRUE) {
    echo "Base de datos creada correctamente";
} else {
    echo "Error al crear la base de datos: " . $conn->error;
}

// Seleccionar la base de datos
$conn->select_db("DB_RookiexSup");


// CREACION TABLA CIENTES

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSup`.`Clientes` (
    `idClientes` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(45) NULL,
    `Apellido` VARCHAR(45) NULL,
    `Cedula` INT NULL,
    `Email` VARCHAR(45) NULL,
    `Telefono` VARCHAR(45) NULL,
    `idRol` INT NULL,
    PRIMARY KEY (`idClientes`),
    INDEX `IdRol_idx` (`idRol` ASC) VISIBLE,
    CONSTRAINT `IdRol`
      FOREIGN KEY (`idRol`)
      REFERENCES `DB_RookiexSuplements`.`Roles` (`idRoles`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
      ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de clientes creada correctamente";
} else {
    echo "Error al crear la tabla de clientes: " . $conn->error;
}
// CREACION TABLA PRODUCTOS

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`Productos` (
    `idProductos` INT NOT NULL AUTO_INCREMENT,
    `NombreProducto` VARCHAR(45) NULL,
    `Marca` VARCHAR(45) NULL,
    `Descripcion` VARCHAR(200) NULL,
    `CostoUnitario` DOUBLE NULL,
    `Imagen` LONGTEXT NULL,
    `Existencia` INT NULL,
    `idCategoria` INT NULL,
    PRIMARY KEY (`idProductos`),
    INDEX `idCategoria_idx` (`idCategoria` ASC) VISIBLE,
    CONSTRAINT `idCategoria`
      FOREIGN KEY (`idCategoria`)
      REFERENCES `DB_RookiexSuplements`.`Categorias` (`idCategorias`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
      ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de productos creada correctamente";
} else {
    echo "Error al crear la tabla de productos: " . $conn->error;
}

// CREACION TABLA CATEGORIAS

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`Categorias` (
    `idCategorias` INT NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(45) NULL,
    PRIMARY KEY (`idCategorias`))
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de categorias creada correctamente";
} else {
    echo "Error al crear la tabla de categorias: " . $conn->error;
}

//CREACION TABLA ROLES

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`Roles` (
    `idRoles` INT NOT NULL AUTO_INCREMENT,
    `NombreRol` VARCHAR(45) NULL,
    PRIMARY KEY (`idRoles`))
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de roles creada correctamente";
} else {
    echo "Error al crear la tabla de roles: " . $conn->error;
}

//CREACION TABLA PEDIDOS

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`Pedidos` (
    `idPedidos` INT NOT NULL AUTO_INCREMENT,
    `idCliente` INT NULL,
    `FechaPedido` DATE NULL,
    `EstadoPedido` VARCHAR(45) NULL,
    `DireccionEnvio` VARCHAR(80) NULL,
    PRIMARY KEY (`idPedidos`),
    INDEX `idCliente_idx` (`idPedidos` ASC, `idCliente` ASC) VISIBLE,
    CONSTRAINT `idCliente`
      FOREIGN KEY (`idPedidos` , `idCliente`)
      REFERENCES `DB_RookiexSuplements`.`Clientes` (`idClientes` , `idClientes`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de pedidos creada correctamente";
} else {
    echo "Error al crear la tabla de pedidos: " . $conn->error;
}

// CREACION TABLA DETALLES PEDIDO

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`DetallesPedido` (
    `idDetallesPedido` INT NOT NULL AUTO_INCREMENT,
    `idPedido` INT NULL,
    `idProducto` INT NULL,
    `Cantidad` INT NULL,
    `PrecioUnitario` DOUBLE NULL,
    `EstadoEnvio` VARCHAR(45) NULL,
    PRIMARY KEY (`idDetallesPedido`),
    INDEX `idPedido_idx` (`idPedido` ASC) VISIBLE,
    INDEX `idProducto_idx` (`idProducto` ASC) VISIBLE,
    CONSTRAINT `idPedido`
      FOREIGN KEY (`idPedido`)
      REFERENCES `DB_RookiexSuplements`.`Pedidos` (`idPedidos`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `idProducto`
      FOREIGN KEY (`idProducto`)
      REFERENCES `DB_RookiexSuplements`.`Productos` (`idProductos`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de DetallesPedido creada correctamente";
} else {
    echo "Error al crear la tabla de DetallesPedido: " . $conn->error;
}

//CREACION TABLA METODOS PAGO

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`MetodosPago` (
    `idMetodosPago` INT NOT NULL,
    `Nombre` VARCHAR(45) NULL,
    PRIMARY KEY (`idMetodosPago`))
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de MetodosPago creada correctamente";
} else {
    echo "Error al crear la tabla de MetodosPago: " . $conn->error;
}

//CREACION TABLA TRANSACCIONES

$sql = "CREATE TABLE IF NOT EXISTS `DB_RookiexSuplements`.`Transacciones` (
    `idTransacciones` INT NOT NULL,
    `idPedido` INT NULL,
    `idMetodoPago` INT NULL,
    `MontoTotal` DOUBLE NULL,
    `EstadoTransaccion` VARCHAR(45) NULL,
    `FechaTransaccion` DATE NULL,
    PRIMARY KEY (`idTransacciones`),
    INDEX `idPedido_idx` (`idPedido` ASC) VISIBLE,
    INDEX `idMetodoPago_idx` (`idMetodoPago` ASC) VISIBLE,
    CONSTRAINT `idPedido`
      FOREIGN KEY (`idPedido`)
      REFERENCES `DB_RookiexSuplements`.`Pedidos` (`idPedidos`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `idMetodoPago`
      FOREIGN KEY (`idMetodoPago`)
      REFERENCES `DB_RookiexSuplements`.`MetodosPago` (`idMetodosPago`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Tabla de Transacciones creada correctamente";
} else {
    echo "Error al crear la tabla de Transacciones: " . $conn->error;
}

$sql = "SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;";

//-----------------------------LLENANDO LA BASE DE DATOS

//INSERTANDO LOS ROLES

$sql_insert = "INSERT INTO Roles (NombreRol) VALUES
    ('Admin'),
    ('Usuario')";

// Ejecutar la consulta

if ($conn->query($sql_insert) === TRUE) {
    echo "ROLES insertados correctamente.";
} else {
    echo "Error al insertar ROLES: " . $conn->error;
}

//INSERTANDO LAS CATEGORIAS 

$sql_insert_categorias = "INSERT INTO Categorias (Nombre) VALUES
    ('Creatina'),
    ('Proteina en polvo'),
    ('Pre-entreno'),
    ('Aminoacido'),
    ('Quemador de grasa'),";

// Ejecutar la consulta
if ($conn->query($sql_insert_categorias) === TRUE) {
    echo "Datos de categorías insertados correctamente.";
} else {
    echo "Error al insertar datos de categorías: " . $conn->error;
}

//INSERTANDO METODOS DE PAGO

$sql_insert_metodos_pago = "INSERT INTO MetodosPago (idMetodosPago, Nombre) VALUES
    (1, 'Tarjeta de Crédito'),
    (2, 'Transferencia Bancaria'),
    (3, 'PayPal'),
    (4, 'Pago Movil')";

// Ejecutar la consulta
if ($conn->query($sql_insert_metodos_pago) === TRUE) {
    echo "Datos de métodos de pago insertados correctamente.";
} else {
    echo "Error al insertar datos de métodos de pago: " . $conn->error;
}

//INSERTANDO LOS PRODUCTOS ------------ CREATINAS 

$sql_insert_productos = "INSERT INTO Productos (NombreProducto, Marca, Descripcion, CostoUnitario, Imagen, Existencia, idCategoria) VALUES
    ('Monohidrato de creatina', 'Amix Nutrition', '', 49.99, 'imagen1.jpg', 50, 1),
    ('Creatine Powder', 'Optimum Nutrition', 'Descripción del Producto 2', 39.99, 'imagen2.jpg', 30, 1),
    ('100% Creatina', 'Scitec Nutrition', 'Descripción del Producto 3', 19.50, 'imagen3.jpg', 20, 1),
    ('Creatina Creapure', 'Quality Nutrition', 'Descripción del Producto 3', 35.50, 'imagen3.jpg', 24, 1),
    ('Creatina Maxtop Nutrition', 'Maxtop Nutrition', 'Descripción del Producto 3', 25.60, 'imagen3.jpg', 20, 1),
    ('Creatina Biotech USA', 'Biotech USA', 'Descripción del Producto 3', 40.50, 'imagen3.jpg', 50, 1),
        ---------------------------------- PROTEINAS//
    ('Optimum Nutrition Gold Standard 100% Whey', 'Optimum Nutrition', '', 75.99, 'imagen1.jpg', 50, 2),
    ('Tri-Protein', 'Crazy Nutrition', 'Descripción del Producto 2', 69.99, 'imagen2.jpg', 30, 2),
    ('Scitec Nutrition 100% Whey Protein Professional', 'Scitec Nutrition', '', 89.50, 'imagen3.jpg', 20, 2),
    ('Myprotein Impact Whey Protein', 'Myprotein', 'Descripción del Producto 3', 65.50, 'imagen3.jpg', 24, 2),
    ('Bodylab24 Whey Protein Powder', 'Bodylab24', 'Descripción del Producto 3', 50.60, 'imagen3.jpg', 20, 2),
        //---------------------------------- PRE-ENTRENOS//
    ('ABE Pre-Workout', ' Applied Nutrition', '', 75.99, 'imagen1.jpg', 50, 3),
    ('Moons Truck', 'Zoomad Labs', 'Descripción del Producto 2', 69.99, 'imagen2.jpg', 30, 3),
    ('PROSUPPS HYDE PRE-WORKOUT', 'PROSUPPS', '', 89.50, 'imagen3.jpg', 20, 3),
    //---------------------------------- AMINOACIDOS//
    ('ABE Pre-Workout', ' Applied Nutrition', '', 75.99, 'imagen1.jpg', 50, 3),
    ('Moons Truck', 'Zoomad Labs', 'Descripción del Producto 2', 69.99, 'imagen2.jpg', 30, 3),
    ('PROSUPPS HYDE PRE-WORKOUT', 'PROSUPPS', '', 89.50, 'imagen3.jpg', 20, 3)";


// Ejecutar la consulta
if ($conn->query($sql_insert_productos) === TRUE) {
    echo "Datos de productos insertados correctamente.";
} else {
    echo "Error al insertar datos de productos: " . $conn->error;
}