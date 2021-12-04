from random import randint

min = 0
max = 100
number = randint(0, max)
isFind = False

steps = 0
# 87
while not isFind:
    answer = input(f"it is {number}? \n")
    if answer == "less":
        max = number
        number -= round((max - min) / 2)
    elif answer == "greater":
        min = number
        number += round((max - min) / 2)
    else:
        isFind = True
        print("Is find!! you win %s" % steps)
    steps += 1
