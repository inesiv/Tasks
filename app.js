<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>tasks</title>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col s12 m6">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Task list project</span>

                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input placeholder="Add task" id="task" type="text" class="validate">
                                    <label for="task"></label>
                                    <input type="submit" value="Add Task" class="btn green">
                                </div>
                            </div>
                        </form>
                </div>
                <div class="card-action">
                    <h4>Tasks</h4>
                    <ul class="collection">
                    </ul>
                    <a href="#" class="btn red" id="delete-tasks">Delete all tasks</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<!-- application script -->
<script src="app.js"></script>
</body>
</html>
