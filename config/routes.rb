# frozen_string_literal: true

Rails.application.routes.draw do
  scope '(:locale)', locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users
    resources :posts
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    root to: 'posts#index'
    # get 'posts/ind', to: '/ru/ind.html.erb'
    devise_scope :user do
      get '/users/sign_out' => 'devise/sessions#destroy'
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
