class Api::SectionsController < ApplicationController
  def create
    @section = Section.new(section_params)

    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def index
    @sections = current_user.sections.includes(:tasks)
  end

  def show
    @section = Section.find_by(id: params[:id])
  end

  def update
    @section = Section.find_by(id: params[:id])

    if @section.update(section_params)
      render :show
    else
      redner json: @section.errors.full_messages, status: 422
    end
  end

  def destroy
    @section = Section.find_by(id: params[:id])
    @section.destroy
    render :show
  end

  private

  def section_params
    params.require(:section).permit(
      :name,
      :description,
      :due_date,
      :complete
    )
  end
end
