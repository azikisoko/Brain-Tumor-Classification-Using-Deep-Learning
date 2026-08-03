export default function ModelPerformance() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Model Performance
          </h2>

          <p className="mt-4 text-slate-600">
            Evaluation metrics obtained from testing the trained model.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-sky-500">94.94%</h3>
            <p className="mt-4 text-slate-600">Validation Accuracy</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-sky-500">94.20%</h3>
            <p className="mt-4 text-slate-600">Test Accuracy</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-sky-500">4</h3>
            <p className="mt-4 text-slate-600">Tumor Categories</p>
          </div>

        </div>
      </div>
    </section>
  );
}