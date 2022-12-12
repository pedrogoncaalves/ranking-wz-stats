
import React, {useState, useEffect} from "react";
import options from "../services";
import axios from "axios";
import { renderUser } from "../services";


type User = {
  username: string;
  wins: number;
  kdRatio: number;

}


export const RankingTable = ({ username, wins, kdRatio}: User) => {

  const [user, setUser] = useState<User[]>([]);


  useEffect(() => {
         const getData = async () => {
           try {
                
                const response = await renderUser();
                setUser(response)

             } catch (error) {
                 console.log("Algo deu errado no Post" + error)
             }
         }
         getData();
     }, [setUser])

   /* axios.request(options).then(function (response) {
    
    const user = response.data.data?.username
    console.log(response.data.data);
    console.log(user)
}).catch(function (error) {
    console.error(error);
});
 */ 
    return(
        <table>
  <tr>
    <th>Username</th>
    <th>K.D</th>
    <th>Wins</th>
  </tr>
  <tr>
    <td>{user.u}</td>
    <td>Maria Anders</td>
    <td>Germany</td>
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