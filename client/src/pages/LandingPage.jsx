import React from "react";
import { startCase } from "lodash";
import { blogs } from "../demo/data";
import Divider from "../components/Divider";

const LandingPage = () => {
  const displayLeftAside = () => {
    if (blogs.length <= 0) return null;
    return (
      <div className="flex flex-col justify-start mt-6">
        <h2 className="text-sm font-semibold px-4 py-0.5 rounded bg-red-700 text-white">
          Latest
        </h2>
        <ul className="px-4 mt-4 space-y-2 text-sm">
          {blogs.map((blog, index) => (
            <li key={`sidebar-${index}`} className="flex items-center gap-2">
              <span className="truncate block max-w-[150px]">{blog.title}</span>
              <span className="bg-red-700 text-white text-xs px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const displaySources = (sources) => {
    if (sources.length <= 0) return null;
    return (
      <div className="mt-6">
        <i className="text-xs">Sources</i>:{" "}
        {sources.map((source, idx) => {
          const { name, url } = source || {};
          return (
            name &&
            url && (
              <span key={`source-${idx}`} className="text-xs italic">
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
    );
  };

  const displayContent = () => {
    return blogs.length
      ? blogs.map((blog, index) => {
          const {
            title = "",
            published_date = "",
            sources = [],
            content = {},
            author = "Bkaz",
            tags = [],
          } = blog || {};

          return (
            <article key={`article-${index}`} className="mb-12 pt-5">
              <div className="prose max-w-none w-full px-4 text-sm">
                <div className="flex gap-2 items-stretch">
                  <div className="w-1.5 bg-red-500" />
                  <div className="flex-1">
                    <h1 className="text-gray-700 font-bold text-xl break-words">
                      {title}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col items-left gap-0 text-sm text-gray-500">
                  <span>
                    Date: {published_date} • By {author} • 4 min read
                  </span>
                  {tags?.length > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                      {tags.map((tag) => startCase(tag)).join(" • ")}
                    </div>
                  )}
                </div>

                {Object.entries(content).map(([key, value], idx) => (
                  <div key={`section-${idx}`} className="mt-10">
                    <h2 className="font-semibold text-gray-600">
                      {startCase(key)}
                    </h2>
                    <p>{value}</p>
                  </div>
                ))}

                {sources.length > 0 && displaySources(sources)}
                <Divider />
              </div>
            </article>
          );
        })
      : null;
  };

  return (
    <div className="flex justify-center gap-4 px-4 overflow-hidden">
      {/* Left Sidebar (only rendered if blogs exist) */}
      {blogs.length > 0 && (
        <aside className="hidden md:block min-w-[150px] max-w-[150px] lg:min-w-[200px] lg:max-w-[200px]">
          {displayLeftAside()}
        </aside>
      )}

      {/* Main Section: Fixed width, centered */}
      <section className="w-full max-w-[800px]">{displayContent()}</section>
      <aside className="hidden md:block min-w-[150px] max-w-[150px] lg:min-w-[200px] lg:max-w-[200px]">
        {/* todo */}
      </aside>
      {/* Right Sidebar (placeholder) */}
      {/* Add this later if needed */}
    </div>
  );
};

export default LandingPage;
