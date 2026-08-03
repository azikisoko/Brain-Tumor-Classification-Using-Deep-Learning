const report = [
  {
    class: "Glioma",
    precision: 0.94,
    recall: 0.95,
    f1: 0.94,
    support: 766,
  },
  {
    class: "Meningioma",
    precision: 0.95,
    recall: 0.88,
    f1: 0.91,
    support: 682,
  },
  {
    class: "No Tumor",
    precision: 0.98,
    recall: 0.98,
    f1: 0.98,
    support: 403,
  },
  {
    class: "Pituitary",
    precision: 0.92,
    recall: 0.98,
    f1: 0.95,
    support: 512,
  },
];

export default function ClassificationReport() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="text-center">

        <p className="font-semibold text-sky-600">
          Classification Report
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Performance Per Class
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Precision, recall, F1-score, and support for each diagnostic class.
        </p>

      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border bg-white shadow-lg">

        <table className="w-full border-collapse">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-5 text-left">
                Class
              </th>

              <th className="p-5">
                Precision
              </th>

              <th className="p-5">
                Recall
              </th>

              <th className="p-5">
                F1 Score
              </th>

              <th className="p-5">
                Support
              </th>

            </tr>

          </thead>

          <tbody>

            {report.map((row) => (

              <tr
                key={row.class}
                className="border-t"
              >

                <td className="p-5 font-semibold">
                  {row.class}
                </td>

                <td className="text-center">
                  {row.precision}
                </td>

                <td className="text-center">
                  {row.recall}
                </td>

                <td className="text-center">
                  {row.f1}
                </td>

                <td className="text-center">
                  {row.support}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}