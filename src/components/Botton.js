
export const Btn_scroll = ({icon, style, onPress=()=>{}}) => {
            return <button href='#' onClick={onPress} className={style}>{icon}</button>
}

// export const Botton = ({title, color, target, toggle, link}) => {
//       return <botton className={`btn btn-sm ${color}`} data-bs-toggle={toggle} data-bs-target={target}>{title?title:<FaPen/>}</botton> 
// }

export const Btn_group = ({title, color, icon, toggle, target, disabled , onPress=()=>{}}) => {
      return <button disabled={disabled} onClick={onPress} className={`btn btn-sm ${color} me-2`} data-bs-toggle={toggle} data-bs-target={target}>{ title? title : icon }</button>
}

export const Btn_text = ({title, link}) => {
      return <a  href={link} >{title}</a>
}

export const Btn_close = ({icon, id, style, title}) => {
      return <button id={id} className={style ? style:`btn-close btn-primary`} style={{ backgroundColor: 'red'}} data-bs-dismiss="modal" aria-label="Close">{ title? title : icon }</button>
}

export const Checkbox = ({id, lable}) => {
      return  <div className="form-check">
                  <input className="form-check-input" type="checkbox" id={id} />
                  <label className="form-check-label">
                        {lable}
                  </label>
              </div>
}

export const Accordion = ({title, styles, index, type, toggle, expanded}) => {  
      return <button className={styles} type={type} data-bs-toggle={toggle} data-bs-target={`#${index}`} aria-expanded={expanded} aria-controls={index}>
                  {title}
            </button>  
}
