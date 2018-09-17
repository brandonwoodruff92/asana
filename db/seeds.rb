# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
Project.destroy_all

users = User.create!([
  {
    name: "Brandon Woodruff",
    email: "brandonwoodruff92@gmail.com",
    password: "password"
  }
  ])

team = Team.create!({
  name: "Woodruff Industries",
  description: "The best team",
  team_type: "Marketing"
  })

projects = Project.create!([
  {
    creator_id: users[0].id,
    name: "Test Project",
    description: "This is a test project",
    team_id: team.id
  },
  {
    creator_id: users[0].id,
    name: "Another Test Project",
    description: "This is a another test project",
    team_id: team.id
  },
  {
    creator_id: users[0].id,
    name: "One More Test Project",
    description: "This is one more test project",
    team_id: team.id
  }
  ])
