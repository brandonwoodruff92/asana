json.partial! "api/users/user", user: @user
json.taskIds @user.tasks.map { |task| task.id }
