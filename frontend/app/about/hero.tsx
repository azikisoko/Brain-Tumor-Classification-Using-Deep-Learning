export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">

        <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
          Deep Learning Project
        </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Brain Tumor Classification
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-sky-600">
          Using Deep Learning
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          An AI-powered web application capable of classifying brain MRI
          images into four diagnostic categories using EfficientNetB0,
          TensorFlow, FastAPI, and Next.js.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <span className="rounded-full border px-5 py-2 font-medium">
            TensorFlow
          </span>

          <span className="rounded-full border px-5 py-2 font-medium">
            EfficientNetB0
          </span>

          <span className="rounded-full border px-5 py-2 font-medium">
            FastAPI
          </span>

          <span className="rounded-full border px-5 py-2 font-medium">
            Next.js
          </span>

          <span className="rounded-full border px-5 py-2 font-medium">
            Tailwind CSS
          </span>

        </div>

      </div>

    </section>
  );
}