class ClientSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :contact_name, :email, :cell, :venmo
end
