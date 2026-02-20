import { PaymentReturnLayout } from "@/components/PaymentReturnLayout";

type SearchParams = Record<string, string | string[] | undefined>;

const pickParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <PaymentReturnLayout
      title="Payment Successful"
      message="Your payment was processed successfully. You can continue in the TowMech app."
      deepLink="towmech://payment-success"
      params={{
        reference: pickParam(params.reference),
        trxref: pickParam(params.trxref),
        status: pickParam(params.status),
      }}
    />
  );
}
