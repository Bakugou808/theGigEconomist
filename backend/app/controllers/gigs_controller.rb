class GigsController < ApplicationController
    before_action :set_gig, only: [:show, :update, :destroy]

    def index 
        gigs = Gig.all  
        render json: gigs
    end
 
    def show 
        render json: @gig
        # , include: ['profiles']
    end 

    def create 
        
        @gig = Gig.new(gig_params)
        if @gig.save 
            render json: @gig
        else
            render json: {error: 'That gig could not be created'}, status: 401
        end 
    end 

    def update 
        if @gig.update(gig_params)
            render json: @gig 
        # else 
        end 
    end 

    def destroy 
        @gig.destroy 
        render json: "gig Deleted"
    end 


    private 

    def set_gig 
        
        @gig = Gig.find(params[:id])
    end 

    def gig_params
        params.permit(:title, :service_type, :service_id, :client_id, :details, :completed)
    end 
end
