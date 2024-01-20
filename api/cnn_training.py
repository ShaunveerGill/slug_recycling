import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D
import tensorflow.keras.utils as utils

import numpy as np
import matplotlib.pyplot as plt
import cv2

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

# load our data
X_train = np.load("X_train.npy")
y_train = np.load("y_train.npy")

# normalize our data
X_train = tf.keras.utils.normalize(X_train, axis=1)
y_train = utils.to_categorical(y_train, num_classes=len(CATEGORIES))

# building the model
# some notes: conv can be followed by either: maxpool or activation
# when calling dense, if working with 2d, we must first call flatten since dense requires it
model = Sequential()

model.add(Conv2D(64, (3, 3), input_shape = X_train.shape[1:]))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Conv2D(64, (3, 3)))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Flatten())
model.add(Dense(64))

model.add(Dense(len(CATEGORIES), activation="softmax"))
# model.add(Activation("relu"))

# loss has: binary_crossentropy and categorical_crossentropy
model.compile(optimizer="adam",
              loss="categorical_crossentropy",
              metrics=['accuracy'])

model.fit(X_train, y_train, epochs=3)
# extra stuff i needa look into batch_size=32, validation_split=0.1

val_loss, val_acc = model.evaluate(X_train, y_train)

# seeing results
model.save('result.model')

# loading model
new_model = tf.keras.models.load_model('result.model')

# testing samples
predictions = new_model.predict([X_train])

for i in range(0, 10):
    # normalize to [0, 255]
    img_normalized = cv2.normalize(X_train[i], None, 0, 255, cv2.NORM_MINMAX)

    # convert back to normal rgb
    img_rgb = cv2.cvtColor(img_normalized.astype(np.uint8), cv2.COLOR_BGR2RGB)

    # predictions
    print(CATEGORIES[np.argmax(predictions[i])])
    plt.imshow(img_rgb)
    plt.show()