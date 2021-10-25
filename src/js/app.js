const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

//EX01
document.querySelector("#ex01").textContent = 'done' 

//EX02
let myElement = document.querySelector(".ex02");
myElement.style.color = "#ff0000";
 
//EX03
document.querySelector('blockquote').textContent = 'Solen skiner idag' 

//EX04
let listnode = document.createElement('LI') 
let textnode = document.createTextNode('Milk')
listnode.appendChild(textnode)
document.getElementById("shopping-list").appendChild(listnode)

//EX05
let html = "<table border= '1|1'>"

html+='<thead>'
html+='<tr>'
html+='<td id ="headline">'+'Headline' +'</td>'
html+='<td>'+'Author' +'</td>'
html+='<td>'+'Link' +'</td>'
html+='<td id ="summary">'+'Summary' +'</td>'
html+='</tr>'
html+='<thead>'

for(var i = 0; i < news.length; i++){
    html+='<tr>';
    html+='<td id ="test2">'+news[i].headline+'</td>';
    html+='<td>'+news[i].author+'</td>';
    html+='<td>'+news[i].href+'</td>';
    html+='<td>'+news[i].summary+'</td>';
    html+='</tr>';
    
}
document.querySelector("#news").innerHTML = html
const green = document.querySelector("#headline")
green.style.color = 'green'
const blue = document.querySelector("#summary")
blue.style.color = 'blue'

//EX06
let clicks = document.querySelector('main')
let clickCounter =0

clicks.addEventListener("click", function(){
    clickCounter += 1
    console.log(clickCounter)
    document.querySelector("#click-counter").textContent = clickCounter
})

//EX07 
let button = document.querySelector('button')
let buttonClicks = 0

button.addEventListener("click", function(){
    buttonClicks +=1
    if(buttonClicks > 0){
        button.disabled= true 
    }
    
})

//EX08 
let svtLink = document.querySelector('#link-to-svt')

if (window.addEventListener){
    document.addEventListener('click', function (element){ //returns element on click
        if(element.target.id === svtLink.id){
            element.preventDefault(); //Prevents default behavior
        }
    })
}

//EX09 
document.querySelector("img[src]").src = "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" 
                                          



console.log('js loaded!')
