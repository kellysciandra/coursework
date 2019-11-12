# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Courseload.delete_all
Select.delete_all
User.delete_all

User.create(name: "Kelly", email: "kelly@kelly.com")

courseloads =[
    {language: "Ruby", general: "need to review this and that" },
    {language: "Java", general: "will i ever really understand this"},
    {framework: "Rails", general: "definitely need to review"},
    {general: "Review all Git Bash commands"},
    {general: "finish my project one day"},
]

courseloads.each do |courseload|
  Courseload.create(courseload)
end