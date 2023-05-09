import { userpost } from "../mockdata"
import { Btn_group } from "./Botton"
import { CardList } from "./Card"

export const Modal = ({item, url, btn, cre}) => {
       const content = (
             <>
                   <Btn_group title={''} color={''} toggle={'modal'} target={`#${'klkjl'}`}/>
                   <div className="modal" id={'klkjl'} data-bs-backdrop={'klkjl'} data-bs-keyboard={false} tabIndex={-1} aria-labelledby={'klkjl'} aria-hidden={true}>
                   <div className="modal-dialog modal-lg">
                   {userpost.map((user, i)=>{
                        return <CardList key={i} item={user}/>
                   })}
                   </div>
                   </div>
             </>
       )
       return content
 }