  import axios from 'axios'

class UpdateProfileDataService{

    updateUser(user){
        return axios.post('http://localhost:8080/api/v1/user', user);
    }

}

export default new UpdateProfileDataService();