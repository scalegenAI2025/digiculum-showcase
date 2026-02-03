import { selfPacedCourses } from "@/data/selfPacedCourses.data";


const ACTION_KEYS = [
  "Enroll",
  "Coursera",
  "DeepLearning",
  "OpenCV_University",
  "Hugging_Face",
  "UXcel",
  "CCSP",
  "CompTIA",
  "CCSK",
  "CISSP",
  "GCSA",
  "CKS",
  "AWS",
  "Azure",
  "Google",
  "SSCP",
  "CCNP",
];

const BUTTON_STYLES: Record<string, string> = {
  Enroll: "bg-primary text-white",
  Coursera: "bg-primary text-white",
  DeepLearning: "bg-primary text-white",
  AWS: "bg-primary text-white",
  Azure: "bg-primary text-white",
  Google: "bg-primary text-white",
};

const SelfPacedCourses = () => {
  return (
    <section id="self-paced" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg mb-10 text-white">
          Self-paced Online Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selfPacedCourses.map((course, index) => (
            <div
              key={index}
              className="bg-card/40 border border-white/10 rounded-xl p-8 flex flex-col justify-between min-h-[280px] transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top section */}
              <div className="flex items-start gap-6">
                {/* Image */}
                <div className="bg-white rounded-lg p-4 w-[72px] h-[72px] flex items-center justify-center shrink-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-primary text-lg font-semibold mb-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                {Object.entries(course)
                  .filter(
                    ([key, value]) =>
                      ACTION_KEYS.includes(key) &&
                      typeof value === "string"
                  )
                  .map(([key, value]) => (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2 text-xs rounded-md font-medium transition-all hover:scale-105 ${
                        BUTTON_STYLES[key] ?? "bg-primary text-white"
                      }`}
                    >
                      {key.replace(/_/g, " ")}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfPacedCourses;

