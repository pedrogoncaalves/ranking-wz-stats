
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
type Platform = {
  platform: string;
}


export const RankingTable = () => {

  const [user, setUser] = useState<User>("");
  const [platform, setPlatform] = useState<Platform>("");


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

<input type="text" placeholder="Digite sua gamertag" value={user} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUser(event.target.value)}></input>
<input type="text" placeholder= "Digite sua plataforma" value={platform}  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPlatform(event.target.value)}></input>

<button type="submit">🔎</button>
</form>
</>
    )
}