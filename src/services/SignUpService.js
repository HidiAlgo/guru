import axios from 'axios'

// function createFormData(object, form, namespace) {
//     const formData = form || new FormData();
//     for (let property in object) {
//         if (!object.hasOwnProperty(property) ||      !object[property]) {
//             continue;
//         }
//         const formKey = namespace ? `${namespace}[${property}]` : property;
//         if (object[property] instanceof Date) {
//             formData.append(formKey, object[property].toISOString());
//         } else if (typeof object[property] === 'object' && !(object[property] instanceof File)) {
//             createFormData(object[property], formData, formKey);
//         } else {
//             formData.append(formKey, object[property]);
//         }
//     }
//     return formData;
// }
class SignUpService{

    validateEmailAndNIC(user_details){
        return axios.post("http://localhost:8080/teacher_details/validate_user",user_details)
    }

    saveUserDetails(user_details){
        // let formData=createFormData(user_details);
        // const formData = new FormData();
        // formData.append("user_details", new Blob([JSON.stringify(user_details, null, 2)], {type : 'application/json'}));
        // formData.append("image", image)
        return axios.post("http://localhost:8080/teacher_details",user_details)
    }

    saveUserImage(email, image){
        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", image)
        return axios.post("http://localhost:8080/teacher_details/photo",formData)
    }

}

export default new SignUpService