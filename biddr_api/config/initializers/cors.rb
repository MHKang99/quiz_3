# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "localhost:3001"
      resource(
          '/api/*',
          headers: :any, 
          credentials: true, 
          methods: [:get, :post, :patch, :put, :delete, :options] # allow these http verbs
      )
    end
  end