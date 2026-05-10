import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function BlogArticle3() {
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
              <span className="text-[#ff6b5b] font-semibold text-sm">Robotics</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>
              Computer Vision for Autonomous Robotics
            </h1>
            <div className={`flex items-center gap-6 text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> January 2024
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> Md Asif Hasan
              </span>
              <span>10 min read</span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose prose-lg max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>The Vision-Guided Robot</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Autonomous robots need to perceive and understand their environment to make intelligent decisions. Computer vision—the technology that enables machines to interpret visual information—is the cornerstone of modern robotics. From object detection to path planning, vision systems guide robots through complex tasks.
              </p>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                In this article, I'll explore the key computer vision techniques used in autonomous robotics and share insights from building an autonomous rescue drone capable of detecting humans in emergency scenarios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Core Vision Tasks in Robotics</h2>
              <div className={`space-y-4 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-2">Object Detection</p>
                  <p>Identifying and localizing objects of interest in the environment. Modern approaches use deep learning models like YOLO, Faster R-CNN, and SSD for real-time detection.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-2">Semantic Segmentation</p>
                  <p>Classifying each pixel in an image to understand scene composition. Essential for navigation and obstacle avoidance.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-2">Pose Estimation</p>
                  <p>Determining the position and orientation of objects or the robot itself in 3D space. Critical for manipulation and navigation tasks.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold text-[#0d6b6b] mb-2">Visual SLAM</p>
                  <p>Simultaneous Localization and Mapping using visual features. Enables robots to build maps and navigate in unknown environments.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>The Autonomous Rescue Drone Project</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Our autonomous rescue drone demonstrates practical application of computer vision in robotics. The system is designed to:
              </p>
              <ul className={`space-y-3 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">1.</span>
                  <span><strong>Detect Humans:</strong> Using a pre-trained YOLO model optimized for person detection in indoor environments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">2.</span>
                  <span><strong>Estimate Pose:</strong> Determine the position and orientation of detected individuals for rescue coordination.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">3.</span>
                  <span><strong>Navigate Autonomously:</strong> Avoid obstacles while searching for and approaching detected humans.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">4.</span>
                  <span><strong>Communicate Status:</strong> Relay real-time video feed and detection results to rescue coordinators.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Technical Implementation</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                The drone runs a lightweight vision pipeline optimized for embedded systems:
              </p>
              <div className={`p-6 rounded-lg my-6 ${theme === "dark" ? "bg-[#1a1f2e] border border-[#2a3142]" : "bg-white border border-[#e0e0e0]"}`}>
                <p className={`font-mono text-sm mb-3 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
                  Vision Pipeline:<br/>
                  1. Capture frame from onboard camera<br/>
                  2. Preprocess: resize, normalize<br/>
                  3. Run YOLO inference<br/>
                  4. Post-process: NMS, filtering<br/>
                  5. Extract bounding boxes<br/>
                  6. Send to navigation module<br/>
                  7. Update flight path
                </p>
              </div>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                We use TensorFlow Lite for model optimization, achieving 15 fps inference on the Jetson Nano embedded GPU.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Challenges and Solutions</h2>
              <div className={`space-y-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Computational Constraints</p>
                  <p><strong>Challenge:</strong> Limited processing power on embedded systems. <strong>Solution:</strong> Model quantization, pruning, and using efficient architectures like MobileNet.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Lighting Variations</p>
                  <p><strong>Challenge:</strong> Performance degrades in poor lighting. <strong>Solution:</strong> Data augmentation during training, histogram equalization preprocessing.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Real-time Latency</p>
                  <p><strong>Challenge:</strong> Vision processing must keep pace with drone dynamics. <strong>Solution:</strong> Multi-threading, GPU acceleration, frame skipping strategies.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Robustness</p>
                  <p><strong>Challenge:</strong> False positives and missed detections. <strong>Solution:</strong> Temporal filtering, confidence thresholding, ensemble methods.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Future Directions</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                The field of computer vision for robotics continues to evolve rapidly:
              </p>
              <ul className={`space-y-2 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <li>• <strong>3D Vision:</strong> Depth cameras and 3D reconstruction for better environmental understanding</li>
                <li>• <strong>Edge AI:</strong> More sophisticated models running directly on edge devices</li>
                <li>• <strong>Multi-modal Fusion:</strong> Combining vision with LiDAR, radar, and other sensors</li>
                <li>• <strong>Continual Learning:</strong> Robots that improve their vision models through experience</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Conclusion</h2>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Computer vision is the eyes of autonomous robots. By combining modern deep learning techniques with careful system design, we can create robots that perceive, understand, and interact with the world intelligently. Whether it's rescue operations, industrial inspection, or autonomous navigation, vision-guided robotics continues to push the boundaries of what's possible.
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
