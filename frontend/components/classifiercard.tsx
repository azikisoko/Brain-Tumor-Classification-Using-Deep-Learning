"use client";

import { useState } from "react";
import axios from "axios";
import { UploadCloud } from "lucide-react";

interface PredictionResponse {
  prediction: string;
  confidence: number;
  probabilities: Record<string, number>;
}

export default function ClassifierCard() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<PredictionResponse | null>(null);

  async function handlePredict() {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "/api/predict",
      formData
    );

    console.log(response.data);
    setResult(response.data);

  } catch (error: any) {
    console.error("Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    } else if (error.request) {
      console.log("Request:", error.request);
    } else {
      console.log("Message:", error.message);
    }

    alert("Prediction failed.");
  }
}

function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
  const selected = e.target.files?.[0];

  if (!selected) return;

  setFile(selected);
  setPreview(URL.createObjectURL(selected));
  setResult(null);
}
  
  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];

    if (!droppedFile) return;

    if (!droppedFile.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    setFile(droppedFile);
    setPreview(URL.createObjectURL(droppedFile));
    setResult(null);
  }

function handleReset() {
  setFile(null);
  setPreview(null);
  setResult(null);
}

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow">

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <label
          htmlFor="image"
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition-all duration-300 ${dragActive
              ? "border-sky-500 bg-sky-50 scale-[1.02]"
              : "border-slate-300 hover:border-sky-500 hover:bg-slate-50"
            }`}
        >
        <UploadCloud className="mb-6 h-14 w-14 text-sky-500" />

        <h2 className="text-2xl font-semibold">
          Upload MRI Image
        </h2>

        <p className="mt-2 text-slate-500">
          PNG JPG JPEG
        </p>

        <input
          id="image"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImage}
        />
        </label>
    <div/>  

      {preview && (
        <>
          <img
            src={preview}
            alt="Preview"
            className="mx-auto mt-8 max-h-96 rounded-xl border"
          />

          <button
            onClick={handlePredict}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "🧠 Analyzing MRI..." : "Analyze MRI"}
          </button>
        </>
      )}

      {result && (
        <div className="mt-10 rounded-xl border bg-slate-50 p-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Prediction
          </h2>

          <p className="mt-4 text-lg">
            <strong>Class:</strong>{" "}
            {result.prediction.replaceAll("_", " ")}
          </p>

          <p className="mt-2 text-lg">
            <strong>Confidence:</strong>{" "}
            {(result.confidence * 100).toFixed(2)}%
          </p>

          <hr className="my-6" />

          <h3 className="mb-4 font-semibold">
            Probabilities
          </h3>

          {Object.entries(result.probabilities).map(([name, value]) => (
            <div
              key={name}
              className="mb-3"
            >
              <div className="mb-1 flex justify-between">

                <span>
                  {name.replaceAll("_", " ")}
                </span>

                <span>
                  {(value * 100).toFixed(2)}%
                </span>

              </div>

              <div className="h-3 rounded bg-slate-200">

                <div
                  className="h-3 rounded bg-sky-500"
                  style={{
                    width: `${value * 100}%`,
                  }}
                />

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}