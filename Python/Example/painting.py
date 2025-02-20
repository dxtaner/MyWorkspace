import cv2
import numpy as np


class PixelPainter:
    def __init__(self):
        self.canvas = np.zeros((512, 512, 3), np.uint8)  # 512x512 boyutunda siyah bir tuval oluştur

        cv2.namedWindow("Pixel Painter")
        cv2.setMouseCallback("Pixel Painter", self.draw)  # fare olaylarını takip etmek için tıklama işlevini tanımla

    def draw(self, event, x, y, flags, param):
        if event == cv2.EVENT_LBUTTONDOWN:  # sol tıklama algılama
            color = np.random.randint(0, 255, (3,)).tolist()  # rastgele bir renk oluştur
            self.canvas[y, x] = color  # pikseli boyama

            cv2.imshow("Pixel Painter", self.canvas)  # güncellenen tuvali göster

    def run(self):
        while True:
            cv2.imshow("Pixel Painter", self.canvas)
            key = cv2.waitKey(1) & 0xFF

            if key == ord("q"):  # "q" tuşuna basarak programdan çık
                break

        cv2.destroyAllWindows()


if __name__ == "__main__":
    painter = PixelPainter()
    painter.run()
