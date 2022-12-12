
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


  useEffect(() => {
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

   
    return(
        <table>
  <tr>
    <th>Username</th>
    <th>K.D</th>
    <th>Wins</th>
  </tr>
  <tr>
    <td>{user?.username}</td>
    <td>{user?.lifetime.mode.br.properties.kdRatio.toFixed(3)}</td>
    <td>KD alto</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
    )
}