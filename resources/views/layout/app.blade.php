<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" 
  x-data="{ darkMode: localStorage.getItem('dark') === 'true'} "
  x-init="$watch('darkMode', val => localStorage.setItem('dark', val))"
  x-bind:class="{ 'dark': darkMode }"
>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Zöld Ász</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>
<body class="text-gray-800 dark:text-gray-200 ">
<div class="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24">
    <x-layout.navbar></x-layout.navbar>
    {{ $slot }}
    <x-layout.footer></x-layout.footer>
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
