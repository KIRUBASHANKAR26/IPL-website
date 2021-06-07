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
    name: "Shikhar Dhawan",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170660/shikhar-dhawan.jpg",
    birthPlace: "Delhi",
    born:"Dec 05, 1985 (35 years)",
    role: "Batsman",
    battingStyle:"Left-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 2,
    name: "Prithvi Shaw",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171030/prithvi-shaw.jpg",
    birthPlace: " Maharashtra",
    born:" Nov 09, 1999 (21 years) ",
    role: "Batsman",
    battingStyle:"right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},{
    id: 3,
    name: "Ajinkya Rahane",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171082/ajinkya-rahane.jpg",
    birthPlace: "Maharashtra",
    born:"Jul 13 , 1988 (33 years)",
    role: "Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 4,
    name: "Shimron Hetmyer",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c171232/shimron-hetmyer.jpg",
    birthPlace: "Guyana",
    born:"Nov 27, 1986 (34 years) ",
    role: "Batsman",
    battingStyle:"Left-Batsman",
    bowlingStyle:"Right-arm offbreak"
},
{
    id: 5,
    name: "Marcus Stoinis",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c176605/marcus-stoinis.jpg",
    birthPlace: "Austrilia",
    born:"Jan 25, 1988 (33 years)",
    role: "Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 6,
    name: "Rishabh Pant",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c171010/rishabh-pant.jpg",
    birthPlace: "Uttarakhand",
    born:"Oct 07, 1997 (23 years)",
    role: "WK-Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 7,
    name: "Sam Billings",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c156173/sam-billings.jpg",
    birthPlace: "Birmingham",
    born:"Jun 18, 1987 (33 years)",
    role: "Batting All rounder",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 8,
    name: "Axar patel",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c153416/axar-patel.jpg",
    birthPlace: "Saurashtra",
    born:"Dec 06, 1988 (32 years)",
    role: "BattingAllrounder",
    battingStyle:"left-Batsman",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 9,
    name: "Ravichandran Aswin",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c153372/ravichandran-ashwin.jpg",
    birthPlace: "Chennai",
    born:"Jan 31, 1997 (24 years)",
    role: "BowlingAllrounder",
    battingStyle:"left-Batsman",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 10,
    name: "Chris Woaker",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170964/chris-woakes.jpg",
    birthPlace: "England",
    born:"Jan 31, 1997 (23 years)",
    role: "Bowling Allrounder",
    battingStyle:"Left Handed Bat",
    bowlingStyle:"left-arm offbreak "
},
{
    id: 11,
    name: "Tom curran",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170967/tom-curran.jpg",
    birthPlace: "England",
    born:"Jul 07, 1981 (37 years)",
    role: "Batsman",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 12,
    name: "Praveen-dubey",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c195872/praveen-dubey.jpg",
    birthPlace: "Punjab",
    born:"Mar 27, 1979 (42 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 13,
    name: "Umesh-yadav",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c153874/umesh-yadav.jpg",
    birthPlace: "Uttar Pradesh",
    born:"Aug 07,1992(28 years)",
    role: "Bowler",
    battingStyle:"Right-batsman",
    bowlingStyle:"Right-arm offbreak "
},
{
    id: 14,
    name: "Ishant Sharma",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c154520/ishant-sharma.jpg",
    birthPlace: "Natal",
    born:"Mar 29,1996 (25 years)",
    role: "Bowler",
    battingStyle:"Right-Batsman",
    bowlingStyle:"Right-arm fast "
},
{
    id: 15,
    name: "Kagiso-rabada",
    imageUrl: "https://www.cricbuzz.com/a/img/v1/75x75/i1/c170759/kagiso-rabada.jpg",
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
            <a href="/playerprofile/index.html">
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

//////////////------pop-modal-add-player-------

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

    var playerList = localStorage.getItem('delhi-p-list') === null ? [] : JSON.parse(localStorage.getItem('delhi-p-list'));
    playerList.push(obj);
    localStorage.setItem("delhi-p-list", JSON.stringify(playerList));
    loadDataLS();
    console.log(playerList)
    
}


function loadDataLS(){
    const playerDataGet = JSON.parse(localStorage.getItem("delhi-p-list"));

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