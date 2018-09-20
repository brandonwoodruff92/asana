json.partial! "api/users/user", user: @user
json.team @user.team
json.taskIds @user.tasks.map { |task| task.id }
