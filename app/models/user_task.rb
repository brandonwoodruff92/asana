class UserTask < ApplicationRecord
  validates :user_id, :task_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :task,
  foreign_key: :task_id,
  class_name: "Task"
end
