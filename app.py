from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory "database"
tasks = []

# Route: Home
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Task Manager API!"})

# Route: Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# Route: Create a new task
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    task = {
        "id": len(tasks) + 1,
        "title": data.get("title"),
        "description": data.get("description", ""),
        "done": False
    }
    tasks.append(task)
    return jsonify(task), 201

# Route: Update a task
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    data = request.get_json()
    for task in tasks:
        if task["id"] == task_id:
            task["title"] = data.get("title", task["title"])
            task["description"] = data.get("description", task["description"])
            task["done"] = data.get("done", task["done"])
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

# Route: Delete a task
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return jsonify({"message": "Task deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
