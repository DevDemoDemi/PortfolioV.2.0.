$(document).ready(() => {


    /** created by Mr. Miller below */
    for (let i = 0; i < 4700; i++) {
        $("#box").append(`<div id=${i} class="grid-square"></div>`)
    }
    /** created by Mr. Miller above */


    /** roads below */
    for (let i = 4300; i < 4349; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 1010; i < 4410; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // contArr.push(i)     /** pushes locations into array for contact road */
    }
    for (let i = 3311; i < 3350; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 1235; i < 3335; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 1225; i < 1235; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 3349; i < 4700; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 3850; i < 3860; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 2859; i < 3859; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 2859; i < 2900; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // projArr.push(i)     /** pushes locations into array for project road */
    }
    for (let i = 2875; i < 4700; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // aboutArr.push(i)     /** pushes locations into array for about road */
    }
    for (let i = 4176; i < 4179; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // aboutStayGreen.push(i)       /** pushes locations to keep about glow green */
    }
    for (let i = 1069; i < 2869; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 2590; i < 2990; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // projStayGreen.push(i)       /** pushes locations to keep project glow green */
    }
    for (let i = 1070; i < 1086; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 785; i < 1085; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 786; i < 800; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 93; i < 793; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 25; i < 1225; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 2311; i < 2314; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        // contStayGreen.push(i)       /** pushes locations to keep contact glow green */
    }
    for (let i = 1000; i < 1010; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 606; i < 1006; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 607; i < 625; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 226; i < 275; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    for (let i = 275; i < 1075; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
    }
    /** roads above */

    markerLocation = 125       /** fixed start location */
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $(`#${markerLocation}`).css('background', 'var(--modSeco)')

    let startArr = [25, 225]
    let startChosen = startArr[Math.floor(Math.random() * startArr.length)]


    if (startChosen == 25) {

        setTimeout(() => {
            markerLocation = startChosen
            $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
            $(`#${markerLocation}`).css('background', 'var(--modSeco)')

            markerLocation = 4575
            $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
            $(`#${markerLocation}`).css('background', 'var(--modSeco)')
            $('#4675').css('background', 'var(--modSeco)')

            started = setInterval(goingUp, speed)
        }, 3000)

    } else {
        setTimeout(() => {
            started = setInterval(goingDown, speed)
        }, 3000)
    }



    $('#contLink').click(() => {
        $('#contModal').show()
    })
    $('#projLink').click(() => {
        $('#projModal').show()
    })
    $('#aboutLink').click(() => {
        $('#aboutModal').show()
    })

    closeBtn[0].addEventListener('click', () => {       /** close button click function */
        $('.modal').css('display', 'none')      /** all modals not displayed */
    })
    closeBtn[1].addEventListener('click', () => {       /** close button click function */
        $('.modal').css('display', 'none')      /** all modals not displayed */
    })
    closeBtn[2].addEventListener('click', () => {       /** close button click function */
        $('.modal').css('display', 'none')      /** all modals not displayed */
    })


})


let markerLocation = ''

let arr = []

let started;

let speed = 100

let colorArr = []
let count = 0

let closeBtn = document.getElementsByClassName('close')     /** pulls close buttons from DOM */



const goingUp = () => {
    markerLocation -= 100
    if (arr.indexOf(markerLocation) < 0) {
        markerLocation += 100
    }
    $('#marker').css('transform', 'rotateY(0deg)')
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $(`#${markerLocation}`).css('background', 'var(--modSeco)')
    // count++
    // console.log(count)
    if ($(`#${markerLocation}`).css('background', 'var(--modSeco)')) {
        colorArr.push(markerLocation)
        colorArr = [...new Set(colorArr)]
        // console.log(colorArr)
        if (colorArr.length == 411) {
            clearInterval(started)
        }
    }


    if (markerLocation == 2875) {
        let arr2 = [2874, 2876]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2874) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 3349) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 3310) {
        let arr2 = [3210, 3311]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3311) {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 1069) {
        clearInterval(started)
        started = setInterval(goingRight, speed)

    } else if (markerLocation == 785) {
        clearInterval(started)
        started = setInterval(goingRight, speed)

    } else if (markerLocation == 93) {
        markerLocation = 4549
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#4649').css('background', 'var(--modSeco)')
        colorArr.push(4649)
        colorArr.push(markerLocation)

    } else if (markerLocation == 275) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 1235) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 625) {
        let arr2 = [525, 624]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 624) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        }

    } else if (markerLocation == 1010) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 606) {
        clearInterval(started)
        started = setInterval(goingRight, speed)

    } else if (markerLocation == 2859) {
        clearInterval(started)
        started = setInterval(goingRight, speed)

    } else if (markerLocation == 25) {
        markerLocation = 4575
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#4675').css('background', 'var(--modSeco)')
        colorArr.push(4675)
        colorArr.push(markerLocation)

    } else if (markerLocation == 2310) {
        $('#2311').css('background', 'var(--modSeco)')
        $('#2312').css('background', 'var(--modSeco)')
        $('#2313').css('background', 'var(--modSeco)')
        colorArr.push(2311)
        colorArr.push(2312)
        colorArr.push(2313)

    } else if (markerLocation == 4175) {
        $('#4176').css('background', 'var(--modSeco)')
        $('#4177').css('background', 'var(--modSeco)')
        $('#4178').css('background', 'var(--modSeco)')
        colorArr.push(4176)
        colorArr.push(4177)
        colorArr.push(4178)

    } else if (markerLocation == 225) {
        let arr2 = [125, 226]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 226) {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    }
}




const goingRight = () => {
    markerLocation += 1
    if (arr.indexOf(markerLocation) < 0) {
        markerLocation -= 1
    }
    $('#marker').css('transform', 'rotateY(180deg)')
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $(`#${markerLocation}`).css('background', 'var(--modSeco)')
    // count++
    // console.log(count)
    if ($(`#${markerLocation}`).css('background', 'var(--modSeco)')) {
        colorArr.push(markerLocation)
        colorArr = [...new Set(colorArr)]
        // console.log(colorArr)
        if (colorArr.length == 411) {
            clearInterval(started)
        }

    }

    if (markerLocation == 2898) {
        markerLocation = 1000
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#2899').css('background', 'var(--modSeco)')
        colorArr.push(2899)
        colorArr.push(markerLocation)

    } else if (markerLocation == 1075) {
        let arr2 = [975, 1076]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 975) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 1085) {
        clearInterval(started)
        started = setInterval(goingUp, speed)

    } else if (markerLocation == 793) {
        let arr2 = [693, 794]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 693) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 798) {
        markerLocation = 4300
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#799').css('background', 'var(--modSeco)')
        colorArr.push(799)
        colorArr.push(markerLocation)

    } else if (markerLocation == 625) {
        let arr2 = [525, 725]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 525) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 1235) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 1010) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 3335) {
        let arr2 = [3235, 3336]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3235) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 3349) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 3859) {
        clearInterval(started)
        started = setInterval(goingUp, speed)

    } else if (markerLocation == 2869) {
        let arr2 = [2769, 2870]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2769) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 2875) {
        let arr2 = [2876, 2975]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2975) {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 275) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 4349) {
        let arr2 = [4249, 4449]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 4249) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 2890) {
        $('#2790').css('background', 'var(--modSeco)')
        $('#2690').css('background', 'var(--modSeco)')
        $('#2590').css('background', 'var(--modSeco)')
        colorArr.push(2790)
        colorArr.push(2690)
        colorArr.push(2590)

    }
}




const goingLeft = () => {
    markerLocation -= 1
    if (arr.indexOf(markerLocation) < 0) {
        markerLocation += 1
    }
    $('#marker').css('transform', 'rotateY(0deg)')
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $(`#${markerLocation}`).css('background', 'var(--modSeco)')
    // count++
    // console.log(count)
    if ($(`#${markerLocation}`).css('background', 'var(--modSeco)')) {
        colorArr.push(markerLocation)
        colorArr = [...new Set(colorArr)]
        // console.log(colorArr)
        if (colorArr.length == 411) {
            clearInterval(started)
        }
    }

    if (markerLocation == 2869) {
        let arr2 = [2769, 2868]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2769) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 2859) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 3849) {
        let arr2 = [3749, 3949]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3749) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 4310) {
        let arr2 = [4210, 4309]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 4210) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 3335) {
        let arr2 = [3235, 3334]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3235) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 1225) {
        clearInterval(started)
        started = setInterval(goingUp, speed)

    } else if (markerLocation == 1006) {
        let arr2 = [906, 1005]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 1005) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 3310) {
        let arr2 = [3210, 3410]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3210) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 4302) {
        markerLocation = 797
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#799').css('background', 'var(--modSeco)')
        $('#798').css('background', 'var(--modSeco)')
        $('#4300').css('background', 'var(--modSeco)')
        $('#4301').css('background', 'var(--modSeco)')
        colorArr.push(799)
        colorArr.push(798)
        colorArr.push(4300)
        colorArr.push(4301)
        colorArr.push(markerLocation)

    } else if (markerLocation == 1002) {
        markerLocation = 2897
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#2899').css('background', 'var(--modSeco)')
        $('#2898').css('background', 'var(--modSeco)')
        $('#1000').css('background', 'var(--modSeco)')
        $('#1001').css('background', 'var(--modSeco)')
        colorArr.push(2899)
        colorArr.push(2898)
        colorArr.push(1000)
        colorArr.push(1001)
        colorArr.push(markerLocation)

    } else if (markerLocation == 606) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 2875) {
        let arr2 = [2874, 2975]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2975) {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 225) {
        let arr2 = [125, 325]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 125) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingDown, speed)
        }

    } else if (markerLocation == 785) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 1069) {
        clearInterval(started)
        started = setInterval(goingDown, speed)

    } else if (markerLocation == 1075) {
        let arr2 = [975, 1074]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 975) {
            clearInterval(started)
            started = setInterval(goingUp, speed)
        }

    } else if (markerLocation == 2890) {
        $('#2790').css('background', 'var(--modSeco)')
        $('#2690').css('background', 'var(--modSeco)')
        $('#2590').css('background', 'var(--modSeco)')
        colorArr.push(2790)
        colorArr.push(2690)
        colorArr.push(2590)

    }
}




const goingDown = () => {
    markerLocation += 100
    if (arr.indexOf(markerLocation) < 0) {
        markerLocation -= 100
    }
    $('#marker').css('transform', 'rotateY(0deg)')
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $(`#${markerLocation}`).css('background', 'var(--modSeco)')
    // count++
    // console.log(count)
    if ($(`#${markerLocation}`).css('background', 'var(--modSeco)')) {
        colorArr.push(markerLocation)
        colorArr = [...new Set(colorArr)]
        // console.log(colorArr)
        if (colorArr.length == 411) {
            clearInterval(started)
        }
    }

    if (markerLocation == 3859) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 4349) {
        let arr2 = [4348, 4449]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 4348) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        }

    } else if (markerLocation == 625) {
        let arr2 = [624, 725]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 624) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        }

    } else if (markerLocation == 1225) {
        clearInterval(started)
        started = setInterval(goingRight, speed)

    } else if (markerLocation == 3335) {
        let arr2 = [3334, 3336]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3334) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 4310) {
        let arr2 = [4309, 4311]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 4309) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 1006) {
        let arr2 = [1005, 1007]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 1005) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 3310) {
        let arr2 = [3311, 3410]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3311) {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 3849) {
        let arr2 = [3850, 3949]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 3850) {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 4549) {
        markerLocation = 93
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#4649').css('background', 'var(--modSeco)')
        colorArr.push(4649)
        colorArr.push(markerLocation)

    } else if (markerLocation == 4575) {
        markerLocation = 25
        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')
        $('#4675').css('background', 'var(--modSeco)')
        colorArr.push(4675)
        colorArr.push(markerLocation)

    } else if (markerLocation == 1085) {
        clearInterval(started)
        started = setInterval(goingLeft, speed)

    } else if (markerLocation == 1075) {
        let arr2 = [1074, 1076]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 1074) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 2869) {
        let arr2 = [2868, 2870]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 2868) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 793) {
        let arr2 = [792, 794]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 792) {
            clearInterval(started)
            started = setInterval(goingLeft, speed)
        } else {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    } else if (markerLocation == 2310) {
        $('#2311').css('background', 'var(--modSeco)')
        $('#2312').css('background', 'var(--modSeco)')
        $('#2313').css('background', 'var(--modSeco)')
        colorArr.push(2311)
        colorArr.push(2312)
        colorArr.push(2313)

    } else if (markerLocation == 4175) {
        $('#4176').css('background', 'var(--modSeco)')
        $('#4177').css('background', 'var(--modSeco)')
        $('#4178').css('background', 'var(--modSeco)')
        colorArr.push(4176)
        colorArr.push(4177)
        colorArr.push(4178)

    } else if (markerLocation == 225) {
        let arr2 = [226, 325]
        let chosen = arr2[Math.floor(Math.random() * arr2.length)]

        if (chosen == 226) {
            clearInterval(started)
            started = setInterval(goingRight, speed)
        }

    }
}


let quotes = [
    {
        'quote': "❝Things turn out best for those who make the best of how things turn out.❞",
        'author': 'John Wooden'
    },
    {
        'quote': "❝Luck is where opportunity meets preparation.❞",
        'author': 'Denzel Washington'
    },
    {
        'quote': "❝Start where you are, use what you have, do what you can.❞",
        'author': 'Arthur Ashe'
    },
    {
        'quote': "❝Always be a first-rate version of yourself instead of a second-rate version of someone else.❞",
        'author': 'Judy Garland'
    },
    {
        'quote': "❝Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.❞",
        'author': 'Carl Bard'
    }
]

let quo;
let auth;
let quoteStart;

const randomQuote = () => {
    let shown = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log(shown);
    quo = shown["quote"];
    // console.log(quo);
    auth = shown["author"];
    // console.log(auth);
    document.getElementById('quoteBox').innerText = quo;
    document.getElementById('authBox').innerText = auth;


    // console.log($('#quoteBox').height())

    let hite = $('#quoteBox').height()
    if (hite == 96) {
        $('#quoteBox').css('padding-bottom', '14px')
    } else if (hite == 48) {
        $('#quoteBox').css('padding-bottom', '37px')
    } else if (hite == 72) {
        $('#quoteBox').css('padding-bottom', '25px')
    }

    setTimeout(randomQuote, 5000)
}
