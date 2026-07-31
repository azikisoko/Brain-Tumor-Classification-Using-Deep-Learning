import Navbar from "@/components/navbar";
import ClassifierCard from "@/components/classifiercard";
import Footer from "@/components/footer";

export default function ClassifierPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-slate-900">
              Brain Tumor Classifier
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Upload an MRI image to classify it using the trained deep learning model.
            </p>
          </div>

          <ClassifierCard />

        </div>
      </main>

      <Footer />
    </>
  );
}