class ProjectLog < ApplicationRecord
  validates :type, :type_id, :user_id, :message, presence: true
end
