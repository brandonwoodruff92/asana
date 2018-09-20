class Api::TeamsController < ApplicationController
  def create
    @team = Team.new(team_params)
    @team.description = "a";
    @team.team_type = "b";
    debugger

    if @team.save
      render :show, status: 200
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = Team.find_by(id: params[:id])
  end

  private

  def team_params
    params.require(:team).permit(:name, :description, :team_type)
  end
end
