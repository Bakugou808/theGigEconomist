class AppointmentsController < ApplicationController
    before_action :set_appointment, only: [:show, :update, :destroy]

    def index 
        appointments = Appointment.all  
        render json: appointments
    end
 
    def show 
        render json: @appointment
        # , include: ['profiles']
    end 

    def create 
        byebug
        @appointment = Appointment.new(appointment_params)
        if @appointment.save 
            render json: @appointment
        else
            render json: {error: 'That appointment could not be created'}, status: 401
        end 
    end 

    def update 
        if @appointment.update(appointment_params)
            render json: @appointment 
        # else 
        end 
    end 

    def destroy 
        @appointment.destroy 
        render json: "appointment Deleted"
    end 


    private 

    def set_appointment 
        
        @appointment = Appointment.find(params[:id])
    end 

    def appointment_params
        params.permit(:gig_id, :title, :date_of_appointment, :time_of_appointment, :location, :duration, :payment_amount, :notes)
    end 
end
