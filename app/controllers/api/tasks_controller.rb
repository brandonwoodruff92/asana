class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)

    if @task.save
      current_user.tasks << @task
      current_user.save!
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find_by(id: params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.tasks
    .where(parent_task_id: nil)
    .where(complete: false)
  end

  def show
    @task = Task.find_by(id: params[:id])
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(
      :parent_task_id,
      :name,
      :description,
      :due_date,
      :complete,
      :section_id,
      :assignee_id
    )
  end
end
