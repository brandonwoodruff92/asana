class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def removeTask
    @user = User.find_by(id: params[:userId])
    @user.tasks.delete(Task.find_by(id: params[:taskId]))
    render :show
  end

  def addTask
    @user = User.find_by(id: params[:userId])
    task = Task.find_by(id: params[:taskId])

    if task
      @user.tasks << task
      render :show
    else
      render json: ["Task does not exist!"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :img_url)
  end
end
