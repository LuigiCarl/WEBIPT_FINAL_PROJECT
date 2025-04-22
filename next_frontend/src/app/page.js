import Image from "next/image";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <div
          className="h-screen w-full flex flex-col items-center justify-center px-6 py-20 mt-0 
                text-white text-center pt-20 bg-black/60"
          style={{
            backgroundImage: "url('backround2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Welcoming Message */}
          <div className="max-w-4xl bg-black/25 p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              <strong className="text-emerald-600">Welcome to Knowledge Haven — Your Gateway to Books & Ideas!</strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Browse our collection for captivating reads. View descriptions to find your perfect book.
              Borrow & enjoy the joy of reading anytime.
            </p>

            <p className="mt-6 text-2xl font-semibold text-emerald-600">Happy reading!</p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-emerald-600 bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">About Us</h2>
          <p className="text-lg">
            Welcome to our platform! We're passionate about bringing you the best reads,
            helping you discover new stories, and fostering a love for literature.
          </p>
          <p className="mt-4 text-lg">
            Whether you're looking for recommendations or simply browsing, we're here to make
            your reading experience enjoyable and effortless. Happy reading!
          </p>
        </div>
        {/* Our Services */}
        <div className="bg-gray-700 text-white p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Our Services</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong className="text-emerald-600">Personalized Book Recommendations:</strong>
              Receive tailored suggestions based on your preferences and reading history.
            </li>
            <li>
              <strong className="text-emerald-600">Borrowing Made Easy:</strong>
              Borrow books from our extensive collection with a seamless and user-friendly process.
            </li>
            <li>
              <strong className="text-emerald-600">Community Events:</strong>
              Join book clubs, author meetups, and engaging literary discussions.
            </li>
            <li>
              <strong className="text-emerald-600">Curated Collections:</strong>
              Explore themed selections, including classics, bestsellers, and hidden gems.
            </li>
          </ul>
        </div>
        {/* Our team */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="team-member1.jpg"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-emerald-600">Alex Johnson</h3>
              <p className="text-sm text-gray-200">Founder & CEO</p>
              <p className="mt-2 text-gray-400">
                Alex is passionate about fostering a love for reading and ensuring everyone can access great literature.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="team-member2.jpg"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-emerald-600">Taylor Smith</h3>
              <p className="text-sm text-gray-200">Chief Content Curator</p>
              <p className="mt-2 text-gray-400">
                Taylor specializes in finding hidden literary gems and creating captivating themed collections.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="team-member3.jpg"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-emerald-600">Jordan Lee</h3>
              <p className="text-sm text-gray-200">Community Manager</p>
              <p className="mt-2 text-gray-400">
                Jordan organizes book clubs, author meetups, and interactive events to bring readers together.
              </p>
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Email Us</h2>
          <p className="text-lg mb-4">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full rounded-lg border-gray-600 bg-gray-700 text-white p-2 focus:border-emerald-400 focus:ring focus:ring-emerald-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-lg border-gray-600 bg-gray-700 text-white p-2 focus:border-emerald-400 focus:ring focus:ring-emerald-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 w-full rounded-lg border-gray-600 bg-gray-700 text-white p-2 focus:border-emerald-400 focus:ring focus:ring-emerald-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block w-full rounded bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Testimonials */}
        <div className="flex flex-wrap justify-around items-center space-x-4 bg-gray-800 text-white p-4">
          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">Library Staff</h3>
            <p>Meet our dedicated team who make your library experience seamless and enjoyable.</p>
          </div>

          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">Location & Directions</h3>
            <p>123 Knowledge St, Booktown, BK 56789. Easily accessible via public transport and with ample parking.</p>
          </div>

          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">User Services</h3>
            <ul className="list-none">
              <li>Search Catalog</li>
              <li>Borrow & Return</li>
              <li>Reserve Book</li>
              <li>Digital Library</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">Policies</h3>
            <ul className="list-none">
              <li>Borrowing Rules</li>
              <li>Late Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">Help & Support</h3>
            <p>Need assistance? We're here to help with any queries or concerns you may have.</p>
          </div>

          <div className="text-center">
            <h3 className="text-emerald-400 font-semibold">Newsletter</h3>
            <p>Subscribe to our newsletter for updates on new arrivals, library events, and more.</p>
            <form className="mt-2">
              <input
                type="email"
                className="w-full rounded-lg border-gray-600 bg-gray-700 text-white p-2 mb-2 focus:border-emerald-400 focus:ring focus:ring-emerald-300"
                placeholder="Your email"
                required
              />
              <button
                type="submit"
                className="inline-block w-full rounded bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
     


        {/* Footer Section */ }
  <footer className="bg-gray-900 text-gray-400 py-6 mt-8">
    <div className="container mx-auto text-center">
      <p className="text-sm mb-4">
        Copyright © 2025 Knowledge Haven. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="#"
          className="text-gray-400 hover:text-emerald-600 transition"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-emerald-600 transition"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-emerald-600 transition"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-emerald-600 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </footer>
      </section >
    </div >
  );
}
