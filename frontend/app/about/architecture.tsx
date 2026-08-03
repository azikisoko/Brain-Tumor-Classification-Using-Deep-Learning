const pipeline = [
  "MRI Image",
  "Resize (224×224)",
  "Normalization",
  "EfficientNetB0",
  "Global Average Pooling",
  "Dropout",
  "Dense Layer",
  "Softmax",
  "Prediction",
];

export default function Architecture() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Model Architecture
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          How the Model Makes a Prediction
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Each uploaded MRI scan passes through a sequence of preprocessing
          and deep learning stages before the model predicts one of the four
          brain tumor classes.
        </p>

      </div>

      <div className="mt-16 flex flex-col items-center">

        {pipeline.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center"
          >
            <div className="w-72 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm transition hover:shadow-lg">
              <p className="font-semibold text-slate-800">
                {step}
              </p>
            </div>

            {index !== pipeline.length - 1 && (
              <div className="my-3 text-3xl text-sky-500">
                ↓
              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  );
}