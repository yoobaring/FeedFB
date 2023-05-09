import React, { Component, useEffect, useState } from 'react';
import { Card, CardList, CardPost, CardPostStory, CardStory } from "../../components/Card"
import { Header, Navbar } from "../../components/Header"
import { data_, userpost} from "../../mockdata"
import { Btn_scroll } from '../../components/Botton'
import { FiArrowUp } from "react-icons/fi"
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Calendar } from '../../components/Date';
import Loading from '../../components/Loading';

const Dashboard = () => {
         const [search, setSearch] = useState('')
         const [filteredUsers, setFilteredUsers] = useState([]);
         const [isLoading, setIsLoading] = useState(false)
         const { pathname } = useLocation()
         const [isOpen, setIsopen] = useState(false);
         const toggleSidebar = () => {
               setIsopen(!isOpen);
         };

         useEffect(() => {
            setTimeout(() => {
                  setIsLoading(true)
                }, 500);
          }, [search])
   
          const data = filteredUsers.length > 0 ? filteredUsers : userpost;
          const handle =  () => {
                if (search !== '') {
                      const filtered = userpost.filter(e =>e.name.toLowerCase().includes(search.toLowerCase()));
                      setFilteredUsers(filtered);
                } else {
                      setFilteredUsers(userpost);
                }
          }

         if (!isLoading) {
            return <Loading />
         }
            return (
                        <div className="container-fluid position-relative d-flex p-0">
                        <div className={`content ${isOpen ? "open" : ""}`} >
                              <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0 justify-content-between">
                                    <div ><a className="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}><FaBars /></a>
                                    <Calendar/>
                                    </div>
                                    <Header
                                     onChange={(e) => {  setSearch(e.target.value.trim()); }} 
                                     handle={handle}
                                    />
                              </nav>
                              <div>
                                    <Navbar location={pathname} isOpen={isOpen}/>
                              </div>
                              <div className="container-fluid pt-4 px-4">
                                    <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 col-xl-8">
                                          <CardStory/>
                                          <CardPostStory/>
                                          {data.map((user, i)=>{
                                                      return <CardPost key={i} item={user}/>
                                          })}
                                    
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-xl-4">
                                    <div className="bg-secondary rounded p-4">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                          <h6 className="mb-0">Messages</h6>
                                          <a href=''>Show All</a>
                                          </div>
                                          {userpost.map((user, i)=>{
                                                      return <CardList key={i} item={user}/>
                                          })}
                                          </div>
                                    </div>
                                    </div>
                              </div>

                        </div> 
                              <Btn_scroll icon={<FiArrowUp/>} style={'btn btn-lg btn-primary btn-lg-square back-to-top'}/>
                        </div>
                  )

}
export default Dashboard 
