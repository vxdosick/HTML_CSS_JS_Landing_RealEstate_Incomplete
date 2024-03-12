let titleLocationMarker = document.querySelector('.title__location-marker')
let titleButtons = [
    document.querySelector('.title__rent'),
    document.querySelector('.title__buy'),
    document.querySelector('.title__sell')
]
titleButtons[0].addEventListener('click', function(){
    titleLocationMarker.textContent = `Location (rent)`
})
titleButtons[1].addEventListener('click', function(){
    titleLocationMarker.textContent = `Location (buy)`
})
titleButtons[2].addEventListener('click', function(){
    titleLocationMarker.textContent = `Location (sell)`
})

let formTitleMarket = document.querySelector('.title__market')
let inputTitleMarketCity = document.querySelector('.title__market-city')
let inputTitleMarketType = document.querySelector('.title__market-type')
let inputTitleMarketRange = document.querySelector('.title__market-range')
formTitleMarket.addEventListener('submit', function(event){
    event.preventDefault()
    let inputTitleMarketCityValue = inputTitleMarketCity.value
    let inputTitleMarketTypeValue = inputTitleMarketType.value
    let inputTitleMarketRangeValue = inputTitleMarketRange.value
    if (titleLocationMarker.textContent == `Location (rent)`) {
        console.log(inputTitleMarketCityValue + ' (rent)')
        console.log(inputTitleMarketTypeValue + ' (rent)')
        console.log(inputTitleMarketRangeValue + ' (rent)')
    } else if (titleLocationMarker.textContent == `Location (buy)`) {
        console.log(inputTitleMarketCityValue + ' (buy)')
        console.log(inputTitleMarketTypeValue + ' (buy)')
        console.log(inputTitleMarketRangeValue + ' (buy)')
    } else if (titleLocationMarker.textContent == `Location (sell)`) {
        console.log(inputTitleMarketCityValue + ' (sell)')
        console.log(inputTitleMarketTypeValue + ' (sell)')
        console.log(inputTitleMarketRangeValue + ' (sell)')
    }
})

let servicesProject = document.querySelector('.services__project')
let servicesMonitoring = document.querySelector('.services__monitoring')
let servicesEstimating = document.querySelector('.services__estimating')
let servicesProjectTitle = document.querySelector('.services__project-title')
let servicesMonitoringTitle = document.querySelector('.services__monitoring-title')
let servicesEstimatingTitle = document.querySelector('.services__estimating-title')
servicesProject.addEventListener('mouseenter', function(){
    let servicesProjectSubtext = document.createElement('p')
    servicesProjectSubtext.className = 'services__project-subtext'
    servicesProjectSubtext.style.maxWidth = '760px'
    servicesProjectSubtext.style.opacity = '0'
    servicesProjectSubtext.style.transition = 'opacity 0.5s linear'
    servicesProjectSubtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.'
    servicesProjectTitle.insertAdjacentElement('afterend', servicesProjectSubtext)
    servicesProjectTitle.subTextElem = servicesProjectSubtext
    setTimeout(() => {
        servicesProjectSubtext.style.opacity = '1';
    }, 10)
})
servicesProject.addEventListener('mouseleave', function(){
    if (servicesProjectTitle.subTextElem) {
        servicesProjectTitle.subTextElem.remove()
        servicesProjectTitle.subTextElem = null
    }
})
servicesMonitoring.addEventListener('mouseenter', function(){
    let servicesMonitoringSubtext = document.createElement('p')
    servicesMonitoringSubtext.style.maxWidth = '760px'
    servicesMonitoringSubtext.style.opacity = '0'
    servicesMonitoringSubtext.style.transition = 'opacity 0.5s linear'
    servicesMonitoringSubtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.'
    servicesMonitoringTitle.insertAdjacentElement('afterend', servicesMonitoringSubtext)
    servicesMonitoringTitle.subTextElem = servicesMonitoringSubtext
    setTimeout(() => {
        servicesMonitoringSubtext.style.opacity = '1';
    }, 10)
})
servicesMonitoring.addEventListener('mouseleave', function(){
    if (servicesMonitoringTitle.subTextElem) {
        servicesMonitoringTitle.subTextElem.remove()
        servicesMonitoringTitle.subTextElem = null 
    }
})
servicesEstimating.addEventListener('mouseenter', function(){
    let servicesEstimatingSubtext = document.createElement('p')
    servicesEstimatingSubtext.style.maxWidth = '760px'
    servicesEstimatingSubtext.style.opacity = '0'
    servicesEstimatingSubtext.style.transition = 'opacity 0.5s linear'
    servicesEstimatingSubtext.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit magna velit bibendum tellus habitasse mi.'
    servicesEstimatingTitle.insertAdjacentElement('afterend', servicesEstimatingSubtext)
    servicesEstimatingTitle.subTextElem = servicesEstimatingSubtext
    setTimeout(() => {
        servicesEstimatingSubtext.style.opacity = '1';
    }, 10)
})
servicesEstimating.addEventListener('mouseleave', function(){
    if (servicesEstimatingTitle.subTextElem) {
        servicesEstimatingTitle.subTextElem.remove()
        servicesEstimatingTitle.subTextElem = null 
    }
})


let projectsPhotoContainers = document.querySelectorAll('.projects__photo-container');


projectsPhotoContainers.forEach(container => {
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
        let textBlock = this.querySelector('.projects__photo-text');
        if (textBlock) {
            textBlock.remove();
        }
    });
});

let belowPhotosThreeImg = document.querySelectorAll('.below__photos-three-img')
let belowImgBig = document.querySelector('.below__img-big')
belowPhotosThreeImg[0].addEventListener('click', function(){
    belowImgBig.innerHTML = '<img class="below__photos-three-img" src="img/below/1.svg" alt="">'
}) 
belowPhotosThreeImg[1].addEventListener('click', function(){
    belowImgBig.innerHTML = '<img class="below__photos-three-img" src="img/below/2.svg" alt="">'
}) 
belowPhotosThreeImg[2].addEventListener('click', function(){
    belowImgBig.innerHTML = '<img class="below__photos-three-img" src="img/below/3.svg" alt="">'
})

// ----------------------------------------
let projectsPhoto = document.querySelector('.projects__photo')

function projectsPhoto_Change() {
    if (window.innerWidth <= 1600) {
        projectsPhoto.innerHTML = `
        <div><img src="img/project/1.svg" alt=""></div>
        `
    }
}

window.addEventListener('resize', projectsPhoto_Change)
projectsPhoto_Change()