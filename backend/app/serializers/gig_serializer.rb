class GigSerializer < ActiveModel::Serializer
  attributes :id, :title, :service_type, :details, :completed, :created_at
  belongs_to :service
  belongs_to :client
  has_many :appointments
end
