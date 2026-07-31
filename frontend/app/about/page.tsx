import Hero from "@/app/about/hero";
import Overview from "@/app/about/overview";
import Techstack from "@/app/about/techStack";
import Dataset from "@/app/about/dataset";
import Architecture from "@/app/about/architecture";
import Metrics from "@/app/about/metrics";
import ConfusionMatrix from "@/app/about/confusion-matrix";
import TrainingCurves from "@/app/about/training-curves";
import Navbar from "@/components/navbar"
import ClassificationReport from "@/app/about/classification-report"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Overview />
      <Techstack />
      <Dataset />
      <Architecture />
      <Metrics />
      <ConfusionMatrix />
      <TrainingCurves />
      <ClassificationReport />

    </main>
  );
}