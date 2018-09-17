@projects.each do |project|
  json.partial! "api/projects/project", project: project
end
