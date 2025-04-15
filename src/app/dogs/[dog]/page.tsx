import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const POST_QUERY = `*[_type == "dogs" && slug == $dog][0]{
  name,
  slug,
  "shows": shows[] -> {
    name,
    body
  }
}`;

const options = { next: { revalidate: 10 }, dynamic: 'force-dynamic' };

export default async function PostPage({
  params,
}: {
  params: Promise<{ dog: string }>;
}) {
  const dog = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-8">{dog.name}</h1>
        {dog.shows?.forEach((show: any, showIndex: number) => {
          <div className="relative flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm" key={showIndex}>
            <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
              <div
                role="button"
                className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <div className="mr-4 grid place-items-center">
                  <img
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                    className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                  />
                </div>
                <div>
                  <h6 className="text-slate-800 font-medium">
                    {show.name}
                  </h6>
                  <p className="text-slate-500 text-sm">
                    {show.name}
                  </p>
                </div>
              </div>
            </nav>
          </div>
        })}
      </main>

      <Footer />
    </div>
  );
}