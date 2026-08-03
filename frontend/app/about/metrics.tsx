"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metrics = [
    {
        title: "Test Accuracy",
        value: "94.20%",
        description: "Overall classification accuracy on the test dataset.",
    },
    {
        title: "Precision",
        value: "94.48%",
        description: "Weighted precision across all classes.",
    },
    {
        title: "Recall",
        value: "94.78%",
        description: "Weighted recall across all classes.",
    },
    {
        title: "F1 Score",
        value: "94.57%",
        description: "Weighted F1-score balancing precision and recall.",
    },
];

export default function Metrics() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            ref={ref} className="mx-auto max-w-7xl px-6 py-20">

            <div className="text-center">

                <p className="font-semibold text-sky-600">
                    Model Performance
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    Evaluation Metrics
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                    These metrics summarize the performance of the trained
                    EfficientNetB0 model on the independent testing dataset.
                </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {metrics.map((metric) => (

                    <div
                        key={metric.title}
                        className="rounded-3xl
                        border
                        border-slate-200/70
                        bg-white/80
                        backdrop-blur-md p-8 text-center shadow-xl transition hover:-translate-y-3
                        hover:shadow-2xl:-translate-y-2 hover:-translate-y-3
                        hover:shadow-2xl:shadow-xl"
                    >

                        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                            {metric.title}
                        </p>

                        <h3 className="mt-4 text-5xl font-extrabold text-slate-900">
                            {inView ? (
                                <>
                                    <CountUp
                                        end={parseFloat(metric.value)}
                                        duration={2}
                                        decimals={metric.value.includes(".") ? 2 : 0}
                                    />
                                    %
                                </>
                            ) : (
                                "0%"
                            )}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-slate-600">
                            {metric.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}