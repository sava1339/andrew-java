import './App.css'
import React from 'react'
import photo from './assets/photo.webp'
import slideDown from './assets/slide-down.svg'
import slideUp from './assets/slide-up.svg'
import expWorkLogo from './assets/expWorkLogo.svg'
import decOne from './assets/dec-one.svg'
import decThree from './assets/dec-three.svg'
import decTwo from './assets/dec-two.svg'
import {useEffect, useState} from "react";
import { httpURL } from './http/http'

interface portfolio {
    id:number,
    name:string,
    desc:string,
    stack:string,
    img:string,
    url:string
}

function App() {
    const [loading,setLoading] = useState(true)
    console.log(window.innerWidth)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },300)
       
    },[])
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(el=>{
                if(el.isIntersecting){
                    el.target.classList.add('show')
                }else{
                    el.target.classList.remove('show')
                }
            })
        })
        const hiddenObjs = document.querySelectorAll('.hidden');
        hiddenObjs.forEach(el=>observer.observe(el))
    },[loading])
    const portfolioList:portfolio[] = [
        {
            id:0,
            name:"Проект",
            desc: "Приятно, граждане, наблюдать, как ключевые особенности структуры проекта" ,
            stack:"Java, Spark, JHipster",
            img:"image.jpg",
            url:"https://fonts.google.com/specimen/Roboto"
        },
        {
            id:1,
            name:"Проект 2",
            desc: "Lorem ipsum dolor, sit amet elit. Iste, harum! Lorem ipsum dolor, sit amet elit. Iste, harum! Lorem ipsum dolor, sit amet elit. Iste, harum! Lorem ipsum dolor, sit amet elit. Iste, harum!" ,
            stack:"Java, Spark, JHipster, Apache",
            img:"image-second.jpg",
            url:"https://fonts.google.com/specimen/Roboto"
        },
        {
            id:2,
            name:"Проект 3",
            desc: "Приятно, граждане, наблюдать, как ключевые особенности структуры проекта" ,
            stack:"Java, Spark",
            img:"image-second.jpg",
            url:"https://fonts.google.com/specimen/Roboto"
        }
    ]
    return (
    <div>
        {loading ? <div className="lds-ring">
                <div></div>
                <div></div>
            </div>
            :
            <div className="business-card" >
                <div className="first-page">
                    <img src={decOne} className="top-dec top-dec-one" alt=""/>
                    <img src={decTwo} className="top-dec top-dec-two" alt=""/>
                    <img src={decThree} className="top-dec top-dec-three"  alt=""/>
                    <div className="main-content">
                        <div className="work-title">
                            <h1 className="work-title-jun">Junior Java</h1>
                            <h1 className="work-title-dev">Developer</h1>
                        </div>
                        <div className="photo">
                            <img className="main-photo" src={httpURL + "photo.webp"} alt=""/>
                            <div className="text-content">
                                <h2 className="text-name robo-slab">Андрей Дремковым</h2>
                                <p className="text-desc">Приятно, граждане, наблюдать, как ключевые особенности структуры проекта превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={()=> document.querySelector('.portfolio-title')?.scrollIntoView({
                        block: 'start',
                        inline: 'nearest',
                        behavior: 'smooth'
                    }) } className="slide-down">
                        <img src={slideDown} alt=""/>
                    </div>
                </div>
                <div className="dec-block">
                    <div className="dec" id="dec-one"></div>
                    <div className="dec" id="dec-two"></div>
                    <div className="dec" id="dec-three"></div>
                </div>
                <div className="back-color">
                    <div className="second-page">
                        <div onClick={()=> document.querySelector('.slide-down')?.scrollIntoView({
                            block: 'end',
                            inline: 'nearest',
                            behavior: 'smooth'
                        }) } className="slide-up">
                            <img src={slideUp} alt=""/>
                        </div>
                        <div className="portfolio">
                            <p className='portfolio-title'>Портфолио</p>
                            <div className="portfolio-list hidden">
                                {portfolioList.map((el:portfolio)=>
                                <div key={el.id} className="portfolio-item">
                                    <div style={{background:`url(${httpURL}${el.img})`}} className="portfolio-item-image"></div>
                                    <div className="portfolio-item-back-image black"></div>
                                    <div style={{background:`url(${httpURL}${el.img})`}} className="portfolio-item-back-image"></div>
                                    
                                    <p className="portfolio-item-name">{el.name}</p>
                                    <p className="portfolio-item-desc">{el.desc}</p>
                                    <p className="portfolio-item-stack">{el.stack}</p>
                                    <a href={el.url} target='_black' className="portfolio-item-url">{el.url}</a>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="work-experience hidden">
                            <div className="logo">
                                <img src={expWorkLogo} alt=""/>
                            </div>
                            <div className="text-block ">
                                <h1>Опыт работы</h1>
                                <p>Следует отметить, что понимание сути ресурсосберегающих технологий в значительной степени обусловливает важность укрепления моральных ценностей. Господа, курс на социально-ориентированный национальный проект предполагает независимые способы реализации прогресса</p>
                                <p className='experience-time'>Продолжительность: 1 год</p>
                            </div>
                        </div>
                        <div className="contacts-block hidden">
                            <p className="robo-slab contact-prew">Контакты</p>
                            <div className="contacts">
                                <p>Почта: promer1111@gmail.com</p>
                                <p>Тел: +7 999 999 9999</p>
                            </div>
                        </div>
                        <div className="absolute-dec">

                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default App
