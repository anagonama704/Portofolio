<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="icon" href="{{ url('../../public/favicon.ico') }}">
    <link rel="stylesheet" href="../css/app.css">
    <title>WK</title>
</head>

<body>
    <div id="app"></div>
</body>
<script src="{{ mix('js/app.js') }}"></script>

</html>