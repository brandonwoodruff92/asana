class Project < ApplicationRecord
  validates :creator_id, :team_id, :name, presence: true

  has_many :project_tasks,
  foreign_key: :project_id,
  class_name: "ProjectTask"

  has_many :project_sections,
  foreign_key: :project_id,
  class_name: "ProjectSection"

  has_many :user_projects,
  foreign_key: :project_id,
  class_name: "UserProject"

  has_many :tasks,
  -> { distinct },
  through: :project_tasks,
  source: :task

  has_many :assignees,
  -> { distinct },
  through: :user_projects,
  source: :user

  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: "User"

  belongs_to :team,
  foreign_key: :team_id,
  class_name: "Team"
end
