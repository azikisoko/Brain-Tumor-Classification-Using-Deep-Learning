import { Brain, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Four-Class Classification",
    description:
      "Classifies MRI scans into Glioma, Meningioma, Pituitary Tumor, or No Tumor.",
  },
  {
    icon: Zap,
    title: "Fast Predictions",
    description:
      "Receive AI-powered predictions within seconds after uploading an MRI image.",
  },
  {
    icon: ShieldCheck,
    title: "Deep Learning Model",
    description:
      "Powered by EfficientNetB0 with transfer learning for reliable image classification.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Use This System?
          </h2>

          <p className="mt-4 text-slate-600">
            Built using modern deep learning techniques to classify brain MRI images.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-6 h-12 w-12 text-sky-500" />

                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}