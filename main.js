"use strict";

import data from './data.json' assert {type: 'json'} ;
import dataColor from './dataColor.json' assert {type: 'json'};

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector("#daily")
let weeklyBtn = document.querySelector("#weekly")
let monthlyBtn = document.querySelector("#monthly")

let sSection = document.querySelector(".second-section")

dailyBtn.addEventListener('click', ()=>{
    activeSel(dailyBtn, weeklyBtn, monthlyBtn)
    loadCard(dailyArray);
})

weeklyBtn.addEventListener('click', ()=>{
    activeSel(weeklyBtn, monthlyBtn, dailyBtn)
    loadCard(weeklyArray);
})

monthlyBtn.addEventListener('click', ()=>{
    activeSel(monthlyBtn, weeklyBtn, dailyBtn)
    loadCard(monthlyyArray);
})


const loadCard = (array) =>{
    sSection.innerHTML = "";
    array.forEach((e, index) => {
        sSection.innerHTML += 
        `<div class="card">
            <div class="card__backgroudn" style="background-color: ${dataColor[index].color}">
                <img class="card__image" src="${dataColor[index].icon}" alt="">
            </div>
            <div class="card__details">
                <div class="card__activity">
                    <p class="card__title">${data[index].title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="three dots">
                </div>
                <div class="card__time">
                    <p class="card__hour">${e.current}hrs</p>
                    <p class="card__previous">Previous - ${e.previous}hrs</p>
                </div>
            </div>
      </div>`
    })
};

const activeSel = (sel, nonsel, nonsel2)=>{
    sel.classList.add('main-card__frecuency--active');
    nonsel.classList.remove('main-card__frecuency--active');
    nonsel2.classList.remove('main-card__frecuency--active');    
}