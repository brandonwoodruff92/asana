json.partial! "api/tasks/task", task: @task
json.subTaskIds @task.sub_tasks.map { |sub_task| sub_task.id }
