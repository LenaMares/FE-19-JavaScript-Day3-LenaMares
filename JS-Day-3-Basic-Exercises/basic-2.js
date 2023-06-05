const weatherElement = document.createElement("div")
weatherElement.setAttribute("id", "weather")
document.body.append(weatherElement)

const iceColdImg = document.createElement("img")
iceColdImg.src = "https://cdn.pixabay.com/photo/2019/12/30/20/34/road-4730553_1280.jpg"

const coldImg = document.createElement("img")
coldImg.src = "https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg"

const moderateImg = document.createElement("img")
moderateImg.src = "https://cdn.pixabay.com/photo/2019/12/11/18/11/storm-4688918_1280.jpg"

const warmImg = document.createElement("img")
warmImg.src = "https://cdn.pixabay.com/photo/2017/06/21/21/30/plume-2428666_1280.jpg"

const hotImg = document.createElement("img")
hotImg.src = "https://cdn.pixabay.com/photo/2015/09/12/21/09/man-937384_1280.jpg"

function weather() {
    const randomNum = Math.floor(Math.random() * (30 + 5) - 5)

    if (randomNum <= 0) {
        weatherElement.innerHTML = (`The weather is ice cold because it has ${randomNum} degrees.`)
        document.body.appendChild(iceColdImg)
    }

    else if (randomNum > 0 && randomNum <= 10) {
        weatherElement.innerHTML = (`The weather is cold because it has ${randomNum} degrees.`)
        document.body.appendChild(coldImg)
    }

    else if (randomNum > 10 && randomNum <= 20) {
        weatherElement.innerHTML = (`The weather is moderate because it has ${randomNum} degrees.`)
        document.body.appendChild(moderateImg)
    }

    else if (randomNum > 20 && randomNum <= 25) {
        weatherElement.innerHTML = (`The weather is warm because it has ${randomNum} degrees.`)
        document.body.appendChild(warmImg)


    } else {
        weatherElement.innerHTML = (`The weather is hot because it has ${randomNum} degrees.`)
        document.body.appendChild(hotImg)
    }
}

weather()