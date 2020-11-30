## 使用方法：
            
引入light.css和light.js，容器添加id,由于黑色遮罩层是按照绝对定位来定义宽高，所以如果只需要
在一部分页面显示夜间模式，容器外层div应设置为相对定位，之后实例化Light类配置参数即可，
            
以下为常用配置，除id为必填外均可不填：
```
                let light = new Light({
                    id: 'lightDemo',//容器id
                    nightBgColor: '#000',//夜间模式背景色
                    lightRadius: 150,//光圈半径
                    bgColor: '#fff',//白天模式背景色
                    lightBorder: 50//光圈模糊部分半径
                })
```
演示地址:[手电筒式夜间模式](http://149.129.59.121/light)