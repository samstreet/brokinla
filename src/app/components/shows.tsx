/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pagination from "./pagination";
import Link from "next/link";

export default function Shows({dog}: {dog: { name: string, slug: string, shows: Array<{name: string, slug: string}>}}) {
    return (
        <main>
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-3xl font-medium text-purple-900 mb-2">Shows</h3>
            </div>
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
            {!dog.shows?.length && 
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-sm text-gray-500 max-w-md mb-6">
                  We couldn't find any matches for your search.
                </p>
              </div>
            }
            {dog.shows?.length > 10 && <Pagination />}
        </main>
    )
}