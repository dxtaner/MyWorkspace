import pyautogui
import time


BOX_X = 500
BOX_Y = 400
BOX_WIDTH = 60
BOX_HEIGHT = 40

JUMP_KEY = "space"
CHECK_INTERVAL = 0.01


def is_obstacle():
    screenshot = pyautogui.screenshot(
        region=(BOX_X, BOX_Y, BOX_WIDTH, BOX_HEIGHT)
    )
    pixels = screenshot.getdata()                                                                                                                                                                          

    for pixel in pixels:
        if pixel[0] < 100:
            return True
    return False


def main():
    print("🦖 Dino bot starting in 3 seconds...")
    time.sleep(3)
    print("🚀 Running!")

    while True:
        if is_obstacle():
            pyautogui.press(JUMP_KEY)
            time.sleep(0.05)


if __name__ == "__main__":
    main()
