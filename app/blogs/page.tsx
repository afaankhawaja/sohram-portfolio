"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogSection {
  title: string;
  content: string;
  subSections?: { title: string; content: string }[];
}

interface Blog {
  id: string;
  tag: string;
  uploadDate: string;
  heading: string;
  image1: string;
  introduction: string;
  image2: string;
  sections: BlogSection[];
}

const blogs: Blog[] = [
  {
    id: "1",
    tag: "UI UX",
    uploadDate: "July 26, 2025",
    heading: "5 UI UX Trends That $ Will Dominate 2025",
    image1: "/assets/blogs/blog1_image1.png",
    introduction: `As we step into 2025, the landscape of UI/UX design continues to evolve at an unprecedented pace. At The Apex UI, we believe that staying ahead of design trends isn't just about following fashion—it's about creating digital experiences that truly resonate with users and drive business success. Based on our extensive research and industry insights, here are the five most impactful UI/UX design trends that will shape the digital landscape in 2025.
1. AI-Driven Personalization: Beyond Basic Customization
The era of one-size-fits-all interfaces is rapidly ending. In 2025, we're witnessing a shift toward intelligent personalization that goes far beyond displaying a user's name or remembering their preferences. AI-driven personalization creates adaptive interfaces that learn from user behavior patterns, predict needs, and modify the user experience in real-time.`,
    image2: "/assets/blogs/blog1_image2.png",
    sections: [
      {
        title: "AI-Driven Personalization: $Beyond Basic Customization",
        content:
          "The era of one-size-fits-all interfaces is rapidly ending. In 2025, we're witnessing a shift toward intelligent personalization that goes far beyond displaying a user's name or remembering their preferences. AI-driven personalization creates adaptive interfaces that learn from user behavior patterns, predict needs, and modify the user experience in real-time",
        subSections: [
          {
            title: "Implementation Strategy:",
            content:
              "Start by collecting meaningful user interaction data, then gradually introduce personalization features that provide immediate value. Focus on creating experiences that feel helpful rather than invasive.",
          },
        ],
      },
      {
        title: "2. Minimalism with Meaningful: $Micro-Interactions",
        content:
          "The minimalist design philosophy is evolving to include purposeful micro-interactions that enhance usability without cluttering the interface. These subtle animations and feedback systems guide users through complex processes while maintaining the clean aesthetic that modern users expect.",
        subSections: [
          {
            title: "Key Elements:",
            content: `Purposeful hover states that provide instant feedback.
Loading animations that inform rather than just entertain. 
Transition effects that maintain context during navigation. 
Subtle visual cues that guide user attention naturally. 
Business Impact: Well-designed micro-interactions can increase user engagement by up to 40% and significantly reduce user confusion during complex tasks.`,
          },
          {
            title: "Business Impact: ",
            content: `
            Well-designed micro-interactions can increase user engagement by up to 40% and significantly reduce user confusion during complex tasks.`,
          },
        ],
      },
      {
        title: "3. Accessibility-First Design: $ No Longer Optional",
        content: `
        With the European Accessibility Act compliance deadline approaching and growing awareness of inclusive design principles, accessibility has moved from "nice-to-have" to absolutely essential. In 2025, accessibility-first design means building products that work beautifully for everyone from the ground up.`,
        subSections: [
          {
            title: "Core Focus Areas:",
            content: `Color contrast ratios that exceed WCAG 2.2 standards. 
Keyboard navigation that feels as intuitive as mouse interaction. 
Screen reader optimization that doesn't compromise visual design. 
Voice interface integration for hands-free interaction. 
Strategic Advantage: Companies that prioritize accessibility from the start avoid costly retrofitting and tap into the $8 trillion disability market while creating better experiences for all users.`,
          },
        ],
      },
      {
        title: "4. 3D Elements and $ Spatial Design",
        content: `
        As computing power increases and web technologies advance, 3D elements are becoming more practical and impactful in everyday web design. However, the trend isn't about flashy 3D for its own sake—it's about using dimensional design to create more intuitive and engaging user experiences.`,
        subSections: [
          {
            title: "Practical Applications:",
            content: `
            Product visualization that allows users to interact with items before purchase. 
Spatial navigation that makes complex information hierarchies more understandable. 
Layered interfaces that provide visual depth without overwhelming users. 
AR integration that bridges digital and physical experiences. 
Performance Considerations: Successful 3D implementation requires careful optimization to ensure fast loading times and smooth performance across all devices. 
 Sustainable and Ethical Design Patterns
The growing awareness of technology's environmental and social impact is driving a trend toward more responsible design practices. This includes optimizing for energy efficiency, respecting user privacy, and creating transparent, honest interfaces.`,
          },
          {
            title: "Key Principles:",
            content: `
            Dark mode options that reduce screen energy consumption. 
Optimized images and code that minimize data usage. 
Clear privacy controls that put users in charge of their data. 
Honest design patterns that avoid manipulation. 
Long-term Benefits: Sustainable design practices not only reduce environmental impact but also create faster, more efficient user experiences that users trust and prefer.`,
          },
          {
            title: "Conclusion",
            content: `These trends represent more than visual preferences—they reflect fundamental shifts in how users interact with technology and what they expect from digital experiences.At The Apex UI, we help businesses navigate these trends strategically, implementing changes that enhance user satisfaction while driving business results.
The key to success in 2025 isn't following every trend, but selecting the approaches that best serve your users and business objectives.By focusing on AI-driven personalization, meaningful minimalism, accessibility-first design, thoughtful 3D implementation, and sustainable practices, you can create digital experiences that not only look great but perform exceptionally.
Ready to future-proof your digital presence? Let's discuss how these trends can transform your user experience and business outcomes.`,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    tag: "Development",
    uploadDate: "July 25, 2025",
    heading:
      "The Full-Stack Developer's Guide to Building Scalable Web Applications in 2025",
    image1: "/assets/blogs/blog2_image1.png",
    introduction:
      "Next.js 15 brings exciting updates to the framework. Learn about the latest features and improvements.",
    image2: "/images/blog2-image2.jpg",
    sections: [],
  },
  {
    id: "3",
    tag: "UIUX",
    uploadDate: "July 24, 2025",
    heading:
      "The Business Impact of Great UI/UX Design: ROI, Metrics, and Success Stories",
    image1: "/assets/blogs/blog3_image1.png",
    introduction:
      "Accessibility in design is more important than ever. Discover best practices for inclusive UI/UX.",
    image2: "/images/blog3-image2.jpg",
    sections: [],
  },
  {
    id: "4",
    tag: "UIUX",
    uploadDate: "July 24, 2025",
    heading:
      "Unleashing Digital Excellence: The Apex UI Approach to Software Development",
    image1: "/assets/blogs/blog4_image1.png",
    introduction:
      "Accessibility in design is more important than ever. Discover best practices for inclusive UI/UX.",
    image2: "/images/blog3-image2.jpg",
    sections: [],
  },
];

export default function BlogsPage() {
  const router = useRouter();
  const defaultBlog = blogs[0];

  const handleReadMore = (id: string) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="container text-center mx-auto mt-[120px]">
      {/* Default Blog Display */}
      <div className="bg-white max-lg:px-2 flex flex-col items-center">
        <div className="flex items-center justify-center text-[16px]  leading-[150%] mb-[48px]">
          <span className=" font-bold text-black ">{defaultBlog.tag}</span>
          <span className="mx-2 font-medium text-[#999999]">•</span>
          <span>{defaultBlog.uploadDate}</span>
        </div>
        <h1 className="text-[64px] max-lg:text-[30px] max-w-[1264px] font-bold mb-[83px]">
          <span className="text-black">
            {defaultBlog.heading.split("$")[0]}
          </span>
          <span className="text-[#AA253D]">
            {defaultBlog.heading.split("$").slice(1).join(" ")}
          </span>
        </h1>
        <Image
          src={defaultBlog.image1}
          alt={defaultBlog.heading}
          width={1232}
          height={608}
          className="rounded-[60px] mb-[62px]"
        />
        <div className="bg-gray-100 px-2 rounded-[50px] w-[calc(100vw-16px)] text-center flex flex-col items-center min-w-full">
          <h2 className="text-[45px] max-lg:text-[30px] leading-[180%] text-black font-bold mb-2 pt-[14px]">
            Introduction
          </h2>
          <p className="text-black mx-auto text-center text-[20px] max-lg:text-[16px] leading-[40px] max-w-[1024px]">
            {defaultBlog.introduction}
          </p>
          <Image
            src={defaultBlog.image2}
            alt={defaultBlog.heading}
            width={1232}
            height={376}
            className="rounded-[60px] mb-[78px] mt-8"
          />
          {defaultBlog.sections.map((section, index) => (
            <div key={index} className="mb-10 max-w-[1104px]">
              <h3 className="text-[30px] max-lg:text-[20px] leading-[40px] font-semibold mb-5">
                <span className="text-black">
                  {section.title.split("$")[0]}
                </span>
                <span className="text-[#AA253D] max-lg:text-[20px]">
                  {section.title.split("$").slice(1).join(" ")}
                </span>
              </h3>
              <p className="text-black mb-5 max-lg:text-[16px] leading-[40px]">
                {defaultBlog.id === "3"
                  ? section.content
                      .split(". ")
                      .map(
                        (item, i) =>
                          item.trim() && <li key={i}>{item.trim()}</li>,
                      )
                  : section.content}
              </p>
              {section.subSections?.map((sub, subIndex) => (
                <div key={subIndex} className="ml-4 mb-5">
                  <h4 className="text-lg font-medium">{sub.title}</h4>
                  <ul className="list-disc leading-[40px] list-inside text-black">
                    {sub.content
                      .split(". ")
                      .map(
                        (item, i) =>
                          item.trim() && <li key={i}>{item.trim()}</li>,
                      )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blogs Section */}
      <div className="text-[64px] max-lg:text-[30px]  font-bold leading-[64px] mt-[102px] mb-[119px]">
        {" "}
        Popular <span className="text-[#AA253D]">Blogs</span>
      </div>
      <div className="grid grid-cols-1 max-md:place-items-center md:grid-cols-3 gap-6 mb-[74px] max-lg:px-2">
        {blogs
          .filter((blog) => blog.id !== defaultBlog.id)
          .map((blog) => (
            <div
              key={blog.id}
              className=" max-w-[402px] cursor-pointer"
              onClick={() => handleReadMore(blog.id)}
            >
              <Image
                src={blog.image1}
                alt={blog.heading}
                width={400}
                height={360}
                className="rounded-[16px] mb-10"
              />
              <div className="flex items-center text-gray-500 gap-2 text-sm mb-2">
                <span className="text-[12px] text-[#333333] font-bold leading-[150%]">
                  {blog.tag}
                </span>
                <span className="text-[#999999] leading-[150%] text-[12px]">
                  {blog.uploadDate}
                </span>
              </div>
              <h3 className="text-lg text-left font-semibold mb-3 mt-4">
                <span className="text-black text-[24px] max-lg:text-[20px] leading-8 font-bold">
                  {blog.heading}
                </span>
              </h3>
              <p className="text-[#666666] text-left leading-[150%] text-[16px] max-lg:text-[12px] mb-2 line-clamp-3">
                {blog.introduction}
              </p>
              <button className="text-[#AA253D] text-[18px] flex justify-start leading-[150%] font-bold">
                Read More...
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
