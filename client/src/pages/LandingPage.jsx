import React from "react";
import { Link } from "react-router-dom";
import { startCase } from "lodash";

import { blogs } from "../demo/data";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Button from "../components/Button";
import Divider from "../components/Divider";

// TODO: Remove this temporary image holders.
import manchesterImage from "../demo/images/manchester.jpg";
import bundesligaImage from "../demo/images/bundesliga.jpg";
import { demoAlert } from "../demo/alerts";

const LandingPage = () => {
  const featuredBlogs = () => {
    return blogs.length ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.slice(0, 6).map((blog, index) => {
          const {
            title = "",
            published_date = "",
            tags = [],
            blog_id = "",
            slug = "",
            author = "Bkaz",
            preview = "No preview!",
            reading_time = "3 min read",
          } = blog || {};
          // TODO: Remove this logic incase of no images
          const imageSrc =
            tags.includes("Manchester United") || tags.includes("Manchester")
              ? manchesterImage
              : bundesligaImage;

          return (
            <Link
              to={`/blog/${slug}-${blog_id}`}
              key={index}
              className="h-full group"
            >
              <Card className="relative">
                <div className="h-full flex flex-col justify-between gap-2">
                  {/* Header Block: Date, Author, Reading Time */}
                  <div className="ml-1 text-xs text-gray-500">
                    {new Date(published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    • By {author} • {reading_time}
                  </div>

                  {/* TODO: Optional Image*/}
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      alt="Blog"
                      className="rounded-md max-h-52 object-cover w-full group-hover:scale-105 transition duration-200"
                    />
                  )}

                  {/* Title */}
                  <div className="border-l-4 border-red-700 pl-3 mt-2">
                    <h4 className="text-md font-bold text-gray-800 group-hover:text-red-700 underline line-clamp-2 mt-1">
                      {title}
                    </h4>
                  </div>
                  {/** Tags */}
                  <div className="text-xs text-gray-400 italic">
                    {tags
                      .slice(0, 3)
                      .map((tag) => startCase(tag))
                      .join(" | ")}
                  </div>

                  {/* Preview */}
                  <div className="relative max-h-24 overflow-hidden">
                    <p className="text-sm text-gray-500 line-clamp-3 group-hover:text-black font-semibold">
                      {preview}
                    </p>
                    {/* Fading effect */}
                    <div className="absolute bottom-4 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    <p className="text-sm mt-1 text-gray-800 underline group-hover:font-medium">
                      Read more...
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    ) : null;
  };

  return (
    <div className="flex flex-col gap-16 py-10 px-2 sm:px-4">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Your Daily Dose of Football Insights
        </h1>
        <p className="text-gray-600 text-md md:text-2xl font-light mb-8">
          Match reports, transfer rumors, tactical breakdowns — all in one
          place.
        </p>
        <Button
          variant="success"
          className="mt-6 px-5 py-2 rounded-full"
          onClick={() => alert(demoAlert())}
        >
          Explore Latest Posts
        </Button>
      </section>

      {/* Featured Blogs */}
      <section className="max-w-6xl mx-auto w-full px-1 py-6 ">
        <div className="mb-10">
          <h2 className="text-3xl text-gray-800 font-bold">Featured Posts</h2>
        </div>
        {featuredBlogs()}
      </section>

      <Divider>
        <Button
          text="🡅 Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          override={true}
          className={`w-20 h-12 font-bold text-gray-400 hover:-translate-y-1 transition duration-[800ms] 
                    bg-gradient-to-t from-sky-200 to-gray-300 rounded-full`}
        />
      </Divider>

      {/* Categories */}
      <section className="max-w-4xl mx-auto w-full">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
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

      {/* Newsletter */}
      <section className="text-center max-w-md mx-auto mt-10">
        <h4 className="text-md font-bold text-gray-700 mb-2">
          Get Weekly Football Updates
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 w-full sm:w-auto"
          />

          <Button
            text="Subscribe"
            type="submit"
            variant="success"
            onClick={() => alert(demoAlert())}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
