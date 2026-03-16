import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id !== "men" && id !== "women" && id !== "kids") {
    notFound();
  }

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}
