class Api::V1::UsersController < ApplicationController
    def new 
        @user = User.new
    end 

    def create
        @user = User.new(user_params)
        
        if @user.save
            render json: 
        else
            render json:
        end 
    end 

    def show
        @user = User.find_by(id: params[:id])
            if @user
            render json:
        else
            render json:
        end 
    end 

    private 

    def user_params
        params.permit(:email, :password)
    end
end
