////----------hidden search----------------------------
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
/////////-----------End-hidden-search------------

const cskplayers = [{
    id: 1,
    name: "Shubman Gill",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c171042/shubman-gill.jpg",
    birthPlace: "Pune Maharashtra",
    born:"Jan 31, 1997 (24 years)",
    role: "Batsman",
    battingStyle:"Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 2,
    name: "Rinku-singh",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c187877/rinku-singh.jpg",
    birthPlace: " Andhra Pradesh",
    born:" Sep 23, 1985 (35 years) ",
    role: "Batsman",
    battingStyle:"Batsman",
    bowlingStyle:"Right-arm offbreak "
},{
    id: 3,
    name: "Nitish Rana",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c171047/nitish-rana.jpg",
    birthPlace: "Pretoria ",
    born:"Jul 13 , 1984 (36 years)",
    role: "Batsman",
    battingStyle:"Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 4,
    name: "Eoin-morgan",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170936/eoin-morgan.jpg",
    birthPlace: "Uttar Pradesh ",
    born:"Nov 27, 1986 (34 years) ",
    role: "Batsman",
    battingStyle:"Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 5,
    name: "Karun Nair",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c152760/karun-nair.jpg.jpg",
    birthPlace: " Gujarat ",
    born:"Jan 25, 1988 (33 years)",
    role: "Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 6,
    name: "Shakib-al-hasan",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170912/shakib-al-hasan.jpg",
    birthPlace: "Trinidad",
    born:"Oct 07, 1983 (37 years)",
    role: "BatsmanAllrounder",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 7,
    name: "Andre-russell",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170821/andre-russell.jpg",
    birthPlace: "Birmingham",
    born:"Jun 18, 1987 (33 years)",
    role: "Batting All rounder",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 8,
    name: "Shivam Mavi",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c155147/shivam-mavi.jpg",
    birthPlace: "Saurashtra",
    born:"Dec 06, 1988 (32 years)",
    role: "BattingAllrounder",
    battingStyle:"left-Batsman",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 9,
    name: "Ben-cutting",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c171073/ben-cutting.jpg",
    birthPlace: "Hamilton",
    born:"Jan 31, 1997 (24 years)",
    role: "BowlingAllrounder",
    battingStyle:"left-Batsman",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 10,
    name: "Pawan Negi",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c153913/pawan-negi.jpg",
    birthPlace: "England",
    born:"Jan 31, 1997 (23 years)",
    role: "Bowling Allrounder",
    battingStyle:"Left Handed Bat",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 11,
    name: "MS DHONI",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170677/ms-dhoni.jpg",
    birthPlace: "Ranchi",
    born:"Jul 07, 1981 (37 years)",
    role: "Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 12,
    name: "Dinesh Karthick",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170680/dinesh-karthik.jpg",
    birthPlace: "Chennai",
    born:"Mar 27, 1979 (42 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 13,
    name: "Sunil narine",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c152654/sunil-narine.jpg",
    birthPlace: "Uttar Pradesh",
    born:"Aug 07,1992(28 years)",
    role: "Bowler",
    battingStyle:"Right-batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 14,
    name: "Prasidh krishna",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c167341/prasidh-krishna.jpg",
    birthPlace: "Natal",
    born:"Mar 29,1996 (25 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm fast "
},
{
    id: 15,
    name: "Kuldeep-yadav",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170683/kuldeep-yadav.jpg",
    birthPlace: "Maharashtra",
    born:"Oct 16, 1991 (29 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm fast "
},
{
    id: 16,
    name: "Varun chakravarthy",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c196703/varun-chakravarthy.jpg",
    birthPlace: "Maharashtra",
    born:"Oct 16, 1991 (29 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm fast "
},
{
    id: 17,
    name: "Pat-cummins",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170651/pat-cummins.jpg",
    birthPlace: "Maharashtra",
    born:"Oct 16, 1991 (29 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm fast "
}
]


const teamPlayer = document.querySelector(".team-player");



let players = (id,name,url,birthPlace,born,role,battingStyle,bowlingStyle) => {
   
    var playerCard = document.createElement("div")
    playerCard.classList.add("player-card");
    playerCard.setAttribute("id",id);
    playerCard.innerHTML = `
    <img src=${url} alt="${name} ">
        
            <p>Name:<span>${name} </span></p>
            <a href = "/playerprofile/index.html">
            <p>BirthPlace:<span>${birthPlace} </span></p>
            <p>Born:<span>${born} </span></p>
            <p>Role:<span>${role} </span></p>
            <p>BattingStyle:<span>${battingStyle} </span></p>
            <p>bowlingStyle:<span>${bowlingStyle} </span></p></a>
        `
    
    teamPlayer.appendChild(playerCard);
}
cskplayers.forEach(item => {
    
    players(item.id,item.name,item.imageUrl,item.birthPlace,item.born,item.role,item.battingStyle,item.bowlingStyle)
    
})
const popModal = document.getElementById("pop-modal")
const addPlayer = document.getElementById("add-player");
const closeModal = document.getElementById("close")

addPlayer.addEventListener("click", () => {
    popModal.classList.add("active");
})

closeModal.addEventListener("click", () => {
    popModal.classList.remove("active");
})

const form = document.getElementById("wrapper")
const playerName = document.getElementById("player-name")
const playerPlace = document.getElementById("player-place");
const playerBirth = document.getElementById("player-birth");
const playerRole = document.getElementById("player-role");
const playerBattingsty = document.getElementById("player-batting-sty");
const playerBowlingsty = document.getElementById("player-bowling-sty");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    updateLS(playerName.value,playerPlace.value,playerBirth.value,playerRole.value,playerBattingsty.value,playerBowlingsty.value)
})

const updateLS = (name,place,birth,role,battingstyle,bowlingstyle) => {

    console.log(name,place,birth,role,battingstyle,bowlingstyle)
    var obj = {
        name: name,
        imageUrl: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png",
        birthPlace: place,
        born:birth,
        role: role,
        battingStyle: battingstyle,
        bowlingStyle:bowlingstyle
    }

    var playerList = localStorage.getItem('kkr-p-list') === null ? [] : JSON.parse(localStorage.getItem('kkr-p-list'));
    playerList.push(obj);
    localStorage.setItem("kkr-p-list", JSON.stringify(playerList));
    loadDataLS();
    console.log(playerList)
    
}


function loadDataLS(){
    const playerDataGet = JSON.parse(localStorage.getItem("kkr-p-list"));

    if(playerDataGet) {
        playerDataGet.forEach(item => players(item.id,item.name,item.imageUrl,item.birthPlace,item.born,item.role,item.battingStyle,item.bowlingStyle))
    }
}
loadDataLS()

const searchInput = document.getElementById("search-input");


searchInput.addEventListener("keyup", () => {
    const inputValue = searchInput.value.toUpperCase();
    console.log(inputValue)
    var nameTags = document.querySelectorAll(".player-card p:nth-child(2)")
    console.log(nameTags);
    
    for (let i = 0; i < nameTags.length; i++) {

        var parent = nameTags[i].parentElement;
        const textValue = nameTags[i].innerText;
        parent.style.display = textValue.toUpperCase().includes(inputValue) ? '' : 'none' ;
        
    }
})
const playerCards = document.querySelectorAll(".player-card")

playerCards.forEach((item,index) => {
    item.addEventListener("mousedown", () => {
 
        localStorage.setItem('playerProfile', JSON.stringify(cskplayers[index]))
    
    })
})
