class Api::V1::CourseloadsController < ApplicationController
    def index
        courseloads = Courseload.all
        
        render json: courseloads, status: 200
    end 

    def show
        courseload = Courseload.find(params[:id])

        render json: courseload, status: 200
    end 

    def create 
        @courseload = Courseload.create(courseload_params)

        render json: @courseload, status: 200
    end 

    def update 
        @courseload = Courseload.find(params[:id])
        @courseload.update(courseload_params)

        render json: @task, status: 200
    end 

    def destroy
        @courseload = Courseload.find(params[:id])
        @courseload.update(courseload_params)
    end 

    private 
    
    def courseload_params
        params.permit(:language, :framework, :general, :link, :category)
    end 
end
