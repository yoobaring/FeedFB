
import React, { useState } from 'react'
import { FaEllipsisH, FaHistory, FaLinkedin, FaStaylinked, FaYoutube } from 'react-icons/fa';
import { BiBookOpen, BiComment, BiImage, BiLike, BiVideo, BiVideoPlus } from 'react-icons/bi';
import { TbShare3 } from 'react-icons/tb';
import { Carousel } from 'bootstrap';
import { MdOutlineEmojiEmotions } from 'react-icons/md'



export const Card = ({item, label}) => { 
            const {icon, lable} = label;
            const content = (
                     <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className='fa fa-3x text-primary'>{icon}</i>
                            <div className="ms-3">
                            <p className="mb-2">{lable}</p>
                            <h6 className="mb-0">{item}</h6> 
                            </div>
                        </div>
                     </div>  
            ) 
            return content    
}


export const CardPost = ({item}) => { 
    const {lable, name, massages, time, img} = item
    const content = (
        <>
        <div className=" bg-secondary rounded p-4 mt-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center py-3">
        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
        <div className="w-100 ms-3">
              <div className="justify-content-between">
              <h6 className="mb-0">{lable}</h6>
              </div>
              <small>{name}. {time}.</small>
        </div>
        </div>
              <div style={{marginTop: '-50px'}}><a href=''><FaEllipsisH/></a></div>
        </div>
        <div className="border bg-white rounded p-4 pb-0 mt-4">
        <figure className="text-center">
        <img src={img} style={{maxWidth: '60%', maxHeight: '50%'}} />
              <blockquote className="blockquote">
              <p>{massages}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
        </figure>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
        <div className="d-flex w-100 justify-content-between">
                <small className="mb-0">😆😆 2.6 พัน</small>
                <small>ความคิดเห็น 200 รายการ แชร์ 3 ครั้ง</small>
        </div>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
        <div className="d-flex w-100 justify-content-between">
                <a href><small className="mb-0"><BiLike/> ถูกใจ</small></a>
                <a href><small className="mb-0"><BiComment/> แสดงความคิดเห็น</small></a>
                <a href><small><TbShare3/> แชร์</small></a>
        </div>
        </div>
        </div>
        </>
    ) 
    return content    
}

export const CardList = ({item}) => { 
     const {lable, name, massages, time, img} = item
     const content = (
         <>
                                          <div className="d-flex align-items-center border-bottom py-3">
                                          <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                                          <div className="w-100 ms-3">
                                                <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0">{name}</h6>
                                                <small>{time}</small>
                                                </div>
                                                <span>{lable}</span>
                                          </div>
                                          </div>
         </>
     ) 
     return content    
 }

 export const CardPostStory= ({item}) => { 
    // const {lable, name, massages, time, img} = item
    const content = (
        <div className=" bg-secondary rounded p-4 mt-4 mb-4">
                <div className="d-flex align-items-center border-bottom py-3">
                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt style={{width: 40, height: 40}} />
                <div className="w-100 ms-3">
                   <input type="email" placeholder='คุณคิดอะไรอยู่ ' className="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp"/>
                </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
               <div className="d-flex w-100 justify-content-between">
                       <a href><small className="mb-0"><BiVideo color='red' size={20}/> วิดีโอถ่ายทอดสด</small></a>
                       <a href><small className="mb-0"><BiImage color='green' size={20}/> รูปภาพ/วิดีโอ</small></a>
                       <a href><small><MdOutlineEmojiEmotions color='yellow' size={20}/> ความรู้สึก/กิจกรรม</small></a>
               </div>
               </div>
        </div>
    ) 
    return content    
}




 export const CardStory = ({item}) => { 
    // const {lable, name, massages, time, img} = item
    const content = (
        <>
            <div className="col-sm-12 col-md-12 col-xl-12">
            <div className="bg-secondary rounded h-100 p-4 ">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><BiBookOpen/> สตอรี่</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FaYoutube/> Reels</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><BiVideoPlus/> ห้อง</button>
                </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                Invidunt rebum voluptua lorem eirmod dolore. Amet no sed sanctus lorem ea. Nonumy sit stet sit magna. Rebum rebum ipsum clita erat consetetur, sit dolor sit clita et amet. Est et clita dolore takimata, sea dolores tempor erat consetetur lorem. Consetetur sea sadipscing dolor et dolores et stet, tempor elitr.
               </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    Invidunt rebum voluptua lorem eirmod dolore. Amet no sed sanctus lorem ea. Nonumy sit stet sit magna. Rebum rebum ipsum clita erat consetetur, sit dolor sit clita et amet. Est et clita dolore takimata, sea dolores tempor erat consetetur lorem. Consetetur sea sadipscing dolor et dolores et stet, tempor elitr.
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    Et diam et est sed vero ipsum voluptua dolor et, sit eos justo ipsum no ipsum amet sed aliquyam dolore, ut ipsum sanctus et consetetur. Sit ea sit clita lorem ea gubergren. Et dolore vero sanctus voluptua ipsum sadipscing amet at. Et sed dolore voluptua dolor eos tempor, erat amet.
                </div>
                </div>
            </div>
            </div>

        </>
    ) 
    return content    
}



