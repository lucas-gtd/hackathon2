const mainDiv = document.getElementById('mainDiv')

const card = document.createElement('div')
card.innerHTML = `
<div class="header">
           <div class="icon">
           <a href="#"><i class="fa fa-heart-o"></i></a>
           </div>
        </div>
        <div class="text">
           <h1 class="food">
            conception 
           </h1>

           <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus.</p>
    <label for="start">Start date:</label>
    <div id="date" >



    <input type="date" id="start" name="trip-start"
           value="2021-06-29"
           min="2018-01-01" max="2118-12-31">

        </div>
        <a href="#" class="btn">book a date!</a>

     </div>
`

mainDiv.appendChild(card)

const getFreelancers = () => {
    return [
        {
            name: 'Alex',
            job: 'Ebeniste',
            desc: "salut, c'est Alex, tu veux que je taille ton bout de bois ?", 
        },
        {
            name: 'Rango',
            job: 'Developpeur',
            desc: "Je suis apte à développer votre application !", 
        },
        {
            name: 'David',
            job: 'Photographe',
            desc: "J'adore la photo, vous ne serez pas déç des clichés que je peux produire !", 
        },
        {
            name: 'Jean Pierre',
            job: 'Doubleur',
            desc: "salut, c'est Jean Pierre", 
        },
        {
            name: 'Tufik',
            job: 'Mastering / Mixage',
            desc: "Le son, le mastering et le mmixage en studio n'a plus aucun secret pour moi", 
        },
        {
            name: 'Rachid',
            job: 'Coach sportif',
            desc: "Je vous accompagnerai dans vos projets sportifs et vous guiderai !", 
        }
    ]
}