class Service < ApplicationRecord
  belongs_to :user
  has_many :gigs, dependent: :destroy
end
