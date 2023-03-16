import cv2
import numpy as np

# Load image
img = cv2.imread('image.png')

# Convert image to BGR color space
bgr_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

# Define lower and upper bounds for color detection (in BGR format)
lower_bound = np.array([0, 0, 0])
upper_bound = np.array([255, 255, 255])

# Create mask for pixels within color bounds
mask = cv2.inRange(bgr_img, lower_bound, upper_bound)

# Apply mask to input image
result = cv2.bitwise_and(img, img, mask=mask)

# Find contours in mask image
contours, hierarchy = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

# Loop over contours and extract color of each detected object
for contour in contours:
    # Extract bounding box coordinates for contour
    x, y, w, h = cv2.boundingRect(contour)
    
    # Extract color of object
    color = np.mean(bgr_img[y:y+h, x:x+w], axis=(0, 1))
    
    # Draw bounding box and text label in output image
    cv2.rectangle(result, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.putText(result, f"Color: {color}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

# Display output image
cv2.imshow('Output', result)
cv2.waitKey(0)
cv2.destroyAllWindows()
