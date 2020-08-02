import axios from 'axios'

class AuthenticationService{
    registerSuccessfulLogin(email, password){
        sessionStorage.setItem("authenticatedUser", email)
        const token = this.getEncodedUsernameAndPassword(email, password)
        this.interceptRequests(token)

    }

    getEncodedUsernameAndPassword(username, password){
        return "Basic " + window.btoa(username + ":" + password)
    }

    userLogin(email, password){
        return axios.get("http://localhost:8080/teacher_details/login", {
            auth: {
                username: email,
                password: password
            }
        })
    }

    getTeacherDetails(){
        let loginForm = new FormData()
        loginForm.append('email', sessionStorage.getItem("authenticatedUser"))
        console.log(sessionStorage.getItem("authenticatedUser"))
        return axios.post("http://localhost:8080/teacher_details/login/user",loginForm)

        // return axios.get("http://localhost:8080/teacher_details/login/use", loginForm)
    }

    isLoggedIn(){
        let user = sessionStorage.getItem("authenticatedUser")
        if(user == null) return false
        return true
    }

    unregisterUser(){
        sessionStorage.removeItem("authenticatedUser")
    }

    interceptRequests(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}

export default new AuthenticationService()