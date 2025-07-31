import React from "react";
import { blogs } from "../demo/content";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6 px-8">
        <div className="hidden md:flex flex-col justify-start border-gray-300">
          <div className="prose flex flex-col gap-5 mt-6 w-[200px] h-[50px]">
            <h2 className="text-lg px-4 rounded bg-red-700 text-white">
              Latest
            </h2>
          </div>
          <div className="px-4">
            {blogs.map((blog) => {
              return (
                <div className="text-sm">
                  <li>
                    {blog.title}
                    <span className="bg-red-700 rounded-full text-white text-xs px-1">
                      New
                    </span>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          {blogs.map((blog) => {
            const {
              title = "",
              date = "",
              author: source = "",
              summary = "",
              key_points = "",
              content = "",
              quote = "",
              quote_by = "",
            } = blog || {};
            return (
              <div className="flex mb-12">
                <div className="w-3 h-14 bg-red-500 mt-6"></div>
                <div className="prose max-w-none w-full px-4 text-sm">
                  <div>
                    <h1 className="pt-5 text-gray-700">{title}</h1>
                    <div className="flex items-center gap-2 italic text-sm">
                      <span>Date: {date}</span>
                      <span>|</span>
                      <span>Source: {source}</span>
                    </div>
                  </div>
                  <h2 className="text-gray-600"> {summary} </h2>
                  <p>{content}</p>
                  <h2 className="text-gray-600">Key-points</h2>
                  <p>{key_points}</p>
                  <h2 className="text-gray-600">Quotes</h2>
                  <p>
                    <strong>{quote_by}:</strong> <i>"{quote}"</i>
                  </p>
                  <div className="h-px bg-red-300 w-full my-6 mt-14" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
