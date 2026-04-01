import { useEffect } from "react";

// Custom hook for scroll animations
const useAnimateOnScroll = (selector = ".animate-hidden", threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

const About = () => {
  useAnimateOnScroll();

  const stats = [
    { number: "10K+", label: "Books Available" },
    { number: "50K+", label: "Happy Readers" },
    { number: "500+", label: "Authors" },
    { number: "4.9★", label: "Average Rating" },
  ];

  const features = [
    {
      icon: "📖",
      title: "Read Online",
      desc: "Dive into thousands of books instantly from your browser. No downloads needed.",
    },
    {
      icon: "🛒",
      title: "Buy & Own",
      desc: "Purchase your favourite titles and keep them in your personal library forever.",
    },
    {
      icon: "🔖",
      title: "Wishlist",
      desc: "Save books you love and come back to them whenever you're ready to read.",
    },
    {
      icon: "⭐",
      title: "Ratings & Reviews",
      desc: "Discover what others are reading and share your own thoughts with the community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-24 px-6 text-center">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-600 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-green-600 opacity-5"></div>

        <div className="max-w-3xl mx-auto relative z-10 animate-hidden">
          <span className="inline-block bg-green-100 text-green-600 text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6 border border-green-200">
            About BookNest
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
            Your World of <br />
            <span className="text-green-600">Books</span>, Reimagined
          </h1>
          <p className="font-body text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            BookNest is a modern platform where readers discover, read, and own books they love — all in one beautiful place.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`animate-hidden delay-${i + 1} bg-green-50 border border-green-200 rounded-2xl p-6 text-center`}
            >
              <p className="font-display text-4xl font-black text-green-600">{stat.number}</p>
              <p className="font-body text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-hidden">
            <span className="font-body text-sm text-green-600 font-medium uppercase tracking-widest">Our Mission</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3 mb-5 leading-snug">
              Making Reading <br /> Accessible to All
            </h2>
            <p className="font-body text-gray-500 leading-relaxed mb-4">
              We believe every person deserves access to great stories and knowledge. BookNest bridges the gap between readers and the books they love — whether you want to read online or own a physical copy.
            </p>
            <p className="font-body text-gray-500 leading-relaxed">
              Our carefully curated library spans fiction, non-fiction, academic, and self-help — something for every kind of reader.
            </p>
          </div>
          <div className="animate-hidden delay-2 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">
            <div className="text-8xl mb-4">📚</div>
            <p className="font-display text-2xl font-bold text-gray-800">"A reader lives a thousand lives."</p>
            <p className="font-body text-sm text-gray-400 mt-3">— George R.R. Martin</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-hidden">
            <span className="font-body text-sm text-green-600 font-medium uppercase tracking-widest">What We Offer</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">Everything a Reader Needs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`animate-hidden delay-${i + 1} bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transform transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-600 text-white text-center">
        <div className="max-w-2xl mx-auto animate-hidden">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Start Your Reading Journey</h2>
          <p className="font-body text-green-100 text-lg mb-8">
            Join thousands of readers who have already found their next favourite book on BookNest.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-green-600 font-body font-semibold px-10 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg"
          >
            Browse Books →
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;