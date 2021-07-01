$(document).ready(function () {
    $('#material-card > .mc-btn-action').click(function () {
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
    <article id="material-card Red">
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
                    <div class="mc-description ">
                        `+ freelancer.desc + `
                    </div>
                </div>
                <a class="mc-btn-action">
                    
                </a>
                <div class="mc-footer">
                    <h4>
                        Social
                    </h4>
                    <a class="leaugo fa fa-fw fa-facebook w-50 h-50"></a>
                    <a class="leaugo fa fa-fw fa-twitter"></a>
                    <a class="leaugo fa fa-fw fa-linkedin"></a>
                    <a class="leaugo fa fa-fw fa-globe"></a>
                    <a class="leaugo fa fa-fw bi-binoculars" href="infos"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                      </svg></a>
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
