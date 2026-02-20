import { PaymentReturnLayout } from "@/components/PaymentReturnLayout";

type SearchParams = Record<string, string | string[] | undefined>;

const pickParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function PaymentFailedPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <PaymentReturnLayout
      title="Payment Failed"
      message="We could not complete this payment. Please return to TowMech and try again."
      deepLink="towmech://payment-failed"
      params={{
        reference: pickParam(params.reference),
        trxref: pickParam(params.trxref),
        status: pickParam(params.status),
      }}
    />
  );
}
