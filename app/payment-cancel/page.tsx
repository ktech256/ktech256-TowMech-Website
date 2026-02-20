import { PaymentReturnLayout } from "@/components/PaymentReturnLayout";

type SearchParams = Record<string, string | string[] | undefined>;

const pickParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function PaymentCancelPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <PaymentReturnLayout
      title="Payment Cancelled"
      message="You cancelled this payment. Return to TowMech to choose what you want to do next."
      deepLink="towmech://payment-cancel"
      params={{
        reference: pickParam(params.reference),
        trxref: pickParam(params.trxref),
        status: pickParam(params.status),
      }}
    />
  );
}
