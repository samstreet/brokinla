import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const POST_QUERY = `*[_type == "dogs" && dogs.slug == $dog][0]`;
const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ dog: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-8">{JSON.stringify(post)}</h1>
      </main>
      <Footer />
    </div>
  );
}