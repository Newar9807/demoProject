
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interactive Demo Website</title>
        <link rel="stylesheet" text="text/css" href="<?php bloginfo('template_directory')?>/css/style.css" />
  <!-- <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      text-align: center;
    }
    
    p {
      line-height: 1.5;
    }
    
    .button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    
    .button:hover {
      background-color: #3e8e41; /* Green shade on hover */
    }
  </style> -->
</head>
<body>
  <h1>Welcome to my Interactive Demo Website!</h1>
  <p>This is a basic website with some interactive elements to showcase possibilities.</p>
  
  <button onclick="changeColor()">Change Background Color</button>
  
  <script>
  function changeColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  </script>
</body>
</html>
