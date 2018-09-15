Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    delete '/users/:userId/removeTask/:taskId', to: 'users#removeTask', as: 'remove_user_task'
    patch '/users/:userId/addTask/:taskId', to: 'users#addTask', as: 'add_user_task'
    resources :users, only: [:create, :update, :show]
    resources :tasks, only: [:create, :index, :show, :update, :destroy]
    resources :projects, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
