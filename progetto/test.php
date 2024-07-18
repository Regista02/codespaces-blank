<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['username'])) {
    $username = $input['username'];
    // Simulazione di controllo nel database
    $response = [
        'message' => 'La username ' . htmlspecialchars($username)
    ];
    echo json_encode($response);
} else {
    echo json_encode(['message' => 'Username non fornito']);
}
?>