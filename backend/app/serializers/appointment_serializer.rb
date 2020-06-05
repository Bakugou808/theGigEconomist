class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :date_of_appointment, :payment_amount, :time_of_appointment, :notes, :location, :duration, :created_at
  belongs_to :gig
end
