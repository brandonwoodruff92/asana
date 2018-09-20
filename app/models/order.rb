class Order < ApplicationRecord
  belongs_to :orderable,
  polymorphic: true
end
