import styled from 'styled-components'
import { User } from "./StatsTracker";

interface UserModalProps  {
    visible: boolean;
    user: User;
    onClose: () => void;

}


const Overlay = styled.div`
 width: 100%;
 height: 100vh;
 background: #131a24;
 position: fixed;
top: 0;
left:0;
z-index: 10;
background-color: rgba(0,0,0,0.8);
backdrop-filter: blur(4.5px);
display: flex;
justify-content: center;
align-items: center;
cursor: default;
`

const ModalBody = styled.div`
background: #FFFFFF;
border-radius: 8px;
width: 30rem;
padding: 32px;

 h1 {
    color: red;
 }
`


export const UserModal = ({visible, user, onClose}: UserModalProps) => {
    return(
       <Overlay>
        <ModalBody>
           <h1>Duzzera stats</h1>
           <strong>K/D</strong><br/>
           <span>{user.lifetime.mode.br.properties.kdRatio}</span>

        </ModalBody>
       </Overlay>
    )
}