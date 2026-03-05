import readinessBook from "@/assets/readiness/readiness_book.jpg";
import { ArrowRight } from "lucide-react";

const ReadinessBook = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Book Cover Image */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 w-full max-w-sm shadow-2xl shadow-black/60">
              <img
                src={readinessBook}
                alt="Scaling Generative AI Book"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Text & CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <p className="text-white/60 text-base tracking-wide">
              Find out more about
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Readiness Rocket <br /> Framework
            </h2>

            <p className="text-white/60 text-base">
              Available on Amazon
            </p>

            <a
              href="https://www.amazon.com/Scaling-Generative-Operational-Readiness-Enterprises/dp/1637427980"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Order <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReadinessBook;