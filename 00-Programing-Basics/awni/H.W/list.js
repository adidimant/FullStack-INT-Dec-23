<!DOCTYPE html>
<html>
<head>
	<title>Weakly To-Do List</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f2f2f2;
		}
		h1 {
			text-align: center;
			color: #333;
			margin-top: 50px;
		}
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 50px;
		}
		input[type="text"] {
			padding: 10px;
			border-radius: 5px;
			border: none;
			margin-bottom: 20px;
			width: 300px;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
		}
		input[type="submit"] {
			padding: 10px 20px;
			background-color: #4CAF50;
			color: white;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
		}
		ul {
			list-style: none;
			padding: 0;
			margin-top: 50px;
		}
		li {
			padding: 10px;
			background-color: #fff;
			border-radius: 5px;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
			margin-bottom: 10px;
			display: flex;
			align-items: center;
		}
		.done {
			text-decoration: line-through;
			color: #999;
			font-size: 16px;
			margin-left: auto;
		}
	</style>
</head>
<body>
	<h1>Weakly To-Do List</h1>
	<form>
		<input type="text" id="taskInput" placeholder="Enter task...">
		<input type="submit" value="Add Task" onclick="addTask(event)">
	</form>
	<ul id="taskList">
	</ul>
	<script>
		function addTask(event) {
			event.preventDefault();
			var taskInput = document.getElementById("taskInput");
			var taskList = document.getElementById("taskList");
			var task = taskInput.value;
			if (task === "") {
				alert("Please enter a task.");
			} else {
				var li = document.createElement("li");
				var span = document.createElement("span");
				span.innerHTML = task;
				var doneButton = document.createElement("button");
				doneButton.innerHTML = "Done";
				doneButton.onclick = function() {
					li.classList.toggle("done");
				}
				li.appendChild(span);
				li.appendChild(doneButton);
				taskList.appendChild(li);
				taskInput.value = "";
			}
		}
	</script>
</body>
</html>
