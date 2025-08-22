import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { startCase } from "lodash";

import { blogs } from "../demo/data";
import Divider from "../components/Divider";

import manchesterImage from "../demo/images/manchester.jpg";
import bundesligaImage from "../demo/images/bundesliga.jpg";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const commentsRef = useRef(null);

  useEffect(() => {
    const matchedBlog = blogs.find((b) => b.slug === slug);
    setBlog(matchedBlog || null);

    if (location.hash === "#comments" && commentsRef.current) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [blog, slug, location]);

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
      quote = "",
      quote_by = "",
      comments = [],
    } = blog;

    const imageSrc =
      tags.includes("Manchester United") || tags.includes("Manchester")
        ? manchesterImage
        : bundesligaImage;

    return (
      <article className="w-full flex flex-col gap-10">
        {/* Breadcrumb + Back */}
        <div
          className="flex items-center gap-2 text-sm text-gray-500 mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </div>

        {/* Title + Meta */}
        <div className="border-l-8 border-red-600 pl-4 mb-4">
          <h1 className="text-3xl font-extrabold mb-1">{title}</h1>
          <div className="text-gray-600 text-sm mb-3">
            {published_date} • By {author} • 4 min read
          </div>
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Blog"
              className="rounded-md h-full object-content w-full"
            />
          )}
          {tags?.length > 0 && (
            <div className="text-sm text-gray-500 mt-1 italic">
              {tags.map((tag) => startCase(tag)).join(" • ")}
            </div>
          )}
        </div>

        {/* Social Share */}
        <div className="flex gap-3 text-sm">
          <button className="px-3 py-1 rounded bg-blue-500 text-white">
            Share on Twitter
          </button>
          <button className="px-3 py-1 rounded bg-blue-700 text-white">
            Share on Facebook
          </button>
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

        {/* Highlighted Quote */}
        {quote && (
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700">
            “{quote}”
            <footer className="mt-1 text-sm text-gray-500">- {quote_by}</footer>
          </blockquote>
        )}

        {displaySources(sources)}

        <Divider className="mt-20" />

        {/* Comments */}
        <div ref={commentsRef} className="space-y-4 mt-20">
          <h3 className="text-lg font-semibold mb-4">
            Comments ({comments.length})
          </h3>
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm">No comments yet.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {comments.map((c, idx) => (
                <li key={idx} className="border-b pb-2">
                  <p className="text-sm text-gray-800">{c.text}</p>
                  <span className="text-xs text-gray-500">- {c.user}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-4 max-w-md">
            <textarea
              name="post_a_comment"
              placeholder="Comment here..."
              className="border-[1.5px] border-gray-400 px-6 py-2 rounded-md"
            />
            <span className="flex justify-end">
              <Button variant="dark">Comment</Button>
            </span>
          </div>
        </div>

        <Divider />

        {/* Related posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
          <ul className="list-disc pl-5 text-sm text-blue-600">
            {blogs
              .filter((b) => b.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <li key={related.slug}>{related.title}</li>
              ))}
          </ul>
        </div>
      </article>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-10 px-2 sm:px-4 flex flex-col gap-12">
        <div className="max-w-4xl mx-auto w-full">{displayContent()}</div>
      </div>
    </div>
  );
};

export default BlogPost;
