
import React, {useState, useEffect} from "react";

import { renderUser } from "../services";
import userIcon from '../assets/user.png'

const TableContainer  = () => {

  return(
      <>
      <h1>Acesse suas estatísticas no Warzone!</h1>
      
      </>
  )
}


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

  const [gamertag, setGamertag] = useState<User>("");
  const [platform, setPlatform] = useState<Platform>("");
  const [userStats, setUserStats] = useState<User>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
        const response = await renderUser( gamertag, platform );
        setUserStats(response)
        console.log(response)
       
        
    } catch (error) {
        console.log(error)
        alert("Opa! Deu algo errado!");
    }
};

    return(
      <>
      <TableContainer/>
      
<form onSubmit={handleSubmit}>

<input type="text" placeholder="Digite sua gamertag" value={gamertag} onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setGamertag(event.target.value)}></input>
<input type="text" placeholder= "Digite sua plataforma" value={platform}  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPlatform(event.target.value)}></input>

<button type="submit">🔎</button>
</form>
<strong>
   <img width={20} height={20}src={userIcon}/>
{userStats.username}</strong>

</>
    )
}