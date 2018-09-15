class ProjectTask < ApplicationRecord
  validates :project_id, :task_id, presence: true

  belongs_to :project,
  foreign_key: :project_id,
  class_name: "Project"

  belongs_to :task,
  foreign_key: :task_id,
  class_name: "Task"
end
