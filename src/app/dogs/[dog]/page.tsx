/* eslint-disable react/no-unescaped-entities */
import { client } from "@/sanity/client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Shows from "@/app/components/shows";

const POST_QUERY = `*[_type == "dogs" && slug == $dog][0]{
  name,
  slug,
  body,
  "shows": shows[] -> {
    name,
    slug
  }
}`;

const options = { next: { revalidate: 10 }, dynamic: 'force-dynamic' };

interface Child {
  _type: string;
  style?: string;
  _key: string;
  text?: string;
}

interface Block {
  _key?: string;
  _type: string;
  children: Child[];
  style?: string;
}

interface SanityData {
  name: string;
  slug: string;
  body: Block[];
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ dog: string }>;
}) {
  const dog = await client.fetch(POST_QUERY, await params, options);
  const allTextFromAllBlocks = (data: SanityData): string => {
    return data.body
      .map((block: Block) => 
        block.children
          .filter((child: Child) => child.text)
          .map((child: Child) => child.text as string)
          .join(' ')
      )
      .join('\n\n'); // Separate blocks with double newlines
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="flex-grow">

        <section className="bg-purple-50 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-900">{dog.name}</h2>
            
            <div className="prose prose-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-800 leading-relaxed">
                  {allTextFromAllBlocks(dog)}
                </p>
            </div>
          </div>
        </section>

        <section className="bg-purple-100 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Shows dog={dog} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}