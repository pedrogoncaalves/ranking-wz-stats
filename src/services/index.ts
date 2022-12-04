
import axios from "axios";


const baseURL = axios.create({
    method: 'GET',
    url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone',
    headers: {
      'X-RapidAPI-Key': '0d9c2c3b7emsh90e4a4cc612ee27p161090jsnc6c18284a60d',
      'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
    }
  });


  export const getUsersStats = (gamertag: string, platform: string) => {
    return axios.get(`${gamertag}/${platform}`)

  }