import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Let's Connect</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Email</p>
                  <a
                    href="mailto:chaligohar101@gmail.com"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    chaligohar101@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Phone</p>
                  <a
                    href="tel:+923006726945"
                    className="text-accent hover:text-primary transition-colors"
                  >
                    +92 300 6726945
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Location</p>
                  <p className="text-purple-400">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-300 font-medium">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/ali-gohar-41644b344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/ali-gohar-41644b344
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
