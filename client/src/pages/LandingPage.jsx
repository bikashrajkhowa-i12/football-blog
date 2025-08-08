import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { startCase } from "lodash";

import { blogs } from "../demo/data";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Button from "../components/Button";
import Divider from "../components/Divider";
import FormBuilder from "../components/FormBuilder";

const LandingPage = () => {
  const navigate = useNavigate();

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
            preview = "No preview!",
            reading_time = "3 min read",
          } = blog || {};

          return (
            <Link
              to={`/blog/${slug}-${blog_id}`}
              key={index}
              className="h-full group"
            >
              <Card className="relative">
                <div className="h-full flex flex-col justify-between gap-4">
                  <div className="border-l-4 border-red-700 pl-3">
                    <h4 className="mt-2 text-md font-bold text-gray-800 group-hover:text-red-700 underline line-clamp-2">
                      {title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2">
                      {tags
                        .slice(0, 3)
                        .map((tag) => startCase(tag))
                        .join(" | ")}
                    </p>
                  </div>
                  <div className="relative max-h-24 overflow-hidden">
                    <p className="text-sm text-gray-500 line-clamp-3 group-hover:text-black font-semibold">
                      {preview}
                    </p>
                    <div className="absolute bottom-4 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    <p className="text-sm mt-1 text-gray-800 underline group-hover:font-medium">
                      Read more...
                    </p>
                  </div>

                  <Badge
                    size="2xs"
                    variant="danger"
                    className="absolute top-0 left-0 text-right"
                  >
                    {published_date} | {reading_time}
                  </Badge>
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
        <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
          Your Daily Dose of Football Insights
        </h1>
        <p className="text-gray-600 text-md md:text-2xl font-light">
          Match reports, transfer rumors, tactical breakdowns — all in one
          place.
        </p>
        <Button
          className="mt-6 px-5 py-2 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition"
          onClick={() => navigate("/home")}
        >
          Explore Latest Posts
        </Button>
      </section>

      {/* Featured Blogs */}
      <section className="max-w-6xl mx-auto w-full px-1 py-6 ">
        <h1 className="mb-10 font-extrabold text-xl text-gray-800">
          Featured Posts
        </h1>
        {featuredBlogs()}
      </section>

      <Divider />

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
          <FormBuilder
            formClassName="flex"
            fields={[
              {
                name: "email",
                type: "email",
                required: true,
                placeholder: "Your email address",
              },
            ]}
            buttons={[
              {
                label: "Subscribe",
                type: "submit",
              },
            ]}
          />
          {/* <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700 w-full sm:w-auto"
          /> */}
          {/* <Button text="Subscribe" type="submit" /> */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
