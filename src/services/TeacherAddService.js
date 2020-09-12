import axios from 'axios'

class TeacherAddService{

    saveAdd(add){
        add["teacherEmail"] = sessionStorage.getItem("authenticatedUser")
        return axios.post("http://localhost:8080/teacher_details/create_add", add)
    }


    editAdd(add){
        add["teacherEmail"] = sessionStorage.getItem("authenticatedUser")
        return axios.put("http://localhost:8080/teacher_details/edit_add", add)
    }

    getTeacherAddCount(email){
        return axios.get(`http://localhost:8080/teacher_details/getAddCount/${email}`)
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

    getTeacherAdd(id){
        return axios.get(`http://localhost:8080/teacher_details/getAdd/${id}`)
    }

    getAddsForStudents(grade, subject, district, city){
        return axios.get(`http://localhost:8080/student_dashboard/get_adds/${grade}/${subject}/${district}/${city}`)
    }

    deleteTeacherAdd(id){
        return axios.get(`http://localhost:8080/teacher_details/delete_add/${id}`)
    }

}

export default new TeacherAddService()