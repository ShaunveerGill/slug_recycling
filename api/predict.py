import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import cv2
import tensorflow as tf
import numpy as np
import sys


IMG_SIZE = 50
MODEL_PATH = 'model_3.h5'
# FILE_PATH_TEST = "C:/Users/Victor/Documents/sample_images/trash1.jpg"

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

def resize(file_path):
    img_array = cv2.imread(file_path, cv2.IMREAD_COLOR)
    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)

# model = tf.keras.models.load_model("model_3.h5")

# prediction = model.predict(resize(FILE_PATH_TEST))
# print(CATEGORIES[np.argmax(prediction[0])])

# prediction = model.predict([normalized_test_image])
# print(CATEGORIES[int(np.argmax(prediction, axis=1))])
# print(CATEGORIES[np.argmax(prediction[0])])


if __name__ == "__main__":
    try:
        if len(sys.argv) != 2:
            raise ValueError('Invalid number of arguments.')

        image_path = sys.argv[1]

        # load model
        model = tf.keras.models.load_model(MODEL_PATH)
        prediction = model.predict(resize(image_path))
        result = np.argmax(prediction[0])
    except Exception as e:
            print(f"Error: {str(e)}")
