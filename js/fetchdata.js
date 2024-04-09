


    const url = 'https://api-football-v1.p.rapidapi.com/v3/players?team=529&league=140&season=2023&page=2';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af731bc557mshd9a9dfe2c0d7552p132b4djsnbd2ecc428ef8',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
  
    $fragmentPlayers = document.createDocumentFragment();

    fetch(url,options)
    .then(response => response.json())
    .then(res => {
        console.log(res)

    res.response.forEach(el => {
        const $players = document.getElementById("get");
        const $card = document.createElement("div");
        $card.classList.add('card');

        const $imageContainer = document.createElement("div");
        $imageContainer.classList.add('card-img');
        
        const $pDataContainer = document.createElement("div");
        $pDataContainer.classList.add('player-data');

        const $titleElement = document.createElement("h2");
        const $imageElement = document.createElement("img");
        const $ageElement = document.createElement("p")
        const $natElement = document.createElement("p")
        const $statsContainer = document.createElement("div")
        $statsContainer.classList.add('stats');
        const $posElement = document.createElement("p")
        const $appereanceElement = document.createElement("p")
        const $goalsElement = document.createElement("p")
        const $passElement = document.createElement("p")
        const $teamElement = document.createElement("p");
        const $logoElement = document.createElement("img");
        $logoElement.classList.add('logo');

        $titleElement.innerHTML= el.player.name;
        $imageElement.src = `${el.player.photo}`;
        $ageElement.innerHTML=`Age: ${el.player.age}`;
        $natElement.innerHTML=`Nationality: ${el.player.nationality}`;
        $posElement.innerHTML=`Position: ${el.statistics[0].games.position}`;
        $appereanceElement.innerHTML=`Appereances: ${el.statistics[0].games.appearences}`;
        $goalsElement.innerHTML=`Goals: ${el.statistics[0].goals.total}`;
        $passElement.innerHTML=`Key Passes: ${el.statistics[0].passes.key || '0'}`;
        $teamElement.innerHTML = `Team: ${el.statistics[0].team.name}`;
        $logoElement.src = `${el.statistics[0].team.logo}`;


//statitics
//position
//games
//goals
//asists
        
          $imageContainer.appendChild($imageElement);
          $card.appendChild($imageContainer);
         
          $pDataContainer.appendChild($titleElement);
          $pDataContainer.appendChild($natElement);
          $pDataContainer.appendChild($logoElement);
          $card.appendChild($pDataContainer);

          $statsContainer.appendChild($ageElement);
          $statsContainer.appendChild($posElement);
          $statsContainer.appendChild($appereanceElement);
          $statsContainer.appendChild($goalsElement);
          $statsContainer.appendChild($passElement);
        
          $card.appendChild($statsContainer);
     


     $fragmentPlayers.appendChild($card);
        $players.appendChild($fragmentPlayers);
         });
    } )
    

    $fragmentMatches = document.createDocumentFragment();
    const urlSeason = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=140&season=2023&team=529&from=2023-09-28&to=2024-05-31';
    const optionsSeason = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'af731bc557mshd9a9dfe2c0d7552p132b4djsnbd2ecc428ef8',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    try {
        fetch(urlSeason,optionsSeason)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            res.response.forEach(el => {
                const $matches = document.getElementById("matches");
       
                const $goalsElement = document.createElement("div");

                const $dateElement = document.createElement("p");
                const $leagueElement = document.createElement("p");

                const $homeElement = document.createElement("h2");
                const $awayElement = document.createElement("h2");
                const $spaceElement = document.createElement("h1");

                const $homeimgElement = document.createElement("img");
                const $awayimgElement = document.createElement("img");


                $goalsElement.classList.add('goals');
              
                $homeimgElement.classList.add('home');
                $awayimgElement.classList.add('away');

                $dateElement.innerHTML= el.fixture.date.substring(0,10);
                $leagueElement.innerHTML= el.league.name;

                $homeElement.innerHTML= el.goals.home || `0`;
                $awayElement.innerHTML= el.goals.away || `0`;
                $spaceElement.innerHTML=` - `;

                $homeimgElement.src = `${el.teams.home.logo}`;
                $awayimgElement.src = `${el.teams.away.logo}`;



                $goalsElement.appendChild($dateElement);
                $goalsElement.appendChild($leagueElement);

                $goalsElement.appendChild($homeimgElement)
                $goalsElement.appendChild($homeElement);
                $goalsElement.appendChild($spaceElement);
                $goalsElement.appendChild($awayElement);
                $goalsElement.appendChild($awayimgElement)

                $matches.appendChild($fragmentMatches)
             
                $matches.appendChild($goalsElement)
            
         


             
            })}  )
    } catch (error) {
        console.error(error);
    }