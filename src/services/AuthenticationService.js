class AuthenticationService{
    registerSuccessfulLogin(email, password){
        sessionStorage.setItem("authenticatedUser", email)
    }

    isLoggedIn(){
        let user = sessionStorage.getItem("authenticatedUser")
        if(user == null) return false
        return true
    }

    unregisterUser(){
        sessionStorage.removeItem("authenticatedUser")
    }
}

export default new AuthenticationService()