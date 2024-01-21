import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D, GlobalAveragePooling2D
from tensorflow.keras.callbacks import TensorBoard, ModelCheckpoint
from tensorflow.keras.regularizers import l2
import tensorflow.keras.utils as utils

from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.applications import VGG16

import numpy as np
import matplotlib.pyplot as plt
import cv2
import time

IMG_SIZE = 50
FILE = "model_x.h5"
CATEGORIES = [
    "battery",
    "biological", 
    "brown-glass", 
    "cardboard",
    "clothes",
    "green-glass",
    "metal",
    "paper",
    "plastic",
    "shoes",
    "trash",
    "white-glass"
]

def test_single_image(model, image_path, true_label, counter):
    # Load the image
    test_image = cv2.imread(image_path)
    test_image = cv2.resize(test_image, (IMG_SIZE, IMG_SIZE))
    test_image = test_image / 255.0
    test_image = np.expand_dims(test_image, axis=0)

    # Make predictions
    predictions = model.predict(test_image)

    # Interpret predictions
    predicted_label_index = np.argmax(predictions)
    predicted_label = CATEGORIES[predicted_label_index]

    print(f"Predicted Label: {predicted_label}, True Label: {true_label}")
    if predicted_label == true_label:
        counter = counter + 1
    
    return counter

# Test with a sample image
model = tf.keras.models.load_model(FILE)
# true_label = 4
correct_predictions = 0
maxx = 300
for true_label in range(0, 12):
    for i in range(1, maxx):
        path = f"C:/Users/Victor/Documents/garbage_classification/{CATEGORIES[true_label]}/{CATEGORIES[true_label]}{i}.jpg"
        correct_predictions = test_single_image(model, path, CATEGORIES[true_label], correct_predictions)
        # print("hello {}".format(i))
    with open('output_file.txt', 'a') as filee:
        print(f"Number of correct pred: {correct_predictions} out of {maxx} or {correct_predictions / maxx}", file=filee)
    correct_predictions = 0

