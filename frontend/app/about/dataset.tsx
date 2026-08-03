const stats = [
  {
    title: "Classes",
    value: "4",
    description: "Glioma, Meningioma, No Tumor, Pituitary",
  },
  {
    title: "Training Images",
    value: "25,124",
    description: "Images used for model training",
  },
  {
    title: "Validation Images",
    value: "2,529",
    description: "Used during training",
  },
  {
    title: "Testing Images",
    value: "2,363",
    description: "Independent evaluation dataset",
  },
  {
    title: "Image Size",
    value: "224 × 224",
    description: "Input resolution",
  },
  {
    title: "Color Channels",
    value: "RGB",
    description: "Three-channel MRI images",
  },
];

export default function Dataset() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Dataset
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          MRI Dataset Overview
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          The dataset contains magnetic resonance imaging (MRI) scans
          categorized into four diagnostic classes. Images were resized
          to a uniform resolution before being used for transfer learning
          with EfficientNetB0.
        </p>

      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {stats.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              {item.title}
            </p>

            <h3 className="mt-3 text-4xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-4 text-slate-600">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}