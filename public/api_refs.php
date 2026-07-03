<?php
header('Content-Type: application/json');
$path = __DIR__ . '/../app/ref';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!is_dir($path)) mkdir($path, 0777, true);
    $folders = array_values(array_diff(scandir($path), array('..', '.', '[name]')));
    echo json_encode(['folders' => $folders]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $dir = $path . '/' . $data['filename'];
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        file_put_contents($dir . '/page.tsx', 'export default function Page() { return <div>Created</div>; }');
        echo json_encode(['success' => true]);
    } else {
        http_response_code(400); echo json_encode(['error' => 'exists']);
    }
}