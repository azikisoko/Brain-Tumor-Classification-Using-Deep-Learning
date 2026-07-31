import { Upload, ScanSearch, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload MRI",
  },
  {
    icon: ScanSearch,
    title: "Image Processing",
  },
  {
    icon: Brain,
    title: "AI Classification",
  },
  {
    icon: CheckCircle,
    title: "View Results",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-4 text-slate-600">
            A simple four-step process from upload to prediction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Icon className="h-8 w-8 text-sky-500" />
                </div>

                <div className="mt-6 text-sm font-semibold text-sky-500">
                  STEP {index + 1}
                </div>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}