let a = game.askForNumber("Enter a Number")
let b = game.askForNumber("Enter a Number")
game.splash("a = " + a, "b = " + b)
let temp = a
a = b
b = temp
game.splash("a = " + a, "b = " + b)
