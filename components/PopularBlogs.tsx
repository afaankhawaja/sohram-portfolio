// components/PopularBlogs.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  tag: string;
  uploadDate: string;
  image: string;
  introduction: string;
}

interface PopularBlogsProps {
  blogs: BlogPost[];
}

export default function PopularBlogs({ blogs }: PopularBlogsProps) {
  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Popular <span className="text-red-600">Blogs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="relative h-48 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              {/* Tag and Date */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  {blog.tag}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {blog.uploadDate}
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {blog.title}
              </h3>

              {/* Blog Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {blog.introduction}
              </p>

              {/* Read More Link */}
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
              >
                Read More...
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
