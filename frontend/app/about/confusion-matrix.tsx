import Image from "next/image";

export default function ConfusionMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Confusion Matrix
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Model Predictions vs Ground Truth
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          The confusion matrix illustrates how the model classified each MRI
          image and highlights where misclassifications occurred between the
          four diagnostic categories.
        </p>

      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border bg-white p-6 shadow-lg">

        <Image
            src="/metric/confusion_matrix.png"
            alt="Confusion Matrix"
            width={900}
            height={900}
            className="mx-auto rounded-xl"
        />

      </div>

    </section>
  );
}