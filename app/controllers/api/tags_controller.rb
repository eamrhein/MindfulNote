class Api::TagsController < ApplicationController

  def index
    @tags = Tag.where(user_id: current_user.id)
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id
    if @tag.save
      render "api/tags/show"
    else
      render @tag.errors.full_messages, status: 403
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:tags][:id])

    if @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 403
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end

end
