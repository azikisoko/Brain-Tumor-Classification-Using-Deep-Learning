export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Brain Tumor Classification
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            AI-powered MRI image classification using deep learning.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}