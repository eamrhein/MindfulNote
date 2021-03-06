Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: %i[create destroy]
    resources :notes, except: %i[new edit]
    resources :notebooks, except: %i[new edit]
    resources :taggings, only: %i[create destroy]
    resources :tags, only: %i[create destroy index]
  end
end
