import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import cv2
import tensorflow as tf
import numpy as np
import sys


IMG_SIZE = 50
MODEL_PATH = 'model_x.h5'


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

def test_single_image(model, image_path):
    # Load the image
    test_image = cv2.imread(image_path)
    test_image = cv2.resize(test_image, (IMG_SIZE, IMG_SIZE))
    test_image = test_image / 255.0
    test_image = np.expand_dims(test_image, axis=0)

    # Make predictions
    predictions = model.predict(test_image, verbose = 0)

    # Interpret predictions
    predicted_label_index = np.argmax(predictions)
    # predicted_label = CATEGORIES[predicted_label_index]

    return predicted_label_index

if __name__ == "__main__":
    try:
        if len(sys.argv) != 2:
            raise ValueError('Invalid number of arguments.')

        image_path = sys.argv[1]

        # load model
        model = tf.keras.models.load_model(MODEL_PATH)
        # prediction = model.predict(resize(image_path))
        prediction = test_single_image(model, image_path)
        # accomodate 1 indexing
        result = prediction + 1
        # necessary to work..? guess it need to be in stdout
        print(result)
        # convert back to 0 indexing to view
        # print(CATEGORIES[result - 1], result - 1)
    except Exception as e:
            print(f"Error: {str(e)}")
