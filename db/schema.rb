# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180917184320) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer "prev_id"
    t.integer "next_id"
    t.integer "orderable_id"
    t.string "orderable_type"
    t.index ["prev_id", "next_id", "orderable_id"], name: "index_orders_on_prev_id_and_next_id_and_orderable_id"
  end

  create_table "project_logs", force: :cascade do |t|
    t.string "type", null: false
    t.integer "type_id", null: false
    t.integer "user_id", null: false
    t.string "message", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type_id", "user_id"], name: "index_project_logs_on_type_id_and_user_id"
  end

  create_table "project_tasks", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "task_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "task_id"], name: "index_project_tasks_on_project_id_and_task_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "name", null: false
    t.string "description"
    t.boolean "complete", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "team_id", null: false
    t.index ["creator_id"], name: "index_projects_on_creator_id"
    t.index ["team_id"], name: "index_projects_on_team_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "parent_task_id"
    t.string "name"
    t.string "description"
    t.datetime "due_date"
    t.boolean "complete", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "assignee_id"
    t.integer "section_id"
    t.boolean "isSection"
    t.index ["section_id"], name: "index_tasks_on_section_id"
  end

  create_table "team_associations", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "team_id"], name: "index_team_associations_on_member_id_and_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_projects", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "project_id"], name: "index_user_projects_on_user_id_and_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email", "session_token"], name: "index_users_on_email_and_session_token"
  end

end
