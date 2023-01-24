
import axios from "axios";

  
  
  export async function renderUser(gamertag: string, platform : string) {
    try {

      const response = await axios.get(`https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${gamertag}/${platform}`, {
        headers: {
          'X-RapidAPI-Key': '0d9c2c3b7emsh90e4a4cc612ee27p161090jsnc6c18284a60d',
          'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      }
      );
      const userData = response.data.data
      
      return userData
      
      
    } catch (error) {
      console.error(error);
    }
  
  }

 

 