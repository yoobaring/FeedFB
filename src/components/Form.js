import { FaSearch } from "react-icons/fa"
import { Btn_group } from "./Botton"
import { useState } from "react";

export const Search = ({ onChange=()=>{} }) => {

      const content = (
                  <td>
                  <div className="d-none d-md-flex ms-4">
                  <input 
                        className="form-control bg-dark border-0" 
                        type="search" 
                        placeholder="Search"
                        onChange={(e) => onChange(e)} 
                  />
                  <Btn_group icon={<FaSearch size={25} />}/>
                  </div>
                  </td>
      ) 
      return content 
}

export const Forminput = ({label, item, value, onChange =()=> { }}) => { 
      const { type, size } = item

    const textarea = (value) => {
                  if(value != undefined){
                  let str = value.split('<br>')
                        return str
                  }
                  else{
                        return ''
                  }
      }
      const content = (
                        <div className="mb-3">
                              <label className="form-label">{label}</label>
                              {size == 'small' ? <input 
                                                      type={type} 
                                                      className="form-control" 
                                                      defaultValue={value}
                                                     // value={value}
                                                      onChange={(e)=> 
                                                            onChange(e)
                                                      }           
                                                      />
                                    : <textarea className="form-control" 
                                          style={{height: 150}} 
                                          defaultValue={textarea(value)}
                                          //value={textarea(value)}
                                          onChange={(e)=> onChange(e)} 
                                          />}
                        </div>
      )
      return content 
}

export const Form = (item) => { 
      const { lable, value } = item.item
      const content = (
                        <div className="row mb-0">
                              <label className="col-sm-5 col-form-label">{lable}</label>
                              <div className="col-sm-7">
                                    <h6 className="form-control">{value}</h6>
                              </div>
                        </div>
      )
      return content 
}






