$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });

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

const divList = document.getElementById('freelancers-list')

getFreelancers().forEach(freelancer => {
    const mainDiv = document.createElement('div')
    mainDiv.classList = 'col-md-4 col-sm-6 col-xs-12'
    mainDiv.innerHTML = `
    <article class="material-card Red">
                <h2>
                    <span>`+freelancer.name+`</span>
                    <strong>
                        <i class="fa fa-fw fa-star"></i>
                        `+freelancer.job+`
                    </strong>
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                        <img class="img-responsive" src="https://material-cards.s3-eu-west-1.amazonaws.com/thumb-christopher-walken.jpg">
                    </div>
                    <div class="mc-description">
                        `+ freelancer.desc +`
                    </div>
                </div>
                <a class="mc-btn-action">
                    <i class="fa fa-bars"></i>
                </a>
                <div class="mc-footer">
                    <h4>
                        Social
                    </h4>
                    <a class="fa fa-fw fa-facebook"></a>
                    <a class="fa fa-fw fa-twitter"></a>
                    <a class="fa fa-fw fa-linkedin"></a>
                    <a class="fa fa-fw fa-globe"></a>
                </div>
            </article>
    `
    divList.appendChild(mainDiv)
});