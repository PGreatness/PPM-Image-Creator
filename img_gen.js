const fs = require('fs')

var colors = ""

var col = function make_colors(x, y) {
    if (isNaN(x) || isNaN(y)) { throw new Error("Values entered not allowed") }
    var retCol = ""
    retCol = `P3\n${x} ${y}\n255\n\n` // reset
    for (i = 0; i < x; i++) {
        for (w = 0; w < x; w++) {
            retCol += `${i % 256} ${w % 256} ${Math.abs( i - w )} `
        }
        retCol += "\n"
    }
    return retCol
}

var rand = function(x, y) {
    if (isNaN(x) || isNaN(y)) { throw new Error("Values entered not allowed") }
    var retCol = ""
    retCol = `P3\n${x} ${y}\n255\n\n` // reset
    for (i = 0; i < x; i++) {
        for (w = 0; w < x; w++) {
            retCol += `${Math.floor((Math.random() * 100) % 256)} ${Math.floor((Math.random() * 100) % 256)} ${(i * w) % 256} `
        }
        retCol += "\n"
    }
    return retCol
}
colors = rand(650, 650)

fs.writeFile('img.ppm', colors, (err) =>{
    if (err) console.log(err)
})