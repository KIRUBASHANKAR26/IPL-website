////----------hidden search----------------------------
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
/////////-----------End-hidden-search------------
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
const teamName = document.getElementById("team-name")
const cardGrid = document.querySelector(".card-grid");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    updateLS(teamName.value)
})

/* <div class="card">
    <a href="./teams/delhi/index.html"><img src="./images/Delhi.jpg" alt="Delhi"></a>
    <p>DELHI CAPITALS</p>
</div> */

function createTeam (teamName,url){
    
    var card = document.createElement("div");
    card.classList.add("card")

    card.innerHTML = `
        <img src=${url} alt="Delhi">
        <p>${teamName}</p>`

    cardGrid.appendChild(card)
}

const updateLS = (teamName) => {

    var obj = {
        name: teamName,
        imageUrl: "https://i.stack.imgur.com/y9DpT.jpg",
    }

    var teamList = localStorage.getItem('t-list') === null ? [] : JSON.parse(localStorage.getItem('t-list'));
    teamList.push(obj);
    localStorage.setItem("t-list", JSON.stringify(teamList));
    loadDataLS();
    console.log(teamList)
    
}


function loadDataLS(){
    const playerDataGet = JSON.parse(localStorage.getItem("t-list"));

    if(playerDataGet) {
        playerDataGet.forEach(item => createTeam (item.name,item.imageUrl))
    }
}
loadDataLS()

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", () => {
    const inputValue = searchInput.value.toUpperCase();
    console.log(inputValue)
    var nameTags = document.querySelectorAll(".card p")
    console.log(nameTags);
    
    for (let i = 0; i < nameTags.length; i++) {

        var parent = nameTags[i].parentElement;
        const textValue = nameTags[i].innerText;
        parent.style.display = textValue.toUpperCase().includes(inputValue) ? '' : 'none' ;
        
    }
})
