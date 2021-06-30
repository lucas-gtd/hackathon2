$(document).ready(function () {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });

    const getFreelancers = () => {
        return [
            {
                name: 'Alex',
                job: 'Ebeniste',
                desc: "salut, c'est Alex, tu veux que je taille ton bout de bois ?",
                job_category: 2,
                seller_details: 1,
                seller_language: 1

            },
            {
                name: 'Rango',
                job: 'Developpeur',
                desc: "Je suis apte à développer votre application !",
                job_category: 4,
                seller_details: 2,
                seller_language: 3
            },
            {
                name: 'David',
                job: 'Photographe',
                desc: "J'adore la photo, vous ne serez pas déç des clichés que je peux produire !",
                job_category: 7,
                seller_details: 1,
                seller_language: 1
            },
            {
                name: 'Jean Pierre',
                job: 'Doubleur',
                desc: "salut, c'est Jean Pierre",
                job_category: 1,
                seller_details: 1,
                seller_language: 1
            },
            {
                name: 'Tufik',
                job: 'Mastering / Mixage',
                desc: "Le son, le mastering et le mmixage en studio n'a plus aucun secret pour moi",
                job_category: 8,
                seller_details: 1,
                seller_language: 1
            },
            {
                name: 'Rachid',
                job: 'Coach sportif',
                desc: "Je vous accompagnerai dans vos projets sportifs et vous guiderai !",
                job_category: 2,
                seller_details: 1,
                seller_language: 1
            }
        ]
    }

    const divList = document.getElementById('freelancers-list')
    const jobChoice = document.getElementById('jobChoice')
    const sellerDetails = document.getElementById('sellerDetails')
    const sellerLanguage = document.getElementById('sellerLanguage')

    function majContent() {
        divList.innerHTML = "";


        getFreelancers().forEach(freelancer => {
            if ((jobChoice.value == 0 || freelancer.job_category == jobChoice.value)
                && (sellerDetails.value == 0 || freelancer.seller_details == sellerDetails.value)
                && (sellerLanguage.value == 0 || freelancer.seller_language == sellerLanguage.value)) {
                const mainDiv = document.createElement('div')
                mainDiv.classList = 'col-md-4 col-sm-6 col-xs-12'
                mainDiv.innerHTML = `
    <article class="material-card Red">
                <h2>
                    <span>`+ freelancer.name + `</span>
                    <strong>
                        <i class="fa fa-fw fa-star"></i>
                        `+ freelancer.job + `
                    </strong>
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                        <img class="img-responsive" src="https://material-cards.s3-eu-west-1.amazonaws.com/thumb-christopher-walken.jpg">
                    </div>
                    <div class="mc-description">
                        `+ freelancer.desc + `
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
            }
        })
    }
    jobChoice.addEventListener("change", majContent);
    sellerDetails.addEventListener("change", majContent);
    sellerLanguage.addEventListener("change", majContent);


    majContent()
});
