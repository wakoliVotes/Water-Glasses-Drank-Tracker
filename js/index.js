const smallCups = document.querySelectorAll(".cup-small");
const ounces = document.getElementById("ounces");
const percent = document.getElementById("percent");
const remain = document.getElementById("remain");

goalCupUpdate()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightSelectCup(idx))
});

function highlightSelectCup(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    goalCupUpdate()
};


function goalCupUpdate() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percent.style.visibility == 'hidden'
        percent.style.height = 0
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullCups / totalCups * 330}px`
        percent.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remain.style.visibility = 'hidden'
        remain.style.height = 0
    } else {
        remain.style.visibility = 'visible'
        ounces.innerText = `${3.5 - (300 * fullCups / 1000)}L`
    }
    if(fullCups == 8){
        percent.innerText = "100% \n🎉🎉🎉 \nHurray!!! \n🎉 🎉 🎉\n You have drank 3.5 Liters"
        percent.style.textAlign = 'center'
    } else {
        // Do nothing
    }
}