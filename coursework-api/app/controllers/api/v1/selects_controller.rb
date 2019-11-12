class Api::V1::SelectsController < ApplicationController
    def new
        @select = Select.new 
    end 

    def create
        @select = Select.new(select_params)
        
        if @select.save
            render json: @select 
        else 
            render json {message: "failed"}
        end 
    end 

    def index
        user_id = params[:user_id]
        user = User.find(user_id)
        selects = user.selects 
        render json selects, include: [:courseloads]
    end 

    def destroy
        select_id = params[:id]
        select = Select.find(select_id)
        select.destroy
    end 

    private 

    def select_params
        params.require(:select).permit(:user_id, :courseload_id)
    end 
end
