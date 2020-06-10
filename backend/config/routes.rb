Rails.application.routes.draw do
  resources :appointments
  resources :gigs
  resources :clients
  resources :services
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'auth#create'
  get '/current_user', to: 'auth#show'
  get '/user_services/:user_id', to: 'services#usersServices'
end
