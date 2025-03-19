
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  imageSrc,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cretile-blue/20 dark:bg-cretile-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-cretile-blue/10 dark:bg-cretile-yellow/10 text-cretile-blue dark:text-cretile-yellow rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cretile-blue dark:group-hover:text-cretile-yellow transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">By {author}</span>
          <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow hover:underline font-medium text-sm group">
            Read More 
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
