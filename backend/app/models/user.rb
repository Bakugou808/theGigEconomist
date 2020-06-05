class User < ApplicationRecord
    has_many :services 
    has_secure_password
end
