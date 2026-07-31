from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import tensorflow as tf
import json
import numpy as np

from PIL import Image

from utils import preprocess_image

app = FastAPI()

# Allow Next.js frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model("model/best_brain_tumor_model.keras")

with open("model/class_names.json", "r") as f:
    class_names = json.load(f)


@app.get("/")
def home():
    return {"message": "API Running"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image = Image.open(file.file)

    processed = preprocess_image(image)

    prediction = model.predict(processed)

    probabilities = prediction[0]

    predicted_index = int(np.argmax(probabilities))

    return {
        "prediction": class_names[predicted_index],
        "confidence": float(probabilities[predicted_index]),
        "probabilities": {
            class_names[i]: float(probabilities[i])
            for i in range(len(class_names))
        },
    }