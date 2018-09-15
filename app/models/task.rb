class Task < ApplicationRecord
  validates :name, presence: true

  has_many :project_tasks,
  foreign_key: :task_id,
  class_name: "ProjectTask"

  has_many :user_tasks,
  foreign_key: :task_id,
  class_name: "UserTask"

  has_many :projects,
  -> { distinct },
  through: :project_tasks,
  source: :project

  has_many :assignees,
  -> { distinct },
  through: :user_tasks,
  source: :user

  has_many :sub_tasks,
  foreign_key: :parent_task_id,
  class_name: "Task"

  belongs_to :section,
  foreign_key: :section_id,
  optional: true,
  class_name: "Section"
end
