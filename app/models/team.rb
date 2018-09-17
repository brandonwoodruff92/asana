class Team < ApplicationRecord
  validates :name, :team_type, presence: true

  has_many :team_associations,
  foreign_key: :team_id,
  class_name: "TeamAssociation"

  has_many :members,
  foreign_key: :team_id,
  class_name: "User"

  has_many :projects,
  foreign_key: :team_id,
  class_name: "Project"

  has_many :tasks,
  through: :projects,
  source: :tasks
end
