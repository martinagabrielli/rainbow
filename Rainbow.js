const RainbowFactory = function(element) {
    let root = null
    let container = null

    if(element != '') {
        root = document.getElementById(element)
        div1 = document.createElement('div')
        div2 = document.createElement('div')
        div3 = document.createElement('div')
        div4 = document.createElement('div')
        div5 = document.createElement('div')
        div6 = document.createElement('div')
        div7 = document.createElement('div')
        div1.className = 'rainbow-arc red'
        div2.className = 'rainbow-arc orange'
        div3.className = 'rainbow-arc yellow'
        div4.className = 'rainbow-arc green'
        div5.className = 'rainbow-arc blue'
        div6.className = 'rainbow-arc indigo'
        div7.className = 'rainbow-arc purple'
        root.appendChild(div1)
        div1.appendChild(div2)
        div2.appendChild(div3)
        div3.appendChild(div4)
        div4.appendChild(div5)
        div5.appendChild(div6)
        div6.appendChild(div7)
    }
}