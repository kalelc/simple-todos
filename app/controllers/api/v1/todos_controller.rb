class Api::V1::TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |format|
      format.json { render :json => @todos }
    end
  end
end
