json.extract! task, :id, :section_id, :name, :description, :due_date, :complete, :section_id, :isSection
json.array! task.orders do |order|
  json.orderableId order.orderable_id do
    json.orderableType order.orderable_type
    json.prevId order.prev_id
    json.nextId order.next_id
  end
end
