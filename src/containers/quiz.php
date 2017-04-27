<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <title>Simple To-Do list</title>
    <style type="text/css">
        body {
            width: 600px;
            margin: 0 auto;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        ul li {
            border: 1px solid gray;
            padding: 5px
        }

        input[type="number"] {
            width: 70px;
        }
    </style>
</head>
<body>

<h1>To-Do list:</h1>

<ul>
    <li><input type="number" name="priority[]" value="5">
        <input type="text" name="text[]" value="Lorem Ipsum">
        <button>update</button>
        <button>delete</button>
    </li>
</ul>

<ul>
    <li>
        <p>Add new item:</p>
        <input type="number" name="priority" value="" id="new_priority" placeholder="Priority"/>
        <input type="text" name="todo" value="" id="new_text" placeholder="Text"/>
        <button onclick="createItem()">Add</button>
    </li>
</ul>

</body>
</html>
