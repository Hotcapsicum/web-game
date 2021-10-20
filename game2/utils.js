var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    // a 是砖块，分为从上碰撞和下碰撞
    // 砖块和弹珠
    var o = a
    if(o.speedX) {
        // log('o is ball, b is block')
        // ball.y 大于 block.y，说明block在上面
        if (b.y > o.y && b.y <= o.y + o.image.height) {
            if (b.x > o.x && b.x < o.x + o.image.width) {
                return true
            }
        }
    } else {
        // log('o is block, b is ball')
        if (b.y >= o.y && b.y <= o.y + o.image.height) {
            if (b.x > o.x && b.x < o.x + o.image.width) {
                return true
            }
        }
    }
    // if (b.y > o.y && b.y < o.y + o.image.height) {
    //     if (b.x > o.x && b.x < o.x + o.image.width) {
    //         return true
    //     }
    // }
    return false
}
