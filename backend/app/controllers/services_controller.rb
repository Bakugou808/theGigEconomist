class ServicesController < ApplicationController
    before_action :set_service, only: [:show, :update, :destroy]

    def index 
        services = Service.all  
        render json: services
    end
 
    def show 
        render json: @service
        # , include: ['profiles']
    end 

    def usersServices
        services = Service.where(user_id: params[:user_id].to_i)
        render json: services
    end

    def create 
        @service = Service.new(service_params)
        if @service.save 
            render json: @service
        else
            render json: {error: 'That service could not be created'}, status: 401
        end 
    end 

    def update 
        
        if @service.update(service_params)
            render json: @service 
        # else 
        end 
    end 

    def destroy  
        id = @service.id
        @service.destroy 
        render json: id
    end 


    private 

    def set_service 
        
        @service = Service.find(params[:id])
    end 

    def service_params
        params.permit(:title, :description, :pay_range, :user_id)
    end 
end