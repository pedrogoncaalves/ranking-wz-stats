
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
        const response = await renderUser( user, platform );
        console.log(response)
       
        
    } catch (error) {
        console.log(error)
        alert("Opa! Deu algo errado!");
    }
};

    return(
      <>
      
      
<form onSubmit={handleSubmit}>

<input type="text" placeholder="Digite sua gamertag" value={user} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUser(event.target.value)}></input>
<input type="text" placeholder= "Digite sua plataforma" value={platform}  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPlatform(event.target.value)}></input>

<button type="submit">🔎</button>
</form>
</>
    )
}