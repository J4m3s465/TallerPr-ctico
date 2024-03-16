<?php
// Establecer la conexión con la base de datos
$conexion = new mysqli('localhost', 'root', '', 'unidad_borja');

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$grado = $_POST['grado'];

// Preparar la consulta SQL
$sql = "INSERT INTO clientes (nombre, apellido, telefono, email, grado) VALUES ('$nombre', '$apellido', '$telefono', '$email', '$grado')";

// Ejecutar la consulta
if ($conexion->query($sql) === TRUE) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error al guardar los datos: " . $conexion->error;
}

// Cerrar la conexión
$conexion->close();

