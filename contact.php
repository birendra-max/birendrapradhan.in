<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json'); // important: tell browser it's JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['usr_nm']) ? htmlspecialchars(trim($_POST['usr_nm'])) : '';
    $email = isset($_POST['e_ml']) ? htmlspecialchars(trim($_POST['e_ml'])) : '';
    $message = isset($_POST['mm_sg']) ? htmlspecialchars(trim($_POST['mm_sg'])) : '';

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Please fill in all fields."
        ]);
        exit;
    }

    // DB connection
    $conn = new mysqli('localhost', 'root', '', 'bp_database');

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Database connection failed."
        ]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO contact_us (user_name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Thank you, $name! Your message has been saved."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to save your message."
        ]);
    }

    $stmt->close();
    $conn->close();
} else {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method Not Allowed"
    ]);
}
