class Orders < ApplicationRecord
  belongs_to :orderable,
  polymorphic: true
end
