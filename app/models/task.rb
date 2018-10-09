class Task < ApplicationRecord
  has_many :project_tasks,
  foreign_key: :task_id,
  class_name: "ProjectTask"

  has_many :projects,
  -> { distinct },
  through: :project_tasks,
  source: :project

  has_many :orders,
  as: :orderable,
  dependent: :destroy

  belongs_to :assignee,
  foreign_key: :assignee_id,
  optional: true,
  class_name: "User"

  belongs_to :parent_task,
  foreign_key: :parent_task_id,
  optional: true,
  class_name: "Task"

  has_many :sub_tasks,
  foreign_key: :parent_task_id,
  class_name: "Task"

  def name=(name)
    write_attribute(:name, name)
    isSection = (name.last == ":")
  end

  def isSection=(isSection)
    if isSection
      @section_id = nil;
    end

    @isSection = isSection
  end

  def project_order(project)
    self.orders.where(orderable_id: project.id)
  end
end
