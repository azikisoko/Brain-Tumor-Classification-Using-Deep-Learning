import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <span className="mb-6 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-600">
          Machine Learning-Powered Brain MRI Classification
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Brain Tumor
          <span className="block text-sky-500">
            Classification System
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Upload an MRI image and classify it into one of four categories:
          <strong> Glioma</strong>,
          <strong> Meningioma</strong>,
          <strong> Pituitary Tumor</strong>,
          or
          <strong> No Tumor </strong>
          using a deep learning model built with EfficientNetB0.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/classifier"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            <Upload size={20} />
            Start Classification
          </Link>

          <Link
            href="/about"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}