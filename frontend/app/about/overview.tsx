export default function Overview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-12 md:grid-cols-2">

        <div>
          <p className="font-semibold text-sky-600">
            Project Overview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Combining Deep Learning and Full Stack Development
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600">

          <p>
            This project uses deep learning to classify brain MRI scans
            into four categories: Glioma Tumor, Meningioma Tumor,
            Pituitary Tumor, and No Tumor.
          </p>

          <p>
            The model was trained using transfer learning with
            EfficientNetB0 and deployed through a FastAPI backend,
            while the user interface was built using Next.js and
            Tailwind CSS.
          </p>

          <p>
            The goal of this project is to demonstrate the practical
            application of artificial intelligence in medical image
            classification while providing an intuitive web interface
            for interacting with the model.
          </p>

        </div>

      </div>

    </section>
  );
}