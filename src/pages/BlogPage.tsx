
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, User, Search, Filter, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '../contexts/ThemeContext';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      title: "The Future of STEM Education: Trends to Watch in 2023",
      excerpt: "Explore the emerging technologies and pedagogical approaches that are transforming how STEM subjects are taught in educational institutions worldwide.",
      date: "May 15, 2023",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Education Trends",
      image: "https://images.unsplash.com/photo-1581089783875-26ffb1a23618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0ZW0lMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Bridging the Gap: Making Robotics Accessible in Underserved Schools",
      excerpt: "How innovative approaches and strategic partnerships are helping bring cutting-edge STEM education to schools with limited resources.",
      date: "June 22, 2023",
      readTime: "6 min read",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWRzaG90fGVufDB8fDB8fHww",
      category: "Education Equity",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVuZGVyc2VydmVkJTIwc2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Integrating Robotics into K-12 STEM Curriculum",
      excerpt: "Practical strategies for embedding robotics education across different subject areas and grade levels.",
      date: "April 10, 2023",
      readTime: "5 min read",
      author: "Emma Williams",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      category: "Curriculum",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0ZW0lMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: "The Future of AI in Education: Opportunities for Schools",
      excerpt: "Exploring how artificial intelligence is creating new opportunities for personalized learning and administrative efficiency.",
      date: "March 15, 2023",
      readTime: "7 min read",
      author: "Prof. James Lee",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWRzaG90fGVufDB8fDB8fHww",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpJTIwaW4lMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 5,
      title: "Success Story: Cambridge STEM Academy Implementation",
      excerpt: "A detailed case study of how one school transformed their technology education program with comprehensive planning.",
      date: "February 28, 2023",
      readTime: "9 min read",
      author: "Dr. David Martinez",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWRzaG90fGVufDB8fDB8fHww",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0ZW0lMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 6,
      title: "Building Effective Teacher Professional Development for STEM",
      excerpt: "Research-based approaches to designing and implementing professional development that leads to lasting change.",
      date: "January 18, 2023",
      readTime: "6 min read",
      author: "Lisa Thompson",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Teacher Development",
      image: "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlYWNoZXIlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 7,
      title: "Preparing Students for the Future of Work Through STEM Education",
      excerpt: "How robotics and coding education can develop the transferable skills needed for emerging careers.",
      date: "December 10, 2022",
      readTime: "8 min read",
      author: "Robert Wilson",
      authorImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFuJTIwaGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      category: "Future Skills",
      image: "https://images.unsplash.com/photo-1581091215367-9b6c00b3035c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZ1dHVyZSUyMG9mJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 8,
      title: "Measuring the Impact of Robotics Programs on Student Outcomes",
      excerpt: "Frameworks and tools for evaluating the effectiveness of STEM initiatives and demonstrating return on investment.",
      date: "November 22, 2022",
      readTime: "7 min read",
      author: "Dr. Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1573166364839-ef8936e8d191?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzc2Vzc21lbnR8ZW58MHx8MHx8fDA%3D"
    }
  ];

  const categories = [
    "All Posts",
    "Education Trends",
    "Education Equity",
    "Curriculum",
    "Technology",
    "Case Study",
    "Teacher Development",
    "Future Skills",
    "Assessment"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All Posts" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
                Insights & Resources
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                STEM Education <span className="text-cretile-blue dark:text-cretile-blue">Insights</span> & <span className="text-cretile-yellow">Research</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Stay up-to-date with the latest trends, research, and best practices in STEM education and educational technology.
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search articles..." 
                    className="pl-10 pr-4 py-2 border-gray-300 dark:border-gray-600 rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-cretile-blue dark:text-cretile-yellow">Articles</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="slide-in-section bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-600">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cretile-yellow/90 text-gray-900 hover:bg-cretile-yellow">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                      <div className="flex items-center">
                        <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full mr-2 object-cover" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-cretile-blue text-white hover:bg-cretile-blue/90 dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                      Read Article
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Latest <span className="text-cretile-yellow">Articles</span></h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar with Categories */}
              <div className="w-full md:w-1/4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                    <Filter size={18} className="mr-2 text-cretile-blue dark:text-cretile-yellow" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button 
                          onClick={() => setSelectedCategory(category === 'All Posts' ? null : category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            (category === 'All Posts' && !selectedCategory) || category === selectedCategory
                              ? 'bg-cretile-blue/10 text-cretile-blue dark:bg-cretile-yellow/10 dark:text-cretile-yellow font-medium'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cretile-blue dark:bg-cretile-yellow rounded-xl p-6 text-white dark:text-gray-900">
                  <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-white/90 dark:text-gray-900/90 mb-4 text-sm">
                    Get the latest STEM education insights and resources delivered to your inbox.
                  </p>
                  <Input 
                    type="email"
                    placeholder="Your email address" 
                    className="mb-3 bg-white/20 dark:bg-gray-900/10 border-white/30 dark:border-gray-900/30 placeholder:text-white/70 dark:placeholder:text-gray-900/70 text-white dark:text-gray-900"
                  />
                  <Button className="w-full bg-white text-cretile-blue hover:bg-white/90 dark:bg-gray-900 dark:text-cretile-yellow dark:hover:bg-gray-900/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="w-full md:w-3/4">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                    <p className="text-gray-600 dark:text-gray-300 text-lg">No articles found matching your search criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-cretile-blue text-cretile-blue hover:bg-cretile-blue hover:text-white dark:border-cretile-yellow dark:text-cretile-yellow dark:hover:bg-cretile-yellow dark:hover:text-gray-900"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post) => (
                      <div key={post.id} className="slide-in-section bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-600">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center">
                              <img src={post.authorImage} alt={post.author} className="w-7 h-7 rounded-full mr-2 object-cover" />
                              <span className="text-xs text-gray-600 dark:text-gray-300">{post.author}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Clock size={12} className="mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <a 
                            href="#" 
                            className="mt-4 inline-flex items-center text-cretile-blue dark:text-cretile-yellow text-sm font-medium hover:underline"
                          >
                            Read Full Article <ArrowRight size={14} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-center mt-12">
                  <Button variant="outline" className="border-cretile-blue text-cretile-blue hover:bg-cretile-blue hover:text-white dark:border-cretile-yellow dark:text-cretile-yellow dark:hover:bg-cretile-yellow dark:hover:text-gray-900">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 slide-in-section">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Free <span className="text-cretile-blue dark:text-cretile-yellow">Resources</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Download these free resources to support your STEM education initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="slide-in-section bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600 flex flex-col h-full">
                <div className="bg-cretile-blue/10 dark:bg-cretile-yellow/10 p-4 rounded-lg mb-4 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-blue dark:text-cretile-yellow"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">STEM Curriculum Planning Guide</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  A comprehensive guide to planning and implementing effective STEM curriculum at any educational level.
                </p>
                <Button className="w-full bg-cretile-blue text-white hover:bg-cretile-blue/90 dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                  <Download size={16} className="mr-2" /> Download PDF
                </Button>
              </div>

              <div className="slide-in-section bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600 flex flex-col h-full">
                <div className="bg-cretile-blue/10 dark:bg-cretile-yellow/10 p-4 rounded-lg mb-4 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-blue dark:text-cretile-yellow"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">10 Ready-to-Use Robotics Lesson Plans</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Complete, standards-aligned lesson plans that can be implemented in any classroom with minimal preparation.
                </p>
                <Button className="w-full bg-cretile-blue text-white hover:bg-cretile-blue/90 dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                  <Download size={16} className="mr-2" /> Download ZIP
                </Button>
              </div>

              <div className="slide-in-section bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-100 dark:border-gray-600 flex flex-col h-full">
                <div className="bg-cretile-blue/10 dark:bg-cretile-yellow/10 p-4 rounded-lg mb-4 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cretile-blue dark:text-cretile-yellow"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">STEM Program Assessment Toolkit</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Tools and templates to evaluate the effectiveness of your STEM initiatives and identify areas for improvement.
                </p>
                <Button className="w-full bg-cretile-blue text-white hover:bg-cretile-blue/90 dark:bg-cretile-yellow dark:text-gray-900 dark:hover:bg-cretile-yellow/90">
                  <Download size={16} className="mr-2" /> Download DOCX
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cretile-blue to-cretile-blue/80 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Have a STEM education story to share?</h2>
              <p className="text-xl mb-8 text-white/90">
                We welcome guest contributors from educational institutions to share their experiences, insights, and best practices.
              </p>
              <Button className="bg-cretile-yellow text-gray-900 hover:bg-cretile-yellow/90 px-8 py-6 text-lg">
                Become a Contributor
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPage;
