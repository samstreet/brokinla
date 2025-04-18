import React from "react";
import Pagination from "./pagination";
import Link from "next/link";

export default function Shows({dog}: {dog: { name: string, slug: string, shows: Array<{name: string, slug: string}>}}) {
    return (
        <main>
            {dog.shows?.map((show: {name: string, slug: string}, index: number) => (
              <Link href={`/dogs/${dog.name.toLowerCase()}/shows/${show.slug}`} key={index}>
                  <div className="relative flex w-full flex-col rounded-lg border border-slate-200 bg-white hover:bg-purple-200 shadow-md my-4 transform transition-transform hover:scale-105">
                  <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
                    <div
                      role="button"
                      className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all  focus:bg-slate-100 active:bg-slate-100"
                    >
                      <div className="mr-4 grid place-items-center">
                        <img
                          alt="candice"
                          src={`/images/${dog.slug}.png`}
                          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                        />
                      </div>
                      <div>
                        <h6 className="text-slate-800 font-medium">
                          {show.name}
                        </h6>
                      </div>
                    </div>
                  </nav>
                </div>
              </Link>
            ))}
            <Pagination />
        </main>
    )
}