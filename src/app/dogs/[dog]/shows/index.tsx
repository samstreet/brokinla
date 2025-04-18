import { client } from "@/sanity/client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Shows from "@/app/components/shows";

const POST_QUERY = `*[_type == "dogs" && slug == $dog][0]{
  name,
  slug,
  "show": *[_type == "show" && slug == $show][0]{
    name,
    slug,
    "classes": classes[] -> {
      name,
      placement
    }
  }
}`;

const options = { next: { revalidate: 10 }, dynamic: 'force-dynamic' };

export default async function DogShowPage({
  params,
}: {
  params: Promise<{ dog: string, show: string }>;
}) {
  const dog = await client.fetch(POST_QUERY, await params, options);

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="min-h-100 container mx-auto max-w-3xl p-8 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-8">{dog.name}</h1>
        <Shows dog={dog} />
      </main>

      <Footer />
    </div>
  );
}