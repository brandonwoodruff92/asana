# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all

team = Team.create!({
  name: "Woodruff Industries",
  description: "The best team",
  team_type: "Marketing"
  })

user = User.create!({
  name: "Brandon Woodruff",
  email: "brandonwoodruff92@gmail.com",
  password: "password",
  team_id: team.id
  })
