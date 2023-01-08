
import React, {useState, useEffect} from "react";

import { renderUser } from "../services";


type User = {
  username: string;
  lifetime: {
    mode: {
      br: {
        properties: {
          wins: number;
  kdRatio: number;
  kills: number;
  scorePetMinute: number;
        }
      }
    }
  }


}


export const RankingTable = () => {

  const [user, setUser] = useState<User | null>(null);


 /* useEffect(() => {
         const getData = async () => {
           try {
                
                const response =  await renderUser();
                
                setUser(response)

             } catch (error) {
                 console.log("Algo deu errado ao carregar usuário" + error)
             }
         }
         getData();
     }, [setUser])
*/
   
    return(
      <>
      
      
<form>

<input type="text" placeholder="Digite sua gamertag">

</input>
</form>
</>
    )
}