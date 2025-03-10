const input = document.querySelector("#country")
const btn = document.querySelector("#submit")
const countries = document.querySelector("#country-info")
const borders = document.querySelector("#bordering-countries")

btn.onclick = async function(){
    countries.innerHTML = ''
    borders.innerHTML = ''
    const countryName = input.value
    const result = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await result.json()
    const capital = data[0].capital[0]
    const region = data[0].region
    const population = data[0].population.toLocaleString()
    const borderingCountries = data[0].borders
    const flag = data[0].flags.png

    const capitalElement = document.createElement("p")
    capitalElement.textContent = `Capital: ${capital}`
    countries.appendChild(capitalElement)

    const populationElement = document.createElement("p")
    populationElement.textContent = `Population: ${population}`
    countries.appendChild(populationElement)

    const regionElement = document.createElement("p")
    regionElement.textContent = `Region: ${region}`
    countries.appendChild(regionElement)

    const flagElement = document.createElement("p")
    flagElement.textContent = `Flag:`
    countries.appendChild(capitalElement)
    const countryFlag = document.createElement("img")
    countryFlag.src = flag
    countries.appendChild(countryFlag)

    if(borderingCountries) {
        for(let i = 0; i< borderingCountries.length; i++) {
            const resultBorder = await fetch(`https://restcountries.com/v3.1/alpha/${borderingCountries[i]}`)
            const dataBorder = await resultBorder.json()
            const borderName = dataBorder[0].name.common
            const flagBorder = dataBorder[0].flags.png
            const borderNameElement = document.createElement("p")
            borderNameElement.textContent = `${borderName}`
            const flagBorderImg = document.createElement("img")
            flagBorderImg.src = flagBorder
            borders.appendChild(borderNameElement)
            borders.appendChild(flagBorderImg)
    
    
    
        }

    }

    

}