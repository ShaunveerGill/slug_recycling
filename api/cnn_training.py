import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D
from tensorflow.keras.callbacks import TensorBoard, ModelCheckpoint
from tensorflow.keras.regularizers import l2
import tensorflow.keras.utils as utils

import numpy as np
import matplotlib.pyplot as plt
import cv2

import time
LOG_FILE_NAME = "Garbage-Classification-Logs-{}".format(int(time.time()))
tensorboard = TensorBoard(log_dir='logs/{}'.format(LOG_FILE_NAME))

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

X_test = np.load("X_train.npy")
y_test = np.load("y_train.npy")


# normalize our data
X_train = tf.keras.utils.normalize(X_train, axis=1)
X_test = tf.keras.utils.normalize(X_test, axis=1)
y_train = utils.to_categorical(y_train, num_classes=len(CATEGORIES))
y_test = utils.to_categorical(y_test, num_classes=len(CATEGORIES))

# building the model
# some notes: conv can be followed by either: maxpool or activation
# when calling dense, if working with 2d, we must first call flatten since dense requires it
# 3 known activations, relu, softmax, sigmoid
model = Sequential()

model.add(Conv2D(64, (3, 3), input_shape = X_train.shape[1:], kernel_regularizer=l2(0.01)))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Conv2D(64, (3, 3), kernel_regularizer=l2(0.01)))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Flatten())
model.add(Dense(64, kernel_regularizer=l2(0.01)))
model.add(Dense(len(CATEGORIES), activation="softmax"))
# model.add(Activation("relu"))

# loss has: binary_crossentropy and categorical_crossentropy
model.compile(optimizer="adam",
              loss="categorical_crossentropy",
              metrics=['accuracy'])


FILE = "model_3.h5"
checkpoint = ModelCheckpoint(FILE, monitor='val_accuracy', save_best_only=True)

model.fit(X_train, y_train, epochs=10, validation_split=0.1, callbacks=[tensorboard, checkpoint])
# extra stuff i needa look into batch_size=32, validation_split=0.1, validation_data=(X_test, y_test)

# check validation loss and acc
val_loss, val_acc = model.evaluate(X_test, y_test)

# seeing results
# model.save(FILE)

# loading model
new_model = tf.keras.models.load_model(FILE)

# testing samples
predictions = new_model.predict([X_test])

for i in range(0, 10):
    # normalize to [0, 255]
    img_normalized = cv2.normalize(X_test[i], None, 0, 255, cv2.NORM_MINMAX)

    # convert back to normal rgb
    img_rgb = cv2.cvtColor(img_normalized.astype(np.uint8), cv2.COLOR_BGR2RGB)

    # predictions
    print(CATEGORIES[np.argmax(predictions[i])])
    plt.imshow(img_rgb)
    plt.show()