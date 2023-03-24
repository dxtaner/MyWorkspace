import cv2
import numpy as np
from yolov8 import YOLOv8
from deep_sort import DeepSORT

# Initialize YOLOv8 object detector and Deep SORT tracker
yolov8 = YOLOv8()
deepsort = DeepSORT()

# Load video file
video_path = 'carsvideo.mp4'
cap = cv2.VideoCapture(video_path)

# Define output video writer
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4', fourcc, fps, (width, height))

# Loop through video frames
while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Detect objects using YOLOv8
    objects = yolov8.detect(frame)
    
    # Track objects using Deep SORT
    tracks = deepsort.update(objects)
    
    # Draw bounding boxes and track IDs on the frame
    for track in tracks:
        bbox = track.to_bbox()
        cv2.rectangle(frame, bbox, (0, 255, 0), 2)
        cv2.putText(frame, str(track.track_id), (bbox[0], bbox[1] - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
    
    # Write frame to output video
    out.write(frame)
    
    # Show the frame
    cv2.imshow('Object tracking', frame)
    
    # Press 'q' to quit
    if cv2.waitKey(1) == ord('q'):
        break

# Release resources
cap.release()
out.release()
cv2.destroyAllWindows()
