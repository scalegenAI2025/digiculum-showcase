import { Video, Image, FileText, Music, Zap } from "lucide-react";

const categories = [
  {
    icon: Video,
    title: "Video",
    color: "text-primary",
    borderColor: "hover:border-red-500/50",
    items: [
      "Turn text or slides into short videos",
      "Break long videos into short important clips",
      "Derive insights from videos",
      "Capture key images from videos",
      "Build your AI Clone",
    ],
  },
  {
    icon: Image,
    title: "Image",
    color: "text-primary",
    borderColor: "hover:border-purple-500/50",
    items: [
      "Creating photo-realistic, artistic, abstract images",
      "Anime design and concept visualization",
      "Enhancing images through variations",
      "Inpainting",
      "Outpainting"
    ],
  },
  {
    icon: FileText,
    title: "Text",
    color: "text-primary",
    borderColor: "hover:border-blue-500/50",
    items: [
      "Create, summarize, augment text",
      "Auto-generate emails",
      "Rewrite content for different platforms",
      "Analyze sentiment and tone",
      "Developing Ideation for projects",
    ],
  },
  {
    icon: Music,
    title: "Audio",
    color: "text-primary",
    borderColor: "hover:border-green-500/50",
    items: [
      "Create your own music",
      "Audio and speech enhancement",
      "Voice cloning",
      "Convert voice into structured text",
      "Talk to your Apps",
    ],
  },
];

const HackVITA = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
        <Zap className="w-6 h-6 text-foreground" />
        <h2 className="text-2xl font-bold text-primary">
          Hack 
        </h2>
        </div>
        
        <p className="text-foreground/70 mb-12 max-w-2xl">
          Master AI tools across VITA (Video, Image, Text, and Audio) to transform your daily tasks
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden ${category.borderColor} transition-all duration-300`}
            >
              <div className={`bg-gradient-to-br ${category.color} p-4`}>
                <div className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-foreground" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackVITA;
