class Section < ApplicationRecord
  validates :project_id, :name, presence: true

  has_many :project_sections,
  foreign_key: :section_id,
  class_name: "ProjectSection"

  has_many :tasks,
  foreign_key: :section_id,
  class_name: "Task"

  has_many :projects,
  through: :project_sections,
  source: :project
end
