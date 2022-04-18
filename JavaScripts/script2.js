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
        contArr.push(i)     /** pushes locations into array for contact road */
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
        projArr.push(i)     /** pushes locations into array for project road */
    }
    for (let i = 2875; i < 4700; i += 100) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        aboutArr.push(i)     /** pushes locations into array for about road */
    }
    for (let i = 4176; i < 4179; i++) {
        $(`#${i}`).css('background', 'var(--seco)')
            .addClass('road')
        arr.push(i)
        aboutStayGreen.push(i)       /** pushes locations to keep about glow green */
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
        projStayGreen.push(i)       /** pushes locations to keep project glow green */
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
        contStayGreen.push(i)       /** pushes locations to keep contact glow green */
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



    /** coin locations below */
    for (let i = 0; i < arr.length; i++) {      /** loops thru array of .road locations */
        if (i % 15 == 0) {      /** if array index is divisible by 15 */
            $(`#${arr[i]}`).append(`<i id='coin${arr[i]}' class="nes-icon coin"></i>`)      /** appends a coin with id coin## according to location in array at index */
            coinArr.push(arr[i])        /** pushes location into coin array */
        }
    }
    /** coin locations above */



    setTimeout(typeWriterDev, 1000)     /** plays typewriter effect 1 second after load */
    $('#marker').delay(11750).fadeIn(2000)       /** on load, marker is hidden with a delayed fade in */
    $('#bigSquirtle').delay(6000).fadeIn(2000).delay(4000).fadeOut()     /** on load, big marker is hidden with a delayed fade in and a delayed fade out */
    $('.nes-pokeball').delay(9750).fadeIn(2000)     /** on load, pokeballs hidden with a delayed fade in */
    $('.enterHere').delay(10750).fadeIn(2000)        /** on load, glow effects hidden with a delayed fade in */
    $('.nes-btn').delay(13000).fadeIn()



    markerLocation = 125       /** fixed start location */
    $('#marker').appendTo(`#${markerLocation}`)     /** sends player to fixed start location */
    $('#coinNum').text(coinCount)       /** coin count displayed at top-left */



    let contArrUp = contArr.slice(0, 14)      /** sets contact road from top of entrance */
    let contArrDown = contArr.slice(14)     /** sets contact road from bottom of entrance */

    let projArrLeft = projArr.slice(0, 32)      /** sets project road from left of entrance */
    let projArrRight = projArr.slice(32)        /** sets project road from right of entrance */

    let aboutArrUp = aboutArr.slice(0, 13)      /** sets about road from top of entrance */
    let aboutArrDown = aboutArr.slice(13)       /** sets about road from bottom of entrance */



    document.addEventListener('keydown', (e) => {       /** begins keyboard event listener */

        $('#marker').css('animation', 'markered 3s infinite 6.5s')        /** sets 6.5 second delay on animation after pressing a key */

        /** below recognizes if arrows are pressed */
        if (e.code == 'ArrowDown') {    /** if pressing down arrow */

            downed = true       /** on switch for opacity changes */
            upped = false       /** off switch for opacity changes */
            righted = false     /** off switch for opacity changes */
            lefted = false      /** off switch for opacity changes */

            markerLocation += 100       /** sets new player location */

            if (arr.indexOf(markerLocation) < 0) {    /** if not .road */
                markerLocation -= 100       /** player stays in current location, ^^cannot move marker to location  */

            } else if (markerLocation == 4675) {    /** if hits bottom of page */
                markerLocation = 25       /** sets new player location, ^^returns to top */

            } else if (markerLocation == 4649) {    /** if hits bottom of page */
                markerLocation = 93       /** sets new player location, ^^returns to top */

            } else if (markerLocation == 2869) {        /** if hits project road not from end */
                yellOpacProj -= 0.09        /** sets yellow opacity on project glow */
                $('#projEnterYellow').css('opacity', yellOpacProj)      /** displays yellow opacity on project glow */

                greenOpacProj = 0.15        /** sets green opacity on project glow */
                $('#projEnterGreen').css('opacity', greenOpacProj)      /** displays green opacity on project glow */
            }

            $('#marker').appendTo($(`#${markerLocation}`))      /** sends player to location */

            $('#downBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })

            $('#marker').css('transform', 'rotateY(0deg)')

        } else if (e.code == 'ArrowUp') {    /** if pressing up arrow */

            downed = false       /** off switch for opacity changes */
            upped = true       /** on switch for opacity changes */
            righted = false       /** off switch for opacity changes */
            lefted = false       /** off switch for opacity changes */

            markerLocation -= 100       /** sets new player location */

            if (arr.indexOf(markerLocation) < 0) {    /** if not .road */
                markerLocation += 100       /** player stays in current location, ^^cannot move marker to location  */

            } else if (markerLocation == 25) {    /** if hits top of page */
                markerLocation = 4575       /** sets new player location, ^^returns to bottom */

            } else if (markerLocation == 93) {    /** if hits top of page */
                markerLocation = 4549       /** sets new player location, ^^returns to bottom */

            } else if (markerLocation == 2875) {        /** if hits project road not from end */
                yellOpacProj -= 0.14        /** sets yellow opacity on project glow */
                $('#projEnterYellow').css('opacity', yellOpacProj)      /** displays yellow opacity on project glow */

                greenOpacProj = 0.24        /** sets green opacity on project glow */
                $('#projEnterGreen').css('opacity', greenOpacProj)      /** displays green opacity on project glow */
            }

            $('#marker').appendTo($(`#${markerLocation}`))      /** sends player to location */

            $('#upBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })

            $('#marker').css('transform', 'rotateY(0deg)')

        } else if (e.code == 'ArrowRight') {    /** if pressing right arrow */

            downed = false       /** off switch for opacity changes */
            upped = false       /** off switch for opacity changes */
            righted = true       /** on switch for opacity changes */
            lefted = false       /** off switch for opacity changes */

            markerLocation += 1       /** sets new player location */

            if (arr.indexOf(markerLocation) < 0) {    /** if not .road */
                markerLocation -= 1       /** player stays in current location, ^^cannot move marker to location  */

            } else if (markerLocation == 798) {    /** if hits right of page*/
                markerLocation = 4300       /** sets new player location, ^^returns to left */

            } else if (markerLocation == 2898) {    /** if hits right of page*/
                markerLocation = 1000       /** sets new player location, ^^returns to left */

                /** below removes coin when going from right of page to left */
                for (let i = 0; i < coinArr.length; i++) {      /** loops thru coin array */
                    if (coinArr[i] == 2898) {       /** if location is found in coin array */
                        coinCount += 12     /** increments coin count by 12 for coin */
                        $('#coinNum').text(coinCount)       /** coin count displayed at top-left */
                        $('#coin2898').css('display', 'none')       /** gets rid of coin at location after appearing from right of screen */
                        coinArr.splice(i, 1)        /** remove coin from coin array so you can no longer collect coin count from location */
                    }
                }
                /** above removes coin when going from left of page to right */

            }

            $('#marker').appendTo($(`#${markerLocation}`))      /** sends player to location */

            $('#rightBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })

            $('#marker').css('transform', 'rotateY(180deg)')

        } else if (e.code == 'ArrowLeft') {    /** if pressing left arrow */

            $('#marker').css('transform', 'rotateY(0deg)')

            downed = false       /** off switch for opacity changes */
            upped = false       /** off switch for opacity changes */
            righted = false       /** off switch for opacity changes */
            lefted = true       /** on switch for opacity changes */

            markerLocation -= 1       /** sets new player location */

            if (arr.indexOf(markerLocation) < 0) {    /** if not .road */
                markerLocation += 1       /** player stays in current location, ^^cannot move marker to location  */

            } else if (markerLocation == 4300) {    /** if hits left of page*/
                markerLocation = 797       /** sets new player location, ^^returns to right */

                /** below removes coin when going from left of page to right */
                for (let i = 0; i < coinArr.length; i++) {      /** loops thru coin array */
                    if (coinArr[i] == 4300) {       /** if location is found in coin array */
                        coinCount += 12     /** increments coin count by 12 for coin */
                        $('#coinNum').text(coinCount)       /** coin count displayed at top-left */
                        $('#coin4300').css('display', 'none')       /** gets rid of coin at location after appearing from right of screen */
                        coinArr.splice(i, 1)        /** remove coin from coin array so you can no longer collect coin count from location */
                    }
                }
                /** above removes coin when going from left of page to right */


            } else if (markerLocation == 1000) {    /** if hits left of page */
                markerLocation = 2897       /** sets new player location, ^^returns to right */

                /** below removes coin when going from left of page to right */
                for (let i = 0; i < coinArr.length; i++) {      /** loops thru coin array */
                    if (coinArr[i] == 2898) {       /** if location is found in coin array */
                        coinCount += 12     /** increments coin count by 12 for coin */
                        $('#coinNum').text(coinCount)       /** coin count displayed at top-left */
                        $('#coin2898').css('display', 'none')       /** gets rid of coin at location after appearing from right of screen */
                        coinArr.splice(i, 1)        /** remove coin from coin array so you can no longer collect coin count from location */
                    }
                }
                /** above removes coin when going from left of page to right */


            } else if (markerLocation == 3310) {        /** if hits contact road not from end */
                yellOpacCont = 0.15        /** sets yellow opacity on contact glow */
                $('#contEnterYellow').css('opacity', yellOpacCont)      /** displays yellow opacity on contact glow */

                greenOpacCont = 0.25        /** sets green opacity on contact glow */
                $('#contEnterGreen').css('opacity', greenOpacCont)      /** displays green opacity on contact glow */
            }

            $('#marker').appendTo($(`#${markerLocation}`))      /** sends player to location */

            // $('#leftBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })
        }
        /** above recognizes if arrows are pressed */



        /** below removes coin */
        if (coinArr.indexOf(markerLocation) > -1) {     /** if player lands on coin location */

            coinCount += 12     /** increments coin count by 12 */
            $('#coinNum').text(coinCount)       /** coin count displayed at top-left */

            $(`#coin${markerLocation}`).css('display', 'none')      /** coin disappears */

            for (let i = 0; i < coinArr.length; i++) {      /** loops thru coin array */
                if (coinArr[i] == markerLocation) {     /** if coin has already been collected */
                    coinArr.splice(i, 1)        /** ^^ remove coin from coin array so you can no longer collect coin count from that location */
                }
            }
        }
        /** above removes coin */



        /** below recognizes if you have reached any of the three sections */
        if (markerLocation == 2313) {       /** if player reaches contact section */
            $('#purchaseModalCont').css('display', 'block')     /** displays purchase modal for contact section */

            if (coinCount < 112) {      /** if coin count is less than 112 coins */
                yesPurchBtn[0].style.display = 'none'       /** yes purchase button not displayed */
                noPurchBtn[0].style.display = 'none'       /** no purchase button not displayed */

                moreCoinsBtn[0].addEventListener('click', () => {       /** more coins button click function */
                    $('.modal').css('display', 'none')      /** all modals not displayed */
                })

            } else {        /** if coin count is greater than or equal to 112 coins */
                getMoreDiv[0].style.display = 'none'        /** get more div not displayed */
                yesPurchBtn[0].style.display = 'block'      /** yes purchase button displayed */
                noPurchBtn[0].style.display = 'block'      /** no purchase button displayed */
            }


            yesPurchBtn[0].addEventListener('click', () => {        /** yes purchase button click function */
                yesPurchedCont = true       /** on switch for when visited after purchase */

                $('#purchaseModalCont').css('display', 'none')      /** purchase modal not displayed */
                $('#contModal').css('display', 'block')     /** contact modal displayed */
            })

            noPurchBtn[0].addEventListener('click', () => {     /** no purchase button click function */
                yesPurchedCont = false       /** off switch for when visited after purchase */

                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            closeBtn[0].addEventListener('click', () => {       /** close button click function */
                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            if (yesPurchedCont) {       /** if visited after purchase (switch is on) */
                $('#purchaseModalCont').css('display', 'none')      /** purchase modal not displayed */
                $('#contModal').css('display', 'block')     /** contact modal displayed */
            }


        } else if (markerLocation == 2590) {       /** if player reaches project section */
            $('#purchaseModalProj').css('display', 'block')     /** displays purchase modal for project section */

            if (coinCount < 112) {      /** if coin count is less than 112 coins */
                yesPurchBtn[1].style.display = 'none'       /** yes purchase button not displayed */
                noPurchBtn[1].style.display = 'none'       /** no purchase button not displayed */

                moreCoinsBtn[1].addEventListener('click', () => {       /** more coins button click function */
                    $('.modal').css('display', 'none')      /** all modals not displayed */
                })

            } else {        /** if coin count is greater than or equal to 112 coins */
                getMoreDiv[1].style.display = 'none'        /** get more div not displayed */
                yesPurchBtn[1].style.display = 'block'       /** yes purchase button displayed */
                noPurchBtn[1].style.display = 'block'       /** no purchase button displayed */
            }


            yesPurchBtn[1].addEventListener('click', () => {        /** yes purchase button click function */
                yesPurchedProj = true       /** on switch for when visited after purchase */

                $('#purchaseModalProj').css('display', 'none')      /** purchase modal not displayed */
                $('#projModal').css('display', 'block')     /** project modal displayed */
            })

            noPurchBtn[1].addEventListener('click', () => {     /** no purchase button click function */
                yesPurchedProj = false       /** off switch for when visited after purchase */

                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            closeBtn[1].addEventListener('click', () => {       /** close button click function */
                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            if (yesPurchedProj) {       /** if visited after purchase (switch is on) */
                $('#purchaseModalProj').css('display', 'none')      /** purchase modal not displayed */
                $('#projModal').css('display', 'block')     /** project modal displayed */
            }


        } else if (markerLocation == 4178) {       /** if player reaches about section */
            $('#purchaseModalAbout').css('display', 'block')     /** displays purchase modal for about section */

            if (coinCount < 112) {      /** if coin count is less than 112 coins */
                yesPurchBtn[2].style.display = 'none'       /** yes purchase button not displayed */
                noPurchBtn[2].style.display = 'none'       /** no purchase button not displayed */

                moreCoinsBtn[2].addEventListener('click', () => {       /** more coins button click function */
                    $('.modal').css('display', 'none')      /** all modals not displayed */
                })

            } else {        /** if coin count is greater than or equal to 112 coins */
                getMoreDiv[2].style.display = 'none'        /** get more div not displayed */
                yesPurchBtn[2].style.display = 'block'       /** yes purchase button displayed */
                noPurchBtn[2].style.display = 'block'       /** no purchase button displayed */
            }


            yesPurchBtn[2].addEventListener('click', () => {        /** yes purchase button click function */
                yesPurchedAbout = true       /** on switch for when visited after purchase */

                $('#purchaseModalAbout').css('display', 'none')      /** purchase modal not displayed */
                $('#aboutModal').css('display', 'block')     /** about modal displayed */
            })

            noPurchBtn[2].addEventListener('click', () => {     /** no purchase button click function */
                yesPurchedAbout = false       /** off switch for when visited after purchase */

                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            closeBtn[2].addEventListener('click', () => {       /** close button click function */
                $('.modal').css('display', 'none')      /** all modals not displayed */
            })

            if (yesPurchedAbout) {       /** if visited after purchase (switch is on) */
                $('#purchaseModalAbout').css('display', 'none')      /** purchase modal not displayed */
                $('#aboutModal').css('display', 'block')     /** about modal displayed */
            }
        }
        /** above recognizes if you have reached any of the three sections */



        /** below glow effects on contact section pokeball */
        let contactUp = contArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, top of entrance road */
        let contactDown = contArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, bottom of entrance road */
        let whiteGlowCont = $('#contEnter')     /** assigns variable to contact white glow */
        let yellowGlowCont = $('#contEnterYellow')     /** assigns variable to contact yellow glow */
        let greenGlowCont = $('#contEnterGreen')     /** assigns variable to contact green glow */

        if (contArr.indexOf(markerLocation) > -1) {     /** if player is on contact road */

            whiteGlowCont.css('display', 'none')        /** white glow not displayed */
            yellowGlowCont.css('display', 'block')      /** yellow glow displayed */
            greenGlowCont.css('display', 'block')       /** green glow displayed */

            if (contactUp && downed) {      /** if player is in contact road above entrance and pressing down */

                /** created by Sierra below */
                yellOpacCont -= 0.023       /** yellow opacity decrements per block */
                yellowGlowCont.css('opacity', yellOpacCont)       /** displays yellow opacity on contact glow */

                greenOpacCont += 0.038      /** green opacity increments per block */
                greenGlowCont.css('opacity', greenOpacCont)      /** displays green opacity on contact glow */
                /** created by Sierra above */

                if (yellOpacCont <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacCont = 0.023        /** sets yellow opacity on contact glow */
                } else if (yellOpacCont > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacCont = 0.3      /** sets yellow opacity on contact glow */
                }

                if (greenOpacCont <= 0) {        /** if green opacity is less than or equal to 0 */
                    greenOpacCont = 0.038        /** sets green opacity on contact glow */
                } else if (greenOpacCont > 0.5) {       /** if green opacity is greater than 0.5 */
                    greenOpacCont = 0.5        /** sets green opacity on contact glow */
                }

            } else if (contactUp && upped) {        /** if player is in contact road above entrance and pressing up */

                yellOpacCont += 0.023       /** yellow opacity increments per block */
                yellowGlowCont.css('opacity', yellOpacCont)     /** displays yellow opacity on contact glow */

                greenOpacCont -= 0.038      /** green opacity decrements per block */
                greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */

                if (yellOpacCont <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacCont = 0.023        /** sets yellow opacity on contact glow */
                } else if (yellOpacCont > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacCont = 0.3      /** sets yellow opacity on contact glow */
                }

                if (greenOpacCont <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacCont = 0.038       /** sets green opacity on contact glow */
                } else if (greenOpacCont > 0.5) {       /** if green opacity is greater than 0.5 */
                    greenOpacCont = 0.5     /** sets green opacity on contact glow */
                }

            } else if (contactDown && downed) {     /** if player is in contact road below entrance and pressing down */

                yellOpacCont += 0.014       /** yellow opacity increments per block */
                yellowGlowCont.css('opacity', yellOpacCont)     /** displays yellow opacity on contact glow */

                greenOpacCont -= 0.023      /** green opacity decrements per block */
                greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */

                if (yellOpacCont <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacCont = 0.014        /** sets yellow opacity on contact glow */
                } else if (yellOpacCont > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacCont = 0.3      /** sets yellow opacity on contact glow */
                }

                if (greenOpacCont <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacCont = 0.023       /** sets green opacity on contact glow */
                } else if (greenOpacCont > 0.5) {       /** if green opacity is greater than 0.5 */
                    greenOpacCont = 0.5     /** sets green opacity on contact glow */
                }

            } else if (contactDown && upped) {     /** if player is in contact road below entrance and pressing up */

                yellOpacCont -= 0.014      /** yellow opacity decrements per block */
                yellowGlowCont.css('opacity', yellOpacCont)     /** displays yellow opacity on contact glow */

                greenOpacCont += 0.023      /** green opacity increments per block */
                greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */

                if (yellOpacCont <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacCont = 0.014      /** sets yellow opacity on contact glow */
                } else if (yellOpacCont > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacCont = 0.3      /** sets yellow opacity on contact glow */
                }

                if (greenOpacCont <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacCont = 0.023       /** sets green opacity on contact glow */
                } else if (greenOpacCont > 0.5) {       /** if green opacity is greater than 0.5 */
                    greenOpacCont = 0.5     /** sets green opacity on contact glow */
                }

            }

        } else if (contStayGreen.indexOf(markerLocation) > -1) {     /** if player is in contact entrance road */
            greenOpacCont = 0.5     /** sets green opacity on contact glow */
            greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */

        } else {        /** if player is not on contact road */
            whiteGlowCont.css('display', 'block')       /** white glow displayed */
            yellowGlowCont.css('display', 'none')       /** yellow glow not displayed */
            greenGlowCont.css('display', 'none')        /** green glow not displayed */

            yellOpacCont = 0.3      /** resets yellow opacity */
            greenOpacCont = 0       /** resets green opacity */
        }
        /** above glow effects on contact section pokeball */



        /** below glow effects on project section pokeball */
        let projectLeft = projArrLeft.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, left of entrance road */
        let projectRight = projArrRight.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, right of entrance road */
        let whiteGlowProj = $('#projEnter')     /** assigns variable to project white glow */
        let yellowGlowProj = $('#projEnterYellow')     /** assigns variable to project yellow glow */
        let greenGlowProj = $('#projEnterGreen')     /** assigns variable to project green glow */

        if (projArr.indexOf(markerLocation) > -1) {     /** if player is on project road */

            whiteGlowProj.css('display', 'none')        /** white glow not displayed */
            yellowGlowProj.css('display', 'block')        /** yellow glow displayed */
            greenGlowProj.css('display', 'block')        /** green glow displayed */

            if (projectLeft && righted) {      /** if player is in project road left of entrance and pressing right */
                yellOpacProj -= 0.009       /** yellow opacity decrements per block */
                yellowGlowProj.css('opacity', yellOpacProj)     /** displays yellow opacity on project glow */

                greenOpacProj += 0.015      /** green opacity increments per block */
                greenGlowProj.css('opacity', greenOpacProj)     /** displays green opacity on project glow */


                if (yellOpacProj <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacProj = 0.009     /** sets yellow opacity on project glow */
                } else if (yellOpacProj > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacProj = 0.3     /** sets yellow opacity on project glow */
                }

                if (greenOpacProj <= 0) {        /** if green opacity is less than or equal to 0 */
                    greenOpacProj = 0.015     /** sets green opacity on project glow */
                } else if (greenOpacProj > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacProj = 0.5     /** sets green opacity on project glow */
                }

            } else if (projectLeft && lefted) {      /** if player is in project road left of entrance and pressing left */
                yellOpacProj += 0.009      /** yellow opacity increments per block */
                yellowGlowProj.css('opacity', yellOpacProj)      /** displays yellow opacity on project glow */

                greenOpacProj -= 0.015      /** green opacity decrements per block */
                greenGlowProj.css('opacity', greenOpacProj)      /** displays green opacity on project glow */


                if (yellOpacProj <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacProj = 0.009     /** sets yellow opacity on project glow */
                } else if (yellOpacProj > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacProj = 0.3     /** sets yellow opacity on project glow */
                }

                if (greenOpacProj <= 0) {        /** if green opacity is less than or equal to 0 */
                    greenOpacProj = 0.015     /** sets green opacity on project glow */
                } else if (greenOpacProj > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacProj = 0.5     /** sets green opacity on project glow */
                }
            } else if (projectRight && lefted) {      /** if player is in project road right of entrance and pressing left */
                yellOpacProj -= 0.033      /** green opacity decrements per block */
                yellowGlowProj.css('opacity', yellOpacProj)      /** displays yellow opacity on project glow */

                greenOpacProj += 0.055      /** green opacity increments per block */
                greenGlowProj.css('opacity', greenOpacProj)      /** displays green opacity on project glow */

                if (yellOpacProj <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacProj = 0.033     /** sets yellow opacity on project glow */
                } else if (yellOpacProj > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacProj = 0.3     /** sets yellow opacity on project glow */
                }

                if (greenOpacProj <= 0) {        /** if green opacity is less than or equal to 0 */
                    greenOpacProj = 0.055     /** sets green opacity on project glow */
                } else if (greenOpacProj > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacProj = 0.5     /** sets green opacity on project glow */
                }
            } else if (projectRight && righted) {      /** if player is in project road right of entrance and pressing right */
                yellOpacProj += 0.033      /** yellow opacity increments per block */
                yellowGlowProj.css('opacity', yellOpacProj)      /** displays yellow opacity on project glow */

                greenOpacProj -= 0.055      /** green opacity decrements per block */
                greenGlowProj.css('opacity', greenOpacProj)      /** displays green opacity on project glow */

                if (yellOpacProj <= 0) {        /** if yellow opacity is less than or equal to 0 */
                    yellOpacProj = 0.033     /** sets yellow opacity on project glow */
                } else if (yellOpacProj > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacProj = 0.3     /** sets yellow opacity on project glow */
                }

                if (greenOpacProj <= 0) {        /** if green opacity is less than or equal to 0 */
                    greenOpacProj = 0.055     /** sets green opacity on project glow */
                } else if (greenOpacProj > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacProj = 0.5     /** sets green opacity on project glow */
                }
            }

        } else if (projStayGreen.indexOf(markerLocation) > -1) {     /** if player is in project entrance road */
            greenOpacProj = 0.5     /** sets green opacity on project glow */
            greenGlowProj.css('opacity', greenOpacProj)     /** displays green opacity on project glow */

        } else {        /** if player is not on project road */
            whiteGlowProj.css('display', 'block')        /** white glow displayed */
            yellowGlowProj.css('display', 'none')        /** yellow glow not displayed */
            greenGlowProj.css('display', 'none')        /** green glow not displayed */

            yellOpacProj = 0.3       /** resets yellow opacity */
            greenOpacProj = 0       /** resets green opacity */
        }
        /** above glow effects on project section pokeball */



        /** below glow effects on about section pokeball */
        let aboutUp = aboutArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, top of entrance road */
        let aboutDown = aboutArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, bottom of entrance road */
        let whiteGlowAbout = $('#aboutEnter')     /** assigns variable to about white glow */
        let yellowGlowAbout = $('#aboutEnterYellow')     /** assigns variable to about yellow glow */
        let greenGlowAbout = $('#aboutEnterGreen')     /** assigns variable to about green glow */

        if (aboutArr.indexOf(markerLocation) > -1) {     /** if player is on about road */
            whiteGlowAbout.css('display', 'none')        /** white glow not displayed */
            yellowGlowAbout.css('display', 'block')        /** yellow glow displayed */
            greenGlowAbout.css('display', 'block')        /** green glow displayed */

            if (aboutUp && downed) {      /** if player is in about road above entrance and pressing down */
                yellOpacAbout -= 0.023      /** yellow opacity decrements per block */
                yellowGlowAbout.css('opacity', yellOpacAbout)       /** displays yellow opacity on about glow */

                greenOpacAbout += 0.038     /** green opacity increments per block */
                greenGlowAbout.css('opacity', greenOpacAbout)       /** displays green opacity on about glow */

                if (yellOpacAbout <= 0) {       /** if yellow opacity is less than or equal to 0 */
                    yellOpacAbout = 0.023     /** sets yellow opacity on about glow */
                } else if (yellOpacAbout > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacAbout = 0.3     /** sets yellow opacity on about glow */
                }

                if (greenOpacAbout <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacAbout = 0.038     /** sets green opacity on about glow */
                } else if (greenOpacAbout > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacAbout = 0.5     /** sets green opacity on about glow */
                }

            } else if (aboutUp && upped) {      /** if player is in about road above entrance and pressing up */
                yellOpacAbout += 0.023      /** yellow opacity increments per block */
                yellowGlowAbout.css('opacity', yellOpacAbout)      /** displays yellow opacity on about glow */

                greenOpacAbout -= 0.038      /** green opacity decrements per block */
                greenGlowAbout.css('opacity', greenOpacAbout)      /** displays green opacity on about glow */

                if (yellOpacAbout <= 0) {       /** if yellow opacity is less than or equal to 0 */
                    yellOpacAbout = 0.023     /** sets yellow opacity on about glow */
                } else if (yellOpacAbout > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacAbout = 0.3     /** sets yellow opacity on about glow */
                }

                if (greenOpacAbout <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacAbout = 0.038     /** sets green opacity on about glow */
                } else if (greenOpacAbout > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacAbout = 0.5     /** sets green opacity on about glow */
                }

            } else if (aboutDown && downed) {      /** if player is in about road below entrance and pressing down */
                yellOpacAbout += 0.05      /** yellow opacity increments per block */
                yellowGlowAbout.css('opacity', yellOpacAbout)      /** displays yellow opacity on about glow */

                greenOpacAbout -= 0.083      /** green opacity decrements per block */
                greenGlowAbout.css('opacity', greenOpacAbout)      /** displays green opacity on about glow */

                if (yellOpacAbout <= 0) {       /** if yellow opacity is less than or equal to 0 */
                    yellOpacAbout = 0.05     /** sets yellow opacity on about glow */
                } else if (yellOpacAbout > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacAbout = 0.3     /** sets yellow opacity on about glow */
                }

                if (greenOpacAbout <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacAbout = 0.083     /** sets green opacity on about glow */
                } else if (greenOpacAbout > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacAbout = 0.5     /** sets green opacity on about glow */
                }

            } else if (aboutDown && upped) {      /** if player is in about road below entrance and pressing up */
                yellOpacAbout -= 0.05      /** yellow opacity decrements per block */
                yellowGlowAbout.css('opacity', yellOpacAbout)      /** displays yellow opacity on about glow */

                greenOpacAbout += 0.083      /** green opacity increments per block */
                greenGlowAbout.css('opacity', greenOpacAbout)      /** displays green opacity on about glow */

                if (yellOpacAbout <= 0) {       /** if yellow opacity is less than or equal to 0 */
                    yellOpacAbout = 0.05     /** sets yellow opacity on about glow */
                } else if (yellOpacAbout > 0.3) {        /** if yellow opacity is greater than 0.3 */
                    yellOpacAbout = 0.3     /** sets yellow opacity on about glow */
                }

                if (greenOpacAbout <= 0) {       /** if green opacity is less than or equal to 0 */
                    greenOpacAbout = 0.083     /** sets green opacity on about glow */
                } else if (greenOpacAbout > 0.5) {        /** if green opacity is greater than 0.5 */
                    greenOpacAbout = 0.5     /** sets green opacity on about glow */
                }
            }

        } else if (aboutStayGreen.indexOf(markerLocation) > -1) {     /** if player is in about entrance road */
            greenOpacAbout = 0.5     /** sets green opacity on about glow */
            greenGlowAbout.css('opacity', greenOpacAbout)     /** displays green opacity on about glow */

        } else {        /** if player is not on about road */
            whiteGlowAbout.css('display', 'block')        /** white glow displayed */
            yellowGlowAbout.css('display', 'none')        /** yellow glow not displayed */
            greenGlowAbout.css('display', 'none')        /** green glow not displayed */

            yellOpacAbout = 0.3       /** resets yellow opacity */
            greenOpacAbout = 0       /** resets green opacity */
        }
        /** above glow effects on about section pokeball */






    })      /** ends keyboard event listener */


    document.addEventListener('keyup', () => {
        $('#downBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
        $('#upBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
        $('#leftBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
        $('#rightBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })

        if (righted) {
            setTimeout(() => {
                $('#marker').css('transform', 'rotateY(0deg)')    
            }, 6500)
        }
    })


})



let markerLocation = ''

let arr = []
let coinArr = []

let contArr = []
let contStayGreen = []

let projArr = []
let projStayGreen = []

let aboutArr = []
let aboutStayGreen = []

let downed = false
let upped = false
let righted = false
let lefted = false

let yesPurchedCont = false
let yesPurchedProj = false
let yesPurchedAbout = false

let yellOpacCont = 0.3
let greenOpacCont = 0

let yellOpacProj = 0.3
let greenOpacProj = 0

let yellOpacAbout = 0.3
let greenOpacAbout = 0

let coinCount = 0
let leftedCount = false

let started;


let buttons = document.getElementsByClassName('nes-btn')

let yesPurchBtn = document.getElementsByClassName('yesPurch')       /** pulls yes purchase buttons from DOM */
let noPurchBtn = document.getElementsByClassName('noPurch')     /** pulls no purchase buttons from DOM */
let getMoreDiv = document.getElementsByClassName('getMore')     /** pulls get more divs from DOM */
let moreCoinsBtn = document.getElementsByClassName('moreCoins')     /** pulls more coins buttons from DOM */
let closeBtn = document.getElementsByClassName('close')     /** pulls close buttons from DOM */


let speed = 50
let iDev = 0
let txtDev = 'Developer'
let iDem = 0
let txtDem = 'Demi'
let iProj = 0
let txtProj = 'projects'
let iCont = 0
let txtCont = 'contact'
let iMe = 0
let txtMe = 'about'
let iSkip = 0
let txtSkip = 'skip'

function typeWriterDev() {
    if (iDev < txtDev.length) {
        document.getElementById('devType').innerHTML += txtDev.charAt(iDev)
        iDev++
        setTimeout(typeWriterDev, speed)
    }

    setTimeout(function typeWriterDemi() {
        if (iDem < txtDem.length) {
            document.getElementById('demiType').innerHTML += txtDem.charAt(iDem)
            iDem++
            setTimeout(typeWriterDemi, 100)
        }
    }, 650)

    setTimeout(function typeWriterProj() {
        if (iProj < txtProj.length) {
            document.getElementById('projType').innerHTML += txtProj.charAt(iProj)
            iProj++
            setTimeout(typeWriterProj, speed)
        }
    }, 2000)

    setTimeout(function typeWriterCont() {
        if (iCont < txtCont.length) {
            document.getElementById('contType').innerHTML += txtCont.charAt(iCont)
            iCont++
            setTimeout(typeWriterCont, speed)
        }
    }, 3000)

    setTimeout(function typeWriterMe() {
        if (iMe < txtMe.length) {
            document.getElementById('meType').innerHTML += txtMe.charAt(iMe)
            iMe++
            setTimeout(typeWriterMe, speed)
        }
    }, 4000)

    setTimeout(function typeWriterSkip() {
        if (iSkip < txtSkip.length) {
            document.getElementById('skip').innerHTML += txtSkip.charAt(iSkip)
            iSkip++
            setTimeout(typeWriterSkip, speed)
        }
    }, 7000)
}




const Deduct = () => {
    // console.log(coinCount)
    coinCount -= 112
    document.getElementById('coinNum').innerText = coinCount
    // console.log(coinCount)
}
