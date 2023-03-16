import cv2

# Load image
img = cv2.imread('image.png')

# Set up MSER algorithm for text detection
mser = cv2.MSER_create()

# Convert image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Detect text regions using MSER algorithm
text_regions, _ = mser.detectRegions(gray)

# Draw bounding boxes around text regions
for region in text_regions:
    x, y, w, h = cv2.boundingRect(region)
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display output image
cv2.imshow('Output', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
