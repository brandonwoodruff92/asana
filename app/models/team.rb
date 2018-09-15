class Team < ApplicationRecord
  validates :name, :type, presence: true

  has_many :team_associations,
  foreign_key: :team_id,
  class_name: "TeamAssociation"

  has_many :members,
  through: :team_associations,
  source: :member

  has_many :projects,
  foreign_key: :team_id,
  class_name: "Project"

  has_many :sections,
  through: :projects,
  source: :sections

  has_many :tasks,
  through: :projects,
  source: :tasks
end
