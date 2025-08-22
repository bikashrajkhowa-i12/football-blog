import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import manchesterImage from "../demo/images/manchester.jpg";
import bundesligaImage from "../demo/images/bundesliga.jpg";
import { blogs } from "../demo/data";
import ToTop from "../components/ToTop";

const Trending = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 2);

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        Trending
      </h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs available yet.</p>
      ) : (
        <>
          <div className="flex flex-col items-center">
            {blogs.slice(0, visibleCount).map((blog, index) => {
              const {
                title,
                published_date,
                tags = [],
                slug,
                author = "Bkaz",
                preview = "No preview!",
                reading_time = "3 min read",
              } = blog;

              const imageSrc =
                tags.includes("Manchester United") ||
                tags.includes("Manchester")
                  ? manchesterImage
                  : bundesligaImage;

              return (
                <React.Fragment key={index}>
                  <Link to={`/blog/${slug}`} className="group w-full">
                    <Card className="flex flex-col md:flex-row overflow-hidden h-full">
                      {/* Left: Image */}
                      <div className="md:w-1/3 w-full h-[280px] overflow-hidden md:p-5">
                        <img
                          src={imageSrc}
                          alt={title}
                          className="w-full h-full rounded-md object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Right: Text content */}
                      <div className="md:flex-1 md:p-5 flex flex-col justify-between">
                        <div>
                          {/* Meta Info */}
                          <p className="text-xs text-gray-500 mb-1">
                            {published_date
                              ? new Date(published_date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )
                              : "Unpublished"}{" "}
                            • By {author} • {reading_time}
                          </p>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-700 group-hover:underline line-clamp-2">
                            {title}
                          </h3>

                          {/* Tags */}
                          {tags.length > 0 && (
                            <p className="text-xs text-gray-400 italic mb-2">
                              {tags
                                .slice(0, 3)
                                .map(
                                  (tag) =>
                                    tag.charAt(0).toUpperCase() + tag.slice(1)
                                )
                                .join(" | ")}
                            </p>
                          )}

                          {/* Preview */}
                          <div className="relative max-h-24 overflow-hidden">
                            <p className="text-sm text-gray-500 line-clamp-3 group-hover:text-black font-medium">
                              {preview}
                            </p>
                            <div className="absolute bottom-4 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                            <p className="text-sm mt-1 text-gray-800 underline group-hover:font-semibold">
                              Read more...
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>

                  {/* Divider */}
                  {index !== blogs.length - 1 && (
                    <hr className="my-8 border-gray-300 w-full" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < blogs.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-black bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition duration-300 ease-out"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
      <ToTop />
    </div>
  );
};

export default Trending;
