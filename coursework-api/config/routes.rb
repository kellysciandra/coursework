Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courseloads
      resources :selects
      resources :users do 
        resources :selects
      end
    end
  end 
end