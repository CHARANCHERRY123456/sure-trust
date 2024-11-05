import pyautogui 
import random
import time

while True:
    x, y = random.randint(600, 700), random.randint(200, 500)
    pyautogui.moveTo(x, y)
    time.sleep(1)
