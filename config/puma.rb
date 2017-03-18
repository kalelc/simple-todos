# Default to production
rails_env = ENV['RAILS_ENV'] || "production"

# Workers and threads
case rails_env
when "production"
  workers 6
  threads 16, 32
when "staging"
  workers 4
  threads 8, 16
else
  workers 2
  threads 1, 6
end

app_dir = File.expand_path("../..", __FILE__)

environment rails_env
shared_dir = "#{app_dir}/tmp"

# Set up socket location
bind "unix://#{shared_dir}/sockets/puma.sock"

# Logging
stdout_redirect "#{app_dir}/log/puma.stdout.log", "#{app_dir}/log/puma.stderr.log", true

# Set master PID and state locations
pidfile "#{shared_dir}/pids/puma.pid"
state_path "#{shared_dir}/pids/puma.state"

#daemonize
daemonize true

# reduces the startup time of individual Puma worker processes
preload_app!

on_worker_boot do
  ActiveSupport.on_load(:active_record) do
    config = ActiveRecord::Base.configurations[Rails.env] || Rails.application.config.database_configuration[Rails.env]
    ActiveRecord::Base.establish_connection(config)
  end
end
