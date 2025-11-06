<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método inválido']);
    exit;
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'bernardo.nogueiraff@gmail.com';
    $mail->Password = 'icro afub ityk ttsr'; // senha de app do Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('bernardo.nogueiraff@gmail.com', 'Portfolio - Contato');
    $mail->addAddress('bernardo.nogueiraff@gmail.com', 'Bernardo Nogueira');

    $mail->isHTML(false);
    $mail->Subject = "Contato de $name";
    $mail->Body = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email enviado com sucesso']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Erro: ' . $mail->ErrorInfo]);
}
