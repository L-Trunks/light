class Light {
    constructor({ id = '', lightColor = "#fff", nightBgColor = "#000", lightRadius = 100, bgColor = "#fff", lightBorder = 50 }) {
        this.element = id //容器id
        this.bgColor = bgColor //背景色
        this.lightColor = lightColor //灯光颜色，默认白色
        this.nightBgColor = nightBgColor//夜间模式时背景色，默认黑色
        this.lightRadius = lightRadius//灯光半径,默认100
        this.lightBorder = lightBorder //灯光模糊部分半径,默认50
        this.setStyleAndOnChange()
    }
    //设置样式和监听
    setStyleAndOnChange(lightColor, nightBgColor) {
        lightColor ? this.lightColor = lightColor : ''
        nightBgColor ? this.nightBgColor = nightBgColor : ''
        let box = document.getElementById(this.element)
        let chooseBtn = document.createElement('div')
        chooseBtn.innerHTML = `<input type="checkbox" name="radio" id="radio" class="choose-btn light-choose-btn" />
        <label for="radio" class="choose-label"></label>`
        box.setAttribute('class', box.getAttribute('class').concat(' t-light'))
        chooseBtn.setAttribute('class', 'choose-box')
        box.appendChild(chooseBtn) 
        let chooseDom = document.getElementsByClassName('light-choose-btn')[0]
        chooseDom.addEventListener('change', (e) => {
            if (e.target.checked) {
                box.style.background = this.nightBgColor.colorRgb()
                box.addEventListener('mousemove', (e) => {
                    let isChecked = chooseDom.checked
                    if (isChecked) {
                        box.style.cursor = 'none'
                        box.style.background = `radial-gradient(80px 80px at ${e.clientX}px ${e.clientY}px, transparent, transparent ${this.lightRadius}px, ${this.nightBgColor.colorRgb()} ${+this.lightRadius + +this.lightBorder}px)`;
                    }
                })
            } else {
                box.style.background = this.bgColor
                box.style.cursor = 'auto'
            }
        })
    }
}

String.prototype.colorRgb = function () {
    // 16进制颜色值的正则
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写
    var color = this.toLowerCase();
    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            var colorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgba(" + colorChange.join(",") + ",1)";
    } else {
        return color;
    }
};
