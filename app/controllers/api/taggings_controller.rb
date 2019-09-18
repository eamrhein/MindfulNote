# API for linking tags to Notes, Does not interact with the state
class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tag_id: params[:tag_id], note_id: params[:note_id])
    return true if @tagging.save

    render json: @tagging.errors.full_messages, status: 403
  end

  def destroy
    @taggings = Tagging.where(note_id: params[:note_id], tag_id: params[:tag_id])
    @taggings.each(&:destroy)
    render json: ["tagging destroyed"]
  end
end
