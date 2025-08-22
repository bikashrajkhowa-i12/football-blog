import React, { useState } from "react";
import { Link } from "react-router-dom";

import { blogs } from "../demo/data";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Button from "../components/Button";
import ToTop from "../components/ToTop";

import manchesterImage from "../demo/images/manchester.jpg";
import bundesligaImage from "../demo/images/bundesliga.jpg";

const LandingPage = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 blogs

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const featuredBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-16 py-10 px-2 sm:px-4">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Your Daily Dose of Football Insights
        </h1>
        <p className="text-gray-600 text-md md:text-2xl font-light mb-8">
          Match reports, transfer rumors, tactical breakdowns. Everything you
          need in one place.
        </p>
        <Link to={"/latest"}>
          <Button variant="success" className="mt-4 px-6 py-2 rounded-full">
            Explore Latest Posts
          </Button>
        </Link>
      </section>

      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <section className="max-w-6xl mx-auto w-full px-1 py-6">
          <h2 className="text-3xl text-gray-800 font-bold mb-8">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, index) => {
              const {
                title,
                published_date,
                tags = [],
                slug,
                author = "Bkaz",
                reading_time = "3 min read",
              } = blog;

              const imageSrc =
                tags.includes("Manchester United") ||
                tags.includes("Manchester")
                  ? manchesterImage
                  : bundesligaImage;

              return (
                <Link to={`/blog/${slug}`} key={index} className="h-full group">
                  <Card className="relative h-full flex flex-col">
                    <div className="flex flex-col justify-between gap-2 h-full">
                      {/* Meta Info */}
                      <div className="ml-1 text-xs text-gray-500">
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
                      </div>

                      {/* Blog Thumbnail */}
                      <div className="overflow-hidden rounded-t-md">
                        {imageSrc && (
                          <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-full rounded-md object-cover transform transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>

                      {/* Blog Title */}
                      <div className="mt-2">
                        <h3 className="text-md font-bold text-gray-800 group-hover:text-red-700 group-hover:underline line-clamp-2">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
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
        </section>
      )}

      {/* Categories */}
      <section className="max-w-4xl mx-auto w-full">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Browse by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Match Reports",
            "Transfers",
            "Tactical Analysis",
            "Injuries",
            "Previews",
          ].map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="rounded-full opacity-70 cursor-pointer hover:bg-green-700 hover:opacity-100 px-3 py-1"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>
      <ToTop />
    </div>
  );
};

export default LandingPage;
