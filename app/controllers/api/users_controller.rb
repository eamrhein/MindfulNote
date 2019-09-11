
class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      Notebook.create(title: "Default Notebook", author_id: @user.id)
      login!(@user)
      render "api/users/show"
    else
      flash.now[:errors] = @user.errors
      render json: @user.errors.full_messages, status: 401
    end
  end
end
