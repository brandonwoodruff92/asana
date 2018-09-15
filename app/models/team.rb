class Team < ApplicationRecord
  validates :name, :type, presence: true

  has_many :team_associations,
  foreign_key: :team_id,
  class_name: "TeamAssociation"

  has_many :members,
  through: :team_associations,
  source: :member
end
