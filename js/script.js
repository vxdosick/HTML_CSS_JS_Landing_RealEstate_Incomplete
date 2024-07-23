const titleLocationMarker = document.querySelector('.title__location-marker');
const titleButtons = [
    document.querySelector('.title__rent'),
    document.querySelector('.title__buy'),
    document.querySelector('.title__sell')
];

titleButtons.forEach((button, index) => {
    const modes = ['rent', 'buy', 'sell'];
    button.addEventListener('click', () => {
        titleLocationMarker.textContent = `Location (${modes[index]})`;
    });
});

const formTitleMarket = document.querySelector('.title__market');
const inputTitleMarketCity = document.querySelector('.title__market-city');
const inputTitleMarketType = document.querySelector('.title__market-type');
const inputTitleMarketRange = document.querySelector('.title__market-range');

formTitleMarket.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = inputTitleMarketCity.value;
    const type = inputTitleMarketType.value;
    const range = inputTitleMarketRange.value;
    const mode = titleLocationMarker.textContent.split(' ')[1];
    console.log(`${city} (${mode})`);
    console.log(`${type} (${mode})`);
    console.log(`${range} (${mode})`);
});

function addServiceHoverEffect(service, title, subtextClass) {
    service.addEventListener('mouseenter', () => {
        const subtext = document.createElement('p');
        subtext.className = subtextClass;
        subtext.style.maxWidth = '760px';
        subtext.style.opacity = '0';
        subtext.style.transition = 'opacity 0.5s linear';
        subtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.';
        title.insertAdjacentElement('afterend', subtext);
        title.subTextElem = subtext;
        setTimeout(() => { subtext.style.opacity = '1'; }, 10);
    });

    service.addEventListener('mouseleave', () => {
        if (title.subTextElem) {
            title.subTextElem.remove();
            title.subTextElem = null;
        }
    });
}

addServiceHoverEffect(document.querySelector('.services__project'), document.querySelector('.services__project-title'), 'services__project-subtext');
addServiceHoverEffect(document.querySelector('.services__monitoring'), document.querySelector('.services__monitoring-title'), 'services__monitoring-subtext');
addServiceHoverEffect(document.querySelector('.services__estimating'), document.querySelector('.services__estimating-title'), 'services__estimating-subtext');

document.querySelectorAll('.projects__photo-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
        if (!this.querySelector('.projects__photo-text')) {
            this.insertAdjacentHTML('beforeend', `
                <div class="projects__photo-text">
                    <div>
                        <h2 class="projects__photo-title">ReHomes Riverside</h2>
                        <p class="projects__photo-subtext">West Virginia, USA</p>
                    </div>
                    <p class="projects__number">01</p>
                </div>
            `);
        }
    });

    container.addEventListener('mouseleave', function() {
        const textBlock = this.querySelector('.projects__photo-text');
        if (textBlock) {
            textBlock.remove();
        }
    });
});

const belowPhotosThreeImg = document.querySelectorAll('.below__photos-three-img');
const belowImgBig = document.querySelector('.below__img-big');

belowPhotosThreeImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        belowImgBig.innerHTML = `<img class="below__photos-three-img" src="img/below/${index + 1}.svg" alt="">`;
    });
});

const projectsPhoto = document.querySelector('.projects__photo');

function projectsPhoto_Change() {
    if (window.innerWidth <= 1600) {
        projectsPhoto.innerHTML = `<div><img src="img/project/1.svg" alt=""></div>`;
    }
}

window.addEventListener('resize', projectsPhoto_Change);
projectsPhoto_Change();