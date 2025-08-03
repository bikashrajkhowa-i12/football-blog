import React from "react";
import { startCase } from "lodash";
import { blogs } from "../demo/data";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 px-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-[250px]">
          <div className="flex flex-col justify-start mt-6">
            <h2 className="text-lg px-4 py-1 rounded bg-red-700 text-white">
              Latest
            </h2>
            <ul className="px-4 mt-4 space-y-2 text-sm">
              {blogs.map((blog, index) => (
                <li
                  key={`sidebar-${index}`}
                  className="flex items-center gap-2"
                >
                  {blog.title}
                  <span className="bg-red-700 text-white text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-1">
          {blogs.map((blog, index) => {
            const {
              title = "",
              published_date = "",
              sources = [],
              content = {},
            } = blog || {};

            return (
              <article key={`article-${index}`} className="flex mb-12">
                <div className="w-3 h-14 bg-red-500 mt-6" />
                <div className="prose max-w-none w-full px-4 text-sm">
                  <h1 className="pt-5 text-gray-700 font-bold text-xl">
                    {title}
                  </h1>
                  <div className="flex items-center gap-2 italic text-sm text-gray-500">
                    <span>Date: {published_date}</span>
                  </div>

                  {Object.entries(content).map(([key, value], idx) => (
                    <div key={`section-${idx}`} className="mt-10">
                      <h2 className="font-semibold text-gray-600">
                        {startCase(key)}
                      </h2>
                      <p>{value}</p>
                    </div>
                  ))}

                  {sources.length > 0 && (
                    <div className="mt-6">
                      <i className="text-xs">Sources</i>:{" "}
                      {sources.map((source, idx) => {
                        const { name, url } = source || {};
                        return (
                          name &&
                          url && (
                            <span
                              key={`source-${idx}`}
                              className="text-xs italic"
                            >
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                              >
                                {name}
                              </a>
                              {idx < sources.length - 1 && " | "}
                            </span>
                          )
                        );
                      })}
                    </div>
                  )}
                  <div className="h-px bg-red-300 w-full my-6 mt-14" />
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
