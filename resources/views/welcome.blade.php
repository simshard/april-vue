<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <!-- Fonts -->

        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css">

    </head>
    <body >
      <div id="app"><div class="content p-5">
        <h5>  vue basics</h5>

        <example-component></example-component>
        <hr >
        <h5>Random gif fetched from giphy api using Axios</h5>
        <giphy></giphy>
<hr>
    <div class="mb-4">
      <h3>BBC News headlines</h3>
    </div>

        <newsfeed></newsfeed>

      </div>
</div>
      <script src="/js/app.js" charset="utf-8"></script>
    </body>
</html>
