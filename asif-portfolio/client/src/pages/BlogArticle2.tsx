import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function BlogArticle2() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419]" : "bg-gradient-to-b from-[#fffaf0] to-[#f5f0e8]"}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/80 border-b border-[#2a3142]" : "bg-white/80 border-b border-[#e0e0e0]"} backdrop-blur-md`}>
        <div className="container flex items-center justify-between py-4">
          <a href="/" className={`text-2xl font-bold ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Asif</a>
          <a href="/#blog" className={`inline-flex items-center gap-2 transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
            <ArrowLeft size={20} /> Back to Blog
          </a>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20">
        <div className="container max-w-3xl">
          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: theme === "dark" ? "#ff6b5b20" : "#ff6b5b10" }}>
              <span className="text-[#ff6b5b] font-semibold text-sm">Embedded Systems</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>
              Building IoT Systems with Arduino and Cloud Integration
            </h1>
            <div className={`flex items-center gap-6 text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> March 2024
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> Md Asif Hasan
              </span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose prose-lg max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>The IoT Revolution</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                The Internet of Things (IoT) has transformed how we interact with the physical world. From smart homes to industrial automation, IoT systems enable real-time monitoring and control of physical devices. Arduino, with its accessibility and flexibility, has become the go-to platform for IoT prototyping and development.
              </p>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                In this article, I'll share practical insights from building IoT systems that seamlessly integrate with cloud platforms, enabling remote monitoring and control.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Hardware Setup</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                The foundation of any IoT system is robust hardware. Here's what you need:
              </p>
              <div className={`space-y-3 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-1">Microcontroller</p>
                  <p>Arduino Uno or Arduino MKR WiFi 1010 for WiFi connectivity. The MKR series is particularly suitable for cloud integration.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-1">Sensors</p>
                  <p>DHT22 for temperature/humidity, ultrasonic sensors for distance, analog sensors for various measurements.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-1">Connectivity</p>
                  <p>WiFi shield or built-in WiFi module for internet connectivity. Consider power consumption when selecting components.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-1">Power Management</p>
                  <p>Reliable power supply with voltage regulation. Battery-powered systems require careful power budgeting.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Cloud Integration</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Connecting your Arduino to the cloud opens up powerful possibilities:
              </p>
              <ul className={`space-y-3 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">1.</span>
                  <span><strong>MQTT Protocol:</strong> Lightweight publish-subscribe protocol ideal for IoT. Services like AWS IoT Core and Azure IoT Hub support MQTT.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">2.</span>
                  <span><strong>REST APIs:</strong> Traditional HTTP-based communication for simpler use cases. Good for occasional data transmission.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">3.</span>
                  <span><strong>Cloud Platforms:</strong> Firebase, ThingSpeak, or custom backends. Choose based on scalability and feature requirements.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Real-World Example: Smart Monitoring System</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Consider a temperature and humidity monitoring system for a greenhouse. The Arduino collects sensor data every 5 minutes and sends it to the cloud. The cloud service stores the data, performs analysis, and triggers alerts if values exceed thresholds.
              </p>
              <div className={`p-6 rounded-lg my-6 ${theme === "dark" ? "bg-[#1a1f2e] border border-[#2a3142]" : "bg-white border border-[#e0e0e0]"}`}>
                <p className={`font-mono text-sm mb-3 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
                  Key Components:<br/>
                  • Arduino reads DHT22 sensor<br/>
                  • WiFi module connects to internet<br/>
                  • Data sent via MQTT to cloud broker<br/>
                  • Web dashboard displays real-time data<br/>
                  • Alerts triggered for anomalies
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Best Practices</h2>
              <div className={`space-y-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Security First</p>
                  <p>Use HTTPS/TLS for all communications. Implement authentication and encryption. Never hardcode credentials in firmware.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Power Efficiency</p>
                  <p>Use sleep modes when possible. Optimize WiFi connection intervals. Consider battery life in system design.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Error Handling</p>
                  <p>Implement robust error handling and retry logic. Log errors locally for debugging. Gracefully handle network failures.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Scalability</p>
                  <p>Design systems to handle multiple devices. Use cloud infrastructure that scales automatically.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Conclusion</h2>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Building IoT systems with Arduino and cloud integration is more accessible than ever. By following best practices and leveraging modern cloud platforms, you can create robust, scalable systems that monitor and control the physical world in real-time. Start small, iterate, and gradually expand your system as you gain experience.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t" style={{ borderColor: theme === "dark" ? "#2a3142" : "#e0e0e0" }}>
            <a href="/#blog">
              <Button className={`${theme === "dark" ? "bg-[#00d9ff] text-[#0f1419] hover:bg-[#00c9ef]" : "bg-[#0d6b6b] text-white hover:bg-[#0a4f4f]"}`}>
                <ArrowLeft size={20} className="mr-2" /> Back to Blog
              </Button>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419] border-t border-[#2a3142]" : "bg-[#0d6b6b]"}`}>
        <div className="container text-center">
          <p className={theme === "dark" ? "text-[#a0a0a0]" : "text-white/80"}>
            © 2025 Md Asif Hasan. Crafted with passion for engineering and design.
          </p>
        </div>
      </footer>
    </div>
  );
}
