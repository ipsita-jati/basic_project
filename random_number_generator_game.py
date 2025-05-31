import random

num = random.randint(1, 100)
chance = 0
point = 7
while chance < 7 :
    res = input("Enter Your guess which is between 1 to 100: ")
    guess = int(res)
    if len(res) <= 3: 
        if num == guess:
            print("Congratulation.You guess the number!")
            print("Your score is:" +str(point))
            break
        elif num > guess:
            print("Your guess is too low.Try again!")
        else:
            print("Your guess is too high.Try again!")
    else:
        print("Guess is out of range.Try again!")
    chance += 1
    point -=1
    
if(chance == 7):
    print("The correct answer is:" +str(num))
    print("Your score is: 0")
