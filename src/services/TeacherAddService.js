import axios from 'axios'

class TeacherAddService{

    saveAdd(add){
        add["teacherEmail"] = sessionStorage.getItem("authenticatedUser")
        return axios.post("http://localhost:8080/teacher_details/create_add", add)
    }

    saveAddBanner(id, banner){
        let addBanner = new FormData()
        addBanner.append("id", id)
        addBanner.append("banner", banner)

        return axios.post("http://localhost:8080/teacher_details/create_add/banner", addBanner)
    }

    getTeacherAdds(){
        return axios.get(`http://localhost:8080/teacher_details/getAdds/${sessionStorage.getItem("authenticatedUser")}`)
    }

    getAddsForStudents(grade, subject, district, city){
        return axios.get(`http://localhost:8080/student_dashboard/get_adds/${grade}/${subject}/${district}/${city}`)
    }

}

export default new TeacherAddService()