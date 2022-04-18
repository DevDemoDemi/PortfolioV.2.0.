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



    started = setInterval(() => {
        markerLocation += 100

        if (arr.indexOf(markerLocation) < 0) {
            markerLocation -= 100
        }

        $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
        $(`#${markerLocation}`).css('background', 'var(--modSeco)')


        if (markerLocation == 225) {
            let arr2 = [226, 325]
            let chosen = arr2[Math.floor(Math.random() * arr2.length)]
            // console.log(chosen)

            if (chosen == 226) {
                markerLocation = chosen
                // clearInterval(started)
                started = setInterval(() => {
                    markerLocation += 1
                    if (arr.indexOf(markerLocation) < 0) {
                        markerLocation -= 1
                    }
                    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                    $(`#${markerLocation}`).css('background', 'var(--modSeco)')

                }, 150)
            }

        } else if (markerLocation == 625) {
            let arr2 = [624, 725]
            let chosen = arr2[Math.floor(Math.random() * arr2.length)]
            // console.log(chosen)

            if (chosen == 624) {
                markerLocation = chosen
                started = setInterval(() => {
                    markerLocation -= 1
                    if (arr.indexOf(markerLocation) < 0) {
                        markerLocation += 1
                    }
                    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                    $(`#${markerLocation}`).css('background', 'var(--modSeco)')

                }, 150)
            }

        } else if (markerLocation == 1225) {
            started = setInterval(() => {
                markerLocation += 1
                if (arr.indexOf(markerLocation) < 0) {
                    markerLocation -= 1
                }
                $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                $(`#${markerLocation}`).css('background', 'var(--modSeco)')

            }, 150)

        } else if (markerLocation == 1075) {
            let arr2 = [1074, 1076]
            let chosen = arr2[Math.floor(Math.random() * arr2.length)]

            if (chosen == 1074) {
                markerLocation = chosen
                started = setInterval(() => {
                    markerLocation -= 1
                    if (arr.indexOf(markerLocation) < 0) {
                        markerLocation += 1
                    }
                    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                    $(`#${markerLocation}`).css('background', 'var(--modSeco)')

                }, 150)
            }

        } else if (markerLocation == 1085) {
            started = setInterval(() => {
                markerLocation -= 100
                if (arr.indexOf(markerLocation) < 0) {
                    markerLocation += 100
                }
                $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                $(`#${markerLocation}`).css('background', 'var(--modSeco)')

            }, 150)

        } else if (markerLocation == 793) {
            let arr2 = [693, 794]
            let chosen = arr2[Math.floor(Math.random() * arr2.length)]
            console.log(chosen)

            if (chosen == 794) {
                markerLocation = chosen
                started = setInterval(() => {
                    markerLocation += 1
                    if (arr.indexOf(markerLocation) < 0) {
                        markerLocation -= 1
                    }
                    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                    $(`#${markerLocation}`).css('background', 'var(--modSeco)')

                }, 150)
            } else {
                markerLocation = chosen
                started = setInterval(() => {
                    markerLocation -= 100
                    // if (arr.indexOf(markerLocation) < 0) {
                    //     markerLocation += 100
                    // }
                    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                    $(`#${markerLocation}`).css('background', 'var(--modSeco)')
                }, 150)
            }

        } else if (markerLocation == 93) {
            markerLocation = 4649
            started = setInterval(() => {
                markerLocation -= 100
                if (arr.indexOf(markerLocation) < 0) {
                    markerLocation += 100
                }
                $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                $(`#${markerLocation}`).css('background', 'var(--modSeco)')

            }, 150)

        } else if (markerLocation == 785) {
            started = setInterval(() => {
                markerLocation += 1
                $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
                $(`#${markerLocation}`).css('background', 'var(--modSeco)')
            }, 150)
        }
    }, 150)




})


let markerLocation = ''

let arr = []

let started;


const goingRight = () => {
    markerLocation += 1
    if (arr.indexOf(markerLocation) < 0) {
        markerLocation -= 1
    }
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
}

