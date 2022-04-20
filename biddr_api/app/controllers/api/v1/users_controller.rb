class Api::V1::UsersController < Api::ApplicationController
    def current
        render json: current_user
    end

    def create
        user_params = params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
        user = User.new user_params
        if user.save
            session[:user_id] = user.id
            render json: { id: user.id }
        end
    end

    
end
