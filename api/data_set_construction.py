import numpy as np
import matplotlib.pyplot as plt
import os
import cv2
import random
from sklearn.model_selection import train_test_split

# adjust size?
IMG_SIZE = 50

DATA_DIR = "C:/Users/Victor/Documents/garbage_classification"
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


def create_training_data():
    for category in CATEGORIES:
        path = os.path.join(DATA_DIR, category)
        classification_number = CATEGORIES.index(category)
        for img in os.listdir(path):
            # check with shaun whether or not we should have images be tested
            # for color, or just gray scale
            img_array = cv2.imread(os.path.join(path, img), cv2.IMREAD_COLOR)
            new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
            training_data.append([new_array, classification_number])


training_data = []
create_training_data()
random.shuffle(training_data)


X = np.array([item[0] for item in training_data])
y = np.array([item[1] for item in training_data])

# normalize..?
X = X / 255.0

# print(X.shape)

# X = X.reshape(-1, IMG_SIZE, IMG_SIZE, 3)
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

np.save("X_train.npy", X)
np.save("y_train.npy", y)
np.save("X_val.npy", X_val)
np.save("y_val.npy", y_val)