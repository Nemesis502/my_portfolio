<?php

header('Content-Type: text/plain; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Method not allowed');
}

$payload = json_decode(file_get_contents('php://input'), true);

if (!is_array($payload)) {
    http_response_code(400);
    exit('Invalid request body');
}

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

if (
    $name === '' ||
    strlen($name) > 120 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($email) > 254 ||
    strlen($message) < 4 ||
    strlen($message) > 5000
) {
    http_response_code(422);
    exit('Invalid form data');
}

$recipient = 'kontakt@bastianklawes.de';
$subject = 'Neue Kontaktanfrage über bastianklawes.de';
$body = "Name: {$name}\nE-Mail: {$email}\n\nNachricht:\n{$message}";
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'From: noreply@bastianklawes.de',
    "Reply-To: {$email}",
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    exit('Message could not be sent');
}

http_response_code(204);
