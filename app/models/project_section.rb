class ProjectSection < ApplicationRecord
  validates :project_id, :section_id, presence: true

  belongs_to :project,
  foreign_key: :project_id,
  class_name: "Project"

  belongs_to :section,
  foreign_key: :section_id,
  class_name: "Section"
end
