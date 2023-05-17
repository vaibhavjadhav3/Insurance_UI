import axios from "axios";

const API_URL="https://localhost:8080";

class AmtService{

    saveAmt(amt)
    {
        return axios.post(API_URL+"/save",announcement);

    }
    getAllAmt()
    {
        return axios.get(API_URL+"/getlist")
    }
    getAmByID(id)
    {
        return axios.get(API_URL+"/"+id)
    }
    deleteAmt()
    {
        return axios.delete(API_URL+"/delete/"+id)

    }
    editAmt(announcement)
    {
        return axios.put(API_URL+"/edit/"+announcement.id,announcement)
    }






}

export default new AmtService;
