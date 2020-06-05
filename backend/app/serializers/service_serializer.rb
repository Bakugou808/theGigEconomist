class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :pay_range
  belongs_to :user
  has_many :gigs
end
