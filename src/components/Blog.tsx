
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogPost from './BlogPost';

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const blogPosts = [
    {
      title: "Integrating Robotics into K-12 STEM Curriculum",
      excerpt: "Discover how educational institutions are revolutionizing their STEM programs with robotics integration.",
      date: "May 15, 2023",
      author: "Dr. Sarah Johnson",
      category: "Curriculum",
      imageSrc: "https://placehold.co/600x400/3770B5/white?text=Robotics+Curriculum",
    },
    {
      title: "The Future of AI in Education: Opportunities for Schools",
      excerpt: "Explore how artificial intelligence is creating new opportunities for personalized learning in STEM education.",
      date: "June 22, 2023",
      author: "Prof. Michael Lee",
      category: "Technology",
      imageSrc: "https://placehold.co/600x400/FFD036/dark?text=AI+in+Education",
    },
    {
      title: "Success Story: Cambridge STEM Academy Implementation",
      excerpt: "Learn how Cambridge STEM Academy transformed their technology education with Cretile's solution.",
      date: "April 10, 2023",
      author: "Emma Williams",
      category: "Case Study",
      imageSrc: "https://placehold.co/600x400/3770B5/white?text=Success+Story",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-cretile-yellow/20 dark:bg-cretile-blue/20 text-cretile-blue dark:text-cretile-yellow rounded-full text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white">STEM Education <span className="text-cretile-blue dark:text-cretile-yellow">Insights</span></h2>
          <p className="section-subheading text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends, research, and success stories in STEM education
          </p>
        </div>
        
        <div ref={sectionRef} className="staggered-fade-in grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              imageSrc={post.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center btn-outline dark:border-cretile-yellow dark:text-cretile-yellow dark:hover:bg-cretile-yellow dark:hover:text-gray-900">
            View All Articles
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
