from deepface import DeepFace
import cv2
import matplotlib.pyplot as plt

img1=cv2.imread("taner1.jpg")
img2=cv2.imread("taner2.jpg")

cv2.imshow('img1',img1)
cv2.waitKey(0)
cv2.imshow('img2',img2)
cv2.waitKey(0)
cv2.destroyAllWindows()

karsilastir=DeepFace.verify("a1.jpg", "a2.jpg"
                           ,model_name="DeepFace",
                            distance_metric="euclidean_l2") 
                           
# diğer kullanılabilecek modeller : VGG-Face Facenet OpenFace
# diğer kullanılabilecek metricler euclidean cosine  
if karsilastir["verified"]==True:
    sonuc ="İki resim aynı kişiye aittir."
else :
    sonuc = "İki resim farklı kişilere aittir."

print(sonuc)