class TeamAssociation < ApplicationRecord
  validates :member_id, :team_id, presence: true

  belongs_to :team,
  foreign_key: :team_id,
  class_name: "Team"

  belongs_to :member,
  foreign_key: :member_id,
  class_name: "User"
end
