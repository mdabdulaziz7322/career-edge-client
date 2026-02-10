const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Prepare for Your First Tech Interview",
      author: "Career Edge Team",
      date: "Feb 5, 2026",
      excerpt:
        "Learn essential tips and strategies to crack your first technical interview with confidence.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 2,
      title: "Top 10 In-Demand Skills in 2026",
      author: "HR Expert",
      date: "Feb 2, 2026",
      excerpt:
        "Discover the most in-demand skills employers are looking for this year.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 3,
      title: "How to Build a Strong Resume",
      author: "Career Coach",
      date: "Jan 28, 2026",
      excerpt:
        "A step-by-step guide to creating a resume that stands out to recruiters.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
    },
  ];

  return (
    <div className="min-h-screen bg-[#4993FA] py-25 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mt-5 uppercase">
            Career Edge Blog
          </h1>
          <p className="text-white/90 mt-3">
            Career tips, job market insights & interview preparation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-white shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-[#4993FA]">
                  {blog.title}
                </h2>

                <p className="text-sm text-gray-500">
                  By {blog.author} • {blog.date}
                </p>

                <p className="text-gray-700 mt-2">
                  {blog.excerpt}
                </p>

                <div className="card-actions justify-end mt-4">
                  <button className="btn bg-[#4993FA] text-white hover:bg-blue-600 border-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
