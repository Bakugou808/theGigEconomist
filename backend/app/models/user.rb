class User < ApplicationRecord
    has_many :clients
    has_many :services 
    has_secure_password
end
