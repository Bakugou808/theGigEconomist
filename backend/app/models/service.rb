class Service < ApplicationRecord
  belongs_to :user
  has_many :gigs, dependent: :destroy

  def self.monthsGigs(serviceId)
    service = Service.find(serviceId)
    gigs = service.gigs 
    start_date = Time.now.beginning_of_month.to_date
    end_date = Time.now.end_of_month.to_date
    x = gigs[0].appointments.group_by{|appt| appt.created_at.month}
    
    gigHash = {}
    gigs.each{|gig| gigHash[gig.title] =  (Appointment.where(['date_of_appointment > ? AND date_of_appointment < ? AND gig_id = ?', start_date, end_date, gig.id]))}

    gigHash
  end  

  def self.earnedVsProjected(serviceId)
    service = Service.find(serviceId)
    gigs = service.gigs 
    start_date = Time.now.beginning_of_month.to_date
    end_date = Time.now.end_of_month.to_date
    appts = []
    earned = {sum: 0, appointments: []}
  
    projected = {sum: 0, appointments: []}


    gigs.each{|gig| 
      appts << (Appointment.where(['date_of_appointment > ? AND date_of_appointment < ? AND gig_id = ?', start_date, end_date, gig.id]))
}


    appts.flatten.each{|appt| 
      puts earned
      
      if appt[:completed] 
        earned[:appointments] << appt
        earned[:sum] += appt[:payment_amount].split('$')[1].to_i
      end 
      projected[:appointments] << appt 
      projected[:sum] += appt[:payment_amount].split('$')[1].to_i
    }
    
    earnedVsProjected = {earned: earned, projected: projected}
    
  end
end
