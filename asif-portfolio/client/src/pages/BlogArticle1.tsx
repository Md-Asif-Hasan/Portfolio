import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function BlogArticle1() {
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
              <span className="text-[#ff6b5b] font-semibold text-sm">Deep Learning</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>
              Understanding Variational Autoencoders for Video Summarization
            </h1>
            <div className={`flex items-center gap-6 text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> May 2024
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> Md Asif Hasan
              </span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose prose-lg max-w-none ${theme === "dark" ? "prose-invert" : ""}`}>
            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Introduction</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Video summarization is a critical challenge in the era of massive video data. With billions of hours of video content generated daily, the ability to automatically extract the most important frames—keyframes—from long videos is invaluable for content management, video retrieval, and efficient storage.
              </p>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Variational Autoencoders (VAEs) offer an elegant probabilistic approach to this problem. Unlike traditional methods that rely on hand-crafted features, VAEs learn a latent representation of video frames in an unsupervised manner, enabling more meaningful and generalizable summarization.
              </p>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>What are Variational Autoencoders?</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                A Variational Autoencoder is a generative model that learns to encode data into a latent space and then decode it back to the original space. The key difference from standard autoencoders is the probabilistic nature of the latent space.
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                In a VAE, the encoder maps input data to a distribution (typically Gaussian) in the latent space rather than a single point. This stochastic approach encourages the model to learn meaningful representations that capture the underlying structure of the data.
              </p>
              <div className={`p-6 rounded-lg my-6 ${theme === "dark" ? "bg-[#1a1f2e] border border-[#2a3142]" : "bg-white border border-[#e0e0e0]"}`}>
                <p className={`font-mono text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
                  VAE Loss = Reconstruction Loss + KL Divergence<br/>
                  The KL divergence term regularizes the latent space, pushing it toward a standard normal distribution.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Application to Video Summarization</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                In video summarization, we can leverage VAEs in several ways:
              </p>
              <ul className={`space-y-3 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">1.</span>
                  <span><strong>Frame Encoding:</strong> Extract visual features from each frame using a pre-trained CNN, then encode them into the VAE's latent space.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">2.</span>
                  <span><strong>Latent Space Analysis:</strong> Analyze the latent representations to identify frames that are significantly different from their neighbors.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">3.</span>
                  <span><strong>Keyframe Selection:</strong> Select frames with high reconstruction error or unique latent representations as keyframes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b5b] font-bold">4.</span>
                  <span><strong>Temporal Consistency:</strong> Use temporal information to ensure selected keyframes are well-distributed throughout the video.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Implementation Insights</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                During my thesis work, I discovered several key insights:
              </p>
              <div className={`space-y-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Latent Dimension Selection</p>
                  <p>The dimensionality of the latent space significantly impacts summarization quality. Too small, and important variations are lost; too large, and the model may overfit.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Temporal Modeling</p>
                  <p>Incorporating temporal information through LSTMs or attention mechanisms improves the coherence of selected keyframes.</p>
                </div>
                <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-white"}`}>
                  <p className="font-bold mb-2 text-[#0d6b6b]">Reconstruction vs. Diversity</p>
                  <p>Balancing reconstruction accuracy with frame diversity is crucial. A weighted combination of these objectives yields better summaries.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Results and Performance</h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                The VAE-based approach achieved competitive results on benchmark datasets:
              </p>
              <ul className={`space-y-2 mb-6 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                <li>• <strong>Compression Ratio:</strong> 95% reduction in frame count while retaining 90% of visual information</li>
                <li>• <strong>Inference Speed:</strong> Real-time processing on GPU (30+ fps for 1080p videos)</li>
                <li>• <strong>Generalization:</strong> Effective across diverse video genres without retraining</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Conclusion</h2>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                Variational Autoencoders provide a powerful and elegant framework for video summarization. By learning probabilistic representations of video frames, VAEs can automatically identify and extract the most informative keyframes without explicit supervision. This approach is particularly valuable for handling diverse video content and scales well to large-scale video archives.
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
