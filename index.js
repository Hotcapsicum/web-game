new Vue({
    el:'#app',
    data(){
        return {
            viewImg: false,
            imgUrl: null
        }
    },
    mounted() {
        this.draw1()
        this.draw2()
        this.draw3()
        this.draw4()
        this.draw5()
    },
    methods: {
        showImg(val) {
            this.imgUrl = './game1/code' + val + '.png'
            this.viewImg = !this.viewImg
        },
        disImage() {
            this.viewImg = false
        },
        draw1() {
            var canvas = document.getElementById('canvas1')
            // 创建画板
            var context = canvas.getContext('2d')
            // 填充形状
            context.fillRect(10, 10, 55, 50);
            // 填充颜色
            context.fillStyle = 'black';
        },
        draw2() {
            var canvas = document.getElementById('canvas2')
            var context = canvas.getContext('2d')
            context.fillRect(25, 25, 100, 100);
            context.clearRect(50, 50, 50, 50);
        },
        draw3() {
            var canvas = document.getElementById('canvas3')
            var context = canvas.getContext('2d')
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(100, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 100);
            context.fillStyle = '#e8313e'
            context.fill();
        },
        draw4() {
            var canvas = document.getElementById('canvas4')
            var context = canvas.getContext('2d')
            context.beginPath();
            context.moveTo(50, 50);
            context.arc(50, 50, 25, 0, 2 * Math.PI, true);
            context.fillStyle = '#187aea'
            context.fill();
        },
        draw5() {
            var canvas = document.getElementById('canvas5')
            var context = canvas.getContext('2d')
            // createLinearGradient 定义从黑到白的渐变（从左向右），作为矩形的填充样式
            var grd = context.createLinearGradient(0,0,175,50);
            grd.addColorStop(0,"#FF0000");
            grd.addColorStop(1,"#00FF00");
            context.fillStyle = grd
            context.fillRect(0,0,175,50);
        }
    }
})

