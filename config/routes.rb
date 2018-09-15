Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :update, :show]
    resources :tasks, only: [:create, :index, :show, :update, :destroy]
    resources :projects, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
