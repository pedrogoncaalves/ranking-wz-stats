
import axios from "axios";

   const options = {
    method: 'GET',
    url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`, 
    headers: {
      'X-RapidAPI-Key': '0d9c2c3b7emsh90e4a4cc612ee27p161090jsnc6c18284a60d',
      'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
    }
  };
  
  export async function renderUser(gamertag: string, platform : string) {
    try {

      const response = await axios.request(options);
      const userData = response.data.data
       console.log(userData);
      return userData
      
      
    } catch (error) {
      console.error(error);
    }
  
  }

  export default options; 

