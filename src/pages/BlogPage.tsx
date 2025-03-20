
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Calendar, User, ArrowRight, Search, FileDown, Filter, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import BlogPost from '../components/BlogPost';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.slide-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.slide-in-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const featuredPosts = [
    {
      id: 1,
      title: "Revolutionizing STEM Education with Interactive Robotics Platforms",
      excerpt: "Discover how leading educational institutions are transforming their STEM programs through innovative robotics integration that bridges theory and practice.",
      date: "May 15, 2023",
      author: "Dr. Sarah Johnson",
      category: "Education Innovation",
      readTime: "6 min",
      imageSrc: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI in Educational Institutions: Practical Applications",
      excerpt: "Explore how artificial intelligence is creating new opportunities for personalized learning experiences and administrative efficiency in modern education.",
      date: "June 22, 2023",
      author: "Prof. Michael Lee",
      category: "Technology Trends",
      readTime: "8 min",
      imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Case Study: Cambridge STEM Academy Implementation",
      excerpt: "Learn how Cambridge STEM Academy transformed their technology education with Cretile's comprehensive robotics solution.",
      date: "April 10, 2023",
      author: "Emma Williams",
      category: "Case Study",
      readTime: "5 min",
      imageSrc: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Preparing Students for Industry 4.0: Essential Skills and Technologies",
      excerpt: "An in-depth look at the critical skills students need to thrive in the fourth industrial revolution and how educational institutions can adapt.",
      date: "March 18, 2023",
      author: "Dr. Robert Chen",
      category: "Education Strategy",
      readTime: "7 min",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Bridging the STEM Gap: Strategies for Inclusive Technology Education",
      excerpt: "Practical approaches to making STEM education more accessible and engaging for all students, regardless of background or prior experience.",
      date: "February 25, 2023",
      author: "Dr. Amara Patel",
      category: "Inclusivity",
      readTime: "6 min",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "ROI of Educational Robotics: Measuring Impact and Outcomes",
      excerpt: "How to effectively measure and communicate the return on investment of robotics education programs to stakeholders and decision-makers.",
      date: "January 30, 2023",
      author: "Mark Anderson",
      category: "Business Impact",
      readTime: "9 min",
      imageSrc: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const categories = [
    { name: "Education Innovation", count: 15 },
    { name: "Technology Trends", count: 12 },
    { name: "Case Studies", count: 8 },
    { name: "Education Strategy", count: 10 },
    { name: "Business Impact", count: 7 },
    { name: "Inclusivity", count: 6 },
    { name: "Research Updates", count: 9 }
  ];

  const resources = [
    { title: "STEM Education Implementation Guide", type: "PDF Guide" },
    { title: "Educational Robotics ROI Calculator", type: "Tool" },
    { title: "Future of Education Technology Report 2023", type: "Research Report" }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cretile-yellow/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cretile-blue/10 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto slide-in-section">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-cretile-blue text-cretile-blue dark:border-cretile-yellow dark:text-cretile-yellow">
                Industry Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="text-cretile-blue dark:text-cretile-blue">STEM Education</span> <span className="text-cretile-yellow">Insights</span> & Resources
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Expert perspectives, case studies, and research to help your institution excel in STEM education delivery
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="relative w-full max-w-md">
                  <Input 
                    type="search" 
                    placeholder="Search articles..." 
                    className="pr-10 bg-white dark:bg-gray-800"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button className="bg-cretile-blue hover:bg-cretile-blue/90 text-white dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                  Download Resources <FileDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-cretile-blue dark:text-cretile-yellow">Articles</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our latest thought leadership on the future of educational technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="slide-in-section bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="h-64 md:h-full overflow-hidden">
                      <img 
                        src={post.imageSrc} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center mb-3">
                        <Badge className="bg-cretile-blue/10 text-cretile-blue dark:bg-cretile-yellow/10 dark:text-cretile-yellow">
                          {post.category}
                        </Badge>
                        <span className="ml-auto flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          {post.readTime} read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                      <div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <User size={14} className="mr-1" />
                          {post.author}
                          <span className="mx-2">•</span>
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow font-medium">
                          Read Article <ArrowRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent <span className="text-cretile-yellow">Articles</span></h2>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter size={14} /> Filter
                  </Button>
                </div>

                <div className="space-y-8">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="slide-in-section bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="grid md:grid-cols-3 h-full">
                        <div className="h-56 md:h-auto overflow-hidden">
                          <img 
                            src={post.imageSrc} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center mb-3">
                            <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                              {post.category}
                            </Badge>
                            <span className="ml-auto flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Clock size={14} className="mr-1" />
                              {post.readTime} read
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                          <div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                              <User size={14} className="mr-1" />
                              {post.author}
                              <span className="mx-2">•</span>
                              <Calendar size={14} className="mr-1" />
                              {post.date}
                            </div>
                            <a href="#" className="inline-flex items-center text-cretile-blue dark:text-cretile-yellow font-medium">
                              Read Article <ArrowRight size={16} className="ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-cretile-blue hover:bg-cretile-blue/90 text-white dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                    Load More Articles
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between py-2 text-gray-700 dark:text-gray-300 hover:text-cretile-blue dark:hover:text-cretile-yellow transition-colors">
                          <span className="flex items-center">
                            <Tag size={14} className="mr-2 text-cretile-blue dark:text-cretile-yellow" />
                            {category.name}
                          </span>
                          <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Free Resources</h3>
                  <ul className="space-y-4">
                    {resources.map((resource, index) => (
                      <li key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                        <a href="#" className="flex items-start hover:text-cretile-blue dark:hover:text-cretile-yellow transition-colors">
                          <FileDown size={18} className="mr-2 mt-1 text-cretile-blue dark:text-cretile-yellow" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{resource.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{resource.type}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full border-cretile-blue text-cretile-blue hover:bg-cretile-blue hover:text-white dark:border-cretile-yellow dark:text-cretile-yellow dark:hover:bg-cretile-yellow dark:hover:text-gray-900">
                      View Resource Library
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cretile-blue to-cretile-blue/80 text-white rounded-xl p-6 shadow">
                  <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-white/80 mb-4">Get the latest STEM education insights and resources delivered to your inbox.</p>
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-3"
                  />
                  <Button className="w-full bg-cretile-yellow text-gray-900 hover:bg-cretile-yellow/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cretile-blue to-cretile-blue/80 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform STEM education at your institution?</h2>
              <p className="text-xl mb-8 text-white/80">
                Schedule a consultation with our education technology specialists to discuss your institution's specific needs and goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="bg-cretile-yellow text-gray-900 px-8 py-3 rounded-full text-lg font-medium transition-colors hover:bg-cretile-yellow/90">
                  Schedule Consultation
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Download Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPage;
