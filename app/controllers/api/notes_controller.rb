# Handles Note Ajax calls
class Api::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id
    @note.notebook_id = current_user.notebooks.first.id
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 403
    end
  end

  def index
    @notes = Note.where(author_id: current_user.id)
  end

  def show
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 403
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    render :show
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :author_id)
  end
end
