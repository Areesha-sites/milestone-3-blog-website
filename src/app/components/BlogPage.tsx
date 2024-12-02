"use client";
import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = `/data/blogsData.json`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  return (
    <div className="container mx-auto px-4 ">
      <div className="">
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between ml-[2%] gap-9">
      <BlogCards
        blogs={blogs}
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        pageSize={pageSize}
      />  
      <div className="">
      <SideBar/>
      </div>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalBlogs={blogs.length}
        pageSize={pageSize}
      />
    </div>
  );
};
export default BlogPage;