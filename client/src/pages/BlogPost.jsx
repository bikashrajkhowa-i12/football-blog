import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../demo/data";
import { startCase } from "lodash";
import Divider from "../components/Divider";

const BlogPost = () => {
  const { slugWithId } = useParams();
  const [slug = "", blog_id = ""] = slugWithId.split(/-(?=[^-]+$)/);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const matchedBlog = blogs.find(
      (b) => b.slug === slug && b.blog_id === blog_id
    );
    setBlog(matchedBlog || null);
  }, [slug, blog_id]);

  const displaySources = (sources = []) => {
    if (sources.length === 0) return null;
    return (
      <div className="mt-6 text-xs">
        <span className="italic">Sources:</span>{" "}
        {sources.map(({ name, url }, idx) => (
          <span key={idx} className="italic">
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
        ))}
      </div>
    );
  };

  const displayContent = () => {
    if (!blog)
      return <p className="text-center text-gray-500 mt-10">Blog not found.</p>;

    const {
      title = "",
      published_date = "",
      sources = [],
      content = {},
      author = "Bkaz",
      tags = [],
    } = blog;

    return (
      <article className="w-full flex flex-col gap-10">
        {/* Title + Meta */}
        <div className="border-l-8 border-red-600 pl-4 mb-4">
          <h1 className="text-3xl font-extrabold mb-1">{title}</h1>
          <div className="text-gray-600 text-sm">
            {published_date} • By {author} • 4 min read
          </div>
          {tags?.length > 0 && (
            <div className="text-sm text-gray-500 mt-1">
              {tags.map((tag) => startCase(tag)).join(" • ")}
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {Object.entries(content).map(([section, paragraph], idx) => (
            <section key={idx}>
              <h2 className="text-lg font-semibold mb-2">
                {startCase(section)}
              </h2>
              <p className="text-gray-800 leading-relaxed">{paragraph}</p>
            </section>
          ))}
        </div>

        {displaySources(sources)}
        <Divider />
      </article>
    );
  };

  return (
    <div className="py-10 px-2 sm:px-4 flex flex-col gap-12">
      <div className="max-w-3xl mx-auto w-full">{displayContent()}</div>
    </div>
  );
};

export default BlogPost;
