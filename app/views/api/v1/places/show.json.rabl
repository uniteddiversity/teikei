extends "api/v1/places/index"

child :ownerships do
  attributes :user_id, :name
  attributes :email, :if => lambda { |o| o.place.authorized? current_user }
end

attributes :contact_phone, :contact_url


