import Image from "next/image";

export default function TrainingCurves() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Training History
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Accuracy & Loss Curves
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          These curves show how the model learned during training and help
          identify convergence, overfitting, or underfitting.
        </p>

      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border bg-white p-6 shadow-lg">

        <Image
            src="/metric/accuracy_loss_plot.png"
            alt="Training Curve"
            width={900}
            height={900}
            className="mx-auto rounded-xl"
        />

      </div>

    </section>
  );
}