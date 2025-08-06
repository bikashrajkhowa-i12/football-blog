import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../demo/data";
import { startCase } from "lodash";
import Divider from "../components/Divider";

// testing url: http://localhost:3000/blog/when-talent-travels-bundesliga-stars-who-flopped-in-the-pre-9NKlEkckri
// testing url: http://localhost:3000/blog/ruben-amorim-eyes-ferguson-like-legacy-at-manchester-united-VcxnaZe7uD

const BlogPost = () => {
  const { slugWithId } = useParams();
  const [slug = "", blog_id = ""] = slugWithId.split(/-(?=[^-]+$)/);
  const [blog, setBlog] = useState({});

  //call Api to fetch the desired blog based on slug and blog_id
  useEffect(() => {
    function getBlogData() {
      //const response = callApi()
      //TODO: integrate with actual api this is just for testing purpose //
      blogs.map((e) => {
        const matchedBlog = slug === e.slug && blog_id === e.blog_id;
        if (matchedBlog) {
          setBlog(e);
        }
      });
    }
    getBlogData();
  }, [slugWithId]);

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
    const {
      title = "",
      published_date = "",
      sources = [],
      content = {},
      author = "Bkaz",
      tags = [],
    } = blog || {};

    return (
      <article className="mb-12 pt-5">
        <div className="prose max-w-none w-full px-4 text-sm">
          <div className="flex gap-2 items-stretch">
            <div className="w-1.5 bg-red-500" />
            <div className="flex-1">
              <h1 className="mb-3">{title}</h1>
              <div className="flex flex-col items-left gap-0 text-sm text-gray-500">
                <div>
                  Date: {published_date} • By {author} • 4 min read
                </div>
                {tags?.length > 0 && (
                  <div>{tags.map((tag) => startCase(tag)).join(" • ")}</div>
                )}
              </div>
            </div>
          </div>
          {/* display blog contents */}
          {Object.entries(content).map(([key, value], idx) => (
            <div key={`section-${idx}`} className="mt-10">
              <h2>{startCase(key)}</h2>
              <p>{value}</p>
            </div>
          ))}
          {sources.length > 0 && displaySources(sources)}
          <Divider />
        </div>
      </article>
    );
  };

  return (
    <div className="flex justify-center gap-4 px-4 overflow-hidden">
      {/* Left Sidebar (only rendered if blogs exist) */}
      {blogs.length > 0 && (
        <aside className="hidden md:block min-w-[150px] max-w-[150px] lg:min-w-[200px] lg:max-w-[200px]">
          {/* TODO: Add appropriate component */}
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

export default BlogPost;
