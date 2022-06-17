import"./styles/inde.css"
import "./styles/inde.less"

// 引入图片
import gifSrc from"./assets/1.gif"
import pngSrc from"./assets/logo_small.png"
import'./assets/fonts/iconfont.css'


// 创建图片节点
const gif=document.createElement('img')
const png=document.createElement('img')

// 3.给src
gif.src=gifSrc
png.src=pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)
tab()
marquee()

const fn = () => {
    console.log('sgg');
}

console.log(fn);