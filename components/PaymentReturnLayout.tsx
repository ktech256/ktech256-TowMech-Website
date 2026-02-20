import Link from "next/link";

type PaymentReturnLayoutProps = {
  title: string;
  message: string;
  deepLink: string;
  params?: {
    reference?: string;
    trxref?: string;
    status?: string;
  };
};

const paramRows: Array<{ key: keyof NonNullable<PaymentReturnLayoutProps["params"]>; label: string }> = [
  { key: "reference", label: "Reference" },
  { key: "trxref", label: "Transaction Ref" },
  { key: "status", label: "Status" },
];

export function PaymentReturnLayout({
  title,
  message,
  deepLink,
  params,
}: PaymentReturnLayoutProps) {
  const visibleParams = paramRows.filter(({ key }) => params?.[key]);

  return (
    <section className="bg-white px-4 py-10 text-ink sm:px-6 md:py-16">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{message}</p>

        {visibleParams.length > 0 && (
          <div className="mt-6 w-full rounded-xl bg-slate-50 p-4 text-left">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Payment details
            </h2>
            <dl className="mt-3 space-y-2 text-sm text-slate-700">
              {visibleParams.map(({ key, label }) => (
                <div key={key} className="flex items-start justify-between gap-3">
                  <dt className="font-medium text-slate-500">{label}</dt>
                  <dd className="break-all text-right">{params?.[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <a
          href={deepLink}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
        >
          Return to TowMech App
        </a>

        <p className="mt-4 text-xs text-slate-500 sm:text-sm">
          If the app did not open automatically, return to TowMech and refresh your job.
        </p>

        <Link href="/" className="mt-3 text-sm font-medium text-accent hover:underline">
          Back to website
        </Link>
      </div>
    </section>
  );
}
