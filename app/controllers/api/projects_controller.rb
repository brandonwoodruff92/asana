class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id
    @project.team_id = current_user.team.id

    if @project.save
      current_user.projects << @project
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find_by(id: params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    @project.destroy
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :complete, :color_id)
  end
end
