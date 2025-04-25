/* eslint-disable react/no-unescaped-entities */
import { client } from "@/sanity/client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import NotFound from "@/app/components/not-found";

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
  console.log('Classes:', JSON.stringify(dog.show.classes, null, 2));
  if (dog.show === null) {
    return NotFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="min-h-100">
        
        <section className="bg-purple-50 py-16">
          <div className=" mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-900">{dog.show.name}</h2>
            
            <div className="prose prose-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-800 leading-relaxed">
                At Brokinla Championship Show Dogs, we are dedicated to the pursuit of excellence in canine breeding and competition. For over 15 years, our kennel has been home to some of the most distinguished show dogs in the circuit, including our champions Elska and Selsig.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-4">
                Founded by passionate dog enthusiasts with decades of combined experience, Brokinla represents the perfect marriage of pedigree lineage and exceptional training. Our dogs are not just beautiful specimens of their breeds—they are the result of careful breeding programs focused on temperament, health, and conformation to breed standards.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-4">
                Whether you're looking for a future champion for your show career or simply want to learn more about these magnificent animals, we invite you to explore our website and meet our remarkable dogs. Each one has a unique story and a legacy of excellence that continues to shape the standards of canine competition today.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-4">
                Brokinla isn't just a kennel—it's a commitment to preserving and enhancing the qualities that make each breed special. We welcome fellow enthusiasts, potential owners, and admirers alike to connect with us and share in our passion for these extraordinary animals.
              </p>
              
              <p className="text-purple-800 font-semibold italic text-center mt-8">
                Where pedigree meets perfection.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mx-auto px-4 max-w-4xl py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-900">Classes</h2>
        {dog.show.classes && dog.show.classes.map((classItem: {name: string, placement: string}, index: number) => (
          <div className="relative flex w-full flex-col rounded-lg border border-slate-200 bg-white shadow-md my-4 transform transition-transform" key={index}>
            <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
              <div
                role="button"
                className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all  focus:bg-slate-100 active:bg-slate-100"
              >
                <div>
                  <h6 className="text-slate-800 font-medium">
                    {classItem.name} - {classItem.placement}
                  </h6>
                </div>
              </div>
            </nav>
          </div>
        ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}