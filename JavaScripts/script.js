$(document).ready(() => {


    let lefter = buttons[0]
    let upper = buttons[1]
    let righter = buttons[2]
    let downer = buttons[3]

    let contArrUp = contArr.slice(0, 14)      /** sets contact road from top of entrance */
    let contArrDown = contArr.slice(14)     /** sets contact road from bottom of entrance */

    let projArrLeft = projArr.slice(0, 32)      /** sets project road from left of entrance */
    let projArrRight = projArr.slice(32)        /** sets project road from right of entrance */

    let aboutArrUp = aboutArr.slice(0, 13)      /** sets about road from top of entrance */
    let aboutArrDown = aboutArr.slice(13)       /** sets about road from bottom of entrance */

    let contactUp;
    let contactDown;
    let whiteGlowCont = $('#contEnter')     /** assigns variable to contact white glow */
    let yellowGlowCont = $('#contEnterYellow')     /** assigns variable to contact yellow glow */
    let greenGlowCont = $('#contEnterGreen')     /** assigns variable to contact green glow */


    let projectLeft;
    let projectRight;
    let whiteGlowProj = $('#projEnter')     /** assigns variable to project white glow */
    let yellowGlowProj = $('#projEnterYellow')     /** assigns variable to project yellow glow */
    let greenGlowProj = $('#projEnterGreen')     /** assigns variable to project green glow */


    let aboutUp;
    let aboutDown;
    let whiteGlowAbout = $('#aboutEnter')     /** assigns variable to about white glow */
    let yellowGlowAbout = $('#aboutEnterYellow')     /** assigns variable to about yellow glow */
    let greenGlowAbout = $('#aboutEnterGreen')     /** assigns variable to about green glow */



    downer.onmousedown = () => {
        downed = true       /** on switch for opacity changes */
        upped = false       /** off switch for opacity changes */
        righted = false     /** off switch for opacity changes */
        lefted = false      /** off switch for opacity changes */

        started = setInterval(() => {
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


            /** below contact road glow effect */
            if (contArr.indexOf(markerLocation) > -1) {
                whiteGlowCont.css('display', 'none')        /** white glow not displayed */
                yellowGlowCont.css('display', 'block')      /** yellow glow displayed */
                greenGlowCont.css('display', 'block')       /** green glow displayed */

                contactUp = contArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, top of entrance road */
                contactDown = contArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, bottom of entrance road */

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

                } else if (contactDown && downed) {
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

                } else {        /** if player is not on contact road */
                    whiteGlowCont.css('display', 'block')       /** white glow displayed */
                    yellowGlowCont.css('display', 'none')       /** yellow glow not displayed */
                    greenGlowCont.css('display', 'none')        /** green glow not displayed */

                    yellOpacCont = 0.3      /** resets yellow opacity */
                    greenOpacCont = 0       /** resets green opacity */
                }
            }
            /** above contact road glow effect */

            if (projStayGreen.indexOf(markerLocation) > -1) {     /** if player is in project entrance road */
                greenOpacProj = 0.5     /** sets green opacity on project glow */
                greenGlowProj.css('opacity', greenOpacProj)     /** displays green opacity on project glow */

            } else {     /** if player is on project road */
                whiteGlowProj.css('display', 'block')        /** white glow displayed */
                yellowGlowProj.css('display', 'none')        /** yellow glow not displayed */
                greenGlowProj.css('display', 'none')        /** green glow not displayed */

                yellOpacProj = 0.3       /** resets yellow opacity */
                greenOpacProj = 0       /** resets green opacity */
            }



            if (aboutArr.indexOf(markerLocation) > -1) {
                whiteGlowAbout.css('display', 'none')        /** white glow not displayed */
                yellowGlowAbout.css('display', 'block')        /** yellow glow displayed */
                greenGlowAbout.css('display', 'block')        /** green glow displayed */

                aboutUp = aboutArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, top of entrance road */
                aboutDown = aboutArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, bottom of entrance road */

                if (aboutUp && downed) {
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
                } else if (aboutDown && downed) {
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
                }
            } else {        /** if player is not on about road */
                whiteGlowAbout.css('display', 'block')        /** white glow displayed */
                yellowGlowAbout.css('display', 'none')        /** yellow glow not displayed */
                greenGlowAbout.css('display', 'none')        /** green glow not displayed */

                yellOpacAbout = 0.3       /** resets yellow opacity */
                greenOpacAbout = 0       /** resets green opacity */
            }

            $('#marker').css('transform', 'rotateY(0deg)')

        }, 50)
    }
    downer.onmouseup = () => {
        clearInterval(started)
        $('#marker').css('animation', 'markered 3s infinite 6.5s')        /** sets 6.5 second delay on animation after pressing a key */
    }


    upper.onmousedown = () => {
        downed = false       /** off switch for opacity changes */
        upped = true       /** on switch for opacity changes */
        righted = false       /** off switch for opacity changes */
        lefted = false       /** off switch for opacity changes */

        started = setInterval(() => {
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

            if (markerLocation == 2590) {       /** if player reaches project section */
                $('#purchaseModalProj').css('display', 'block')     /** displays purchase modal for project section */
                clearInterval(started)

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
            }


            /** below contact road glow effect */
            if (contArr.indexOf(markerLocation) > -1) {
                whiteGlowCont.css('display', 'none')        /** white glow not displayed */
                yellowGlowCont.css('display', 'block')      /** yellow glow displayed */
                greenGlowCont.css('display', 'block')       /** green glow displayed */

                contactUp = contArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, top of entrance road */
                contactDown = contArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on contact road, bottom of entrance road */

                if (contactUp && upped) {
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
                } else if (contactDown && upped) {
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
                } else {        /** if player is not on contact road */
                    whiteGlowCont.css('display', 'block')       /** white glow displayed */
                    yellowGlowCont.css('display', 'none')       /** yellow glow not displayed */
                    greenGlowCont.css('display', 'none')        /** green glow not displayed */

                    yellOpacCont = 0.3      /** resets yellow opacity */
                    greenOpacCont = 0       /** resets green opacity */
                }
            }
            /** above contact road glow effect */

            if (projStayGreen.indexOf(markerLocation) > -1) {     /** if player is in project entrance road */
                greenOpacProj = 0.5     /** sets green opacity on project glow */
                greenGlowProj.css('opacity', greenOpacProj)     /** displays green opacity on project glow */

            } else {        /** if player is not on project road */
                whiteGlowProj.css('display', 'block')        /** white glow displayed */
                yellowGlowProj.css('display', 'none')        /** yellow glow not displayed */
                greenGlowProj.css('display', 'none')        /** green glow not displayed */

                yellOpacProj = 0.3       /** resets yellow opacity */
                greenOpacProj = 0       /** resets green opacity */
            }


            if (aboutArr.indexOf(markerLocation) > -1) {
                whiteGlowAbout.css('display', 'none')        /** white glow not displayed */
                yellowGlowAbout.css('display', 'block')        /** yellow glow displayed */
                greenGlowAbout.css('display', 'block')        /** green glow displayed */

                aboutUp = aboutArrUp.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, top of entrance road */
                aboutDown = aboutArrDown.indexOf(markerLocation) > -1      /** assigns variable if player is on about road, bottom of entrance road */

                if (aboutUp && upped) {
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
                } else if (aboutDown && upped) {
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
            } else {        /** if player is not on about road */
                whiteGlowAbout.css('display', 'block')        /** white glow displayed */
                yellowGlowAbout.css('display', 'none')        /** yellow glow not displayed */
                greenGlowAbout.css('display', 'none')        /** green glow not displayed */

                yellOpacAbout = 0.3       /** resets yellow opacity */
                greenOpacAbout = 0       /** resets green opacity */
            }

            $('#marker').css('transform', 'rotateY(0deg)')
            // $('#leftBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })

        }, 50)
    }
    upper.onmouseup = () => {
        clearInterval(started)
        $('#marker').css('animation', 'markered 3s infinite 6.5s')        /** sets 6.5 second delay on animation after pressing a key */
    }


    righter.onmousedown = () => {
        downed = false       /** off switch for opacity changes */
        upped = false       /** off switch for opacity changes */
        righted = true       /** on switch for opacity changes */
        lefted = false       /** off switch for opacity changes */

        started = setInterval(() => {
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

            if (markerLocation == 2313) {       /** if player reaches contact section */
                $('#purchaseModalCont').css('display', 'block')     /** displays purchase modal for contact section */
                clearInterval(started)

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
            } else if (markerLocation == 4178) {       /** if player reaches about section */
                $('#purchaseModalAbout').css('display', 'block')     /** displays purchase modal for about section */
                clearInterval(started)

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

            if (contStayGreen.indexOf(markerLocation) > -1) {     /** if player is in contact entrance road */
                greenOpacCont = 0.5     /** sets green opacity on contact glow */
                greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */
            } else {
                whiteGlowCont.css('display', 'block')       /** white glow displayed */
                yellowGlowCont.css('display', 'none')       /** yellow glow not displayed */
                greenGlowCont.css('display', 'none')        /** green glow not displayed */

                yellOpacCont = 0.3      /** resets yellow opacity */
                greenOpacCont = 0       /** resets green opacity */
            }

            if (projArr.indexOf(markerLocation) > -1) {
                whiteGlowProj.css('display', 'none')        /** white glow not displayed */
                yellowGlowProj.css('display', 'block')        /** yellow glow displayed */
                greenGlowProj.css('display', 'block')        /** green glow displayed */

                projectLeft = projArrLeft.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, left of entrance road */
                projectRight = projArrRight.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, right of entrance road */

                if (projectLeft && righted) {
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
                } else if (projectRight && righted) {
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
                } else {        /** if player is not on project road */
                    whiteGlowProj.css('display', 'block')        /** white glow displayed */
                    yellowGlowProj.css('display', 'none')        /** yellow glow not displayed */
                    greenGlowProj.css('display', 'none')        /** green glow not displayed */

                    yellOpacProj = 0.3       /** resets yellow opacity */
                    greenOpacProj = 0       /** resets green opacity */
                }
            }


            if (aboutStayGreen.indexOf(markerLocation) > -1) {     /** if player is in about entrance road */
                greenOpacAbout = 0.5     /** sets green opacity on about glow */
                greenGlowAbout.css('opacity', greenOpacAbout)     /** displays green opacity on about glow */

            } else {        /** if player is not on about road */
                whiteGlowAbout.css('display', 'block')        /** white glow displayed */
                yellowGlowAbout.css('display', 'none')        /** yellow glow not displayed */
                greenGlowAbout.css('display', 'none')        /** green glow not displayed */

                yellOpacAbout = 0.3       /** resets yellow opacity */
                greenOpacAbout = 0       /** resets green opacity */
            }

            $('#marker').css('transform', 'rotateY(180deg)')

        }, 50)

    }
    righter.onmouseup = () => {
        clearInterval(started)
        $('#marker').css('animation', 'markered 3s infinite 6.5s')        /** sets 6.5 second delay on animation after pressing a key */
        setTimeout(() => {
            $('#marker').css('transform', 'rotateY(0deg)')
        }, 6500)
    }


    lefter.onmousedown = () => {
        downed = false       /** off switch for opacity changes */
        upped = false       /** off switch for opacity changes */
        righted = false       /** off switch for opacity changes */
        lefted = true       /** on switch for opacity changes */

        started = setInterval(() => {
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

            if (contStayGreen.indexOf(markerLocation) > -1 || markerLocation == 2310) {     /** if player is in contact entrance road */
                greenOpacCont = 0.5     /** sets green opacity on contact glow */
                greenGlowCont.css('opacity', greenOpacCont)     /** displays green opacity on contact glow */
            } else {
                whiteGlowCont.css('display', 'block')       /** white glow displayed */
                yellowGlowCont.css('display', 'none')       /** yellow glow not displayed */
                greenGlowCont.css('display', 'none')        /** green glow not displayed */

                yellOpacCont = 0.3      /** resets yellow opacity */
                greenOpacCont = 0       /** resets green opacity */
            }



            if (projArr.indexOf(markerLocation) > -1) {
                whiteGlowProj.css('display', 'none')        /** white glow not displayed */
                yellowGlowProj.css('display', 'block')        /** yellow glow displayed */
                greenGlowProj.css('display', 'block')        /** green glow displayed */

                projectLeft = projArrLeft.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, left of entrance road */
                projectRight = projArrRight.indexOf(markerLocation) > -1      /** assigns variable if player is on project road, right of entrance road */

                if (projectLeft && lefted) {
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
                } else if (projectRight && lefted) {
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
                } else {        /** if player is not on project road */
                    whiteGlowProj.css('display', 'block')        /** white glow displayed */
                    yellowGlowProj.css('display', 'none')        /** yellow glow not displayed */
                    greenGlowProj.css('display', 'none')        /** green glow not displayed */

                    yellOpacProj = 0.3       /** resets yellow opacity */
                    greenOpacProj = 0       /** resets green opacity */
                }
            }



            if (aboutStayGreen.indexOf(markerLocation) > -1 || markerLocation == 4175) {     /** if player is in about entrance road */
                greenOpacAbout = 0.5     /** sets green opacity on about glow */
                greenGlowAbout.css('opacity', greenOpacAbout)     /** displays green opacity on about glow */

            } else {        /** if player is not on about road */
                whiteGlowAbout.css('display', 'block')        /** white glow displayed */
                yellowGlowAbout.css('display', 'none')        /** yellow glow not displayed */
                greenGlowAbout.css('display', 'none')        /** green glow not displayed */

                yellOpacAbout = 0.3       /** resets yellow opacity */
                greenOpacAbout = 0       /** resets green opacity */
            }

            $('#marker').css('transform', 'rotateY(0deg)')
            // if (lefted) {
            $('#leftBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })


        }, 50)
    }
    lefter.onmouseup = () => {
        clearInterval(started)
        $('#marker').css('animation', 'markered 3s infinite 6.5s')        /** sets 6.5 second delay on animation after pressing a key */
    }

    downer.onmouseover = () => {
        $('#downBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })
    }
    downer.onmouseout = () => {
        $('#downBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
    }
    upper.onmouseover = () => {
        $('#upBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })
    }
    upper.onmouseout = () => {
        $('#upBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
    }
    righter.onmouseover = () => {
        $('#rightBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })
    }
    righter.onmouseout = () => {
        $('#rightBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
    }
    lefter.onmouseover = () => {
        $('#leftBtn').css({ 'background': '#e7e7e7', 'color': '#212529' })
    }
    lefter.onmouseout = () => {
        $('#leftBtn').css({ 'background': 'var(--prime)', 'color': 'var(--seco)' })
    }

})


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