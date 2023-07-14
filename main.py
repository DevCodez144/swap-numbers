a = game.ask_for_number("Enter a Number")
b = game.ask_for_number("Enter a Number")
temp = a
a = b
b = temp
game.splash(a, b)