const technologies = [
  {
    name: "TensorFlow",
    description: "Deep learning framework used for training and inference.",
  },
  {
    name: "EfficientNetB0",
    description: "Transfer learning architecture for MRI image classification.",
  },
  {
    name: "FastAPI",
    description: "High-performance REST API serving the trained model.",
  },
  {
    name: "Next.js",
    description: "React framework powering the frontend application.",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for modern UI development.",
  },
  {
    name: "Python",
    description: "Primary language used for model development and backend.",
  },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Technology Stack
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Built With Modern AI Technologies
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          The project combines deep learning, modern web development,
          and API technologies to create a complete end-to-end AI
          application.
        </p>

      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <h3 className="text-2xl font-bold text-slate-900">
              {tech.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {tech.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}