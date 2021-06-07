





function renderData(id,name,url,birthPlace,born,role,battingStyle,bowlingStyle){
    const playerProfile = document.getElementById("player-wrapper")

    let playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    playerCard.setAttribute("id",id);
    playerCard.innerHTML = `
    <img src=${url} alt="${name} ">
        
            <p>Name:<span>${name} </span></p>
            <p>BirthPlace:<span>${birthPlace} </span></p>
            <p>Born:<span>${born} </span></p>
            <p>Role:<span>${role} </span></p>
            <p>BattingStyle:<span>${battingStyle} </span></p>
            <p>bowlingStyle:<span>${bowlingStyle} </span></p>`
    
    playerProfile.appendChild(playerCard);
}

const playerData = JSON.parse(localStorage.getItem('playerProfile'))


console.log(playerData);
renderData(playerData.id,playerData.name,playerData.imageUrl,playerData.birthPlace,playerData.born,
    playerData.role,playerData.battingStyle,playerData.bowlingStyle);