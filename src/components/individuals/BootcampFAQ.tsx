import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to know coding before I enroll for the bootcamp?",
    answer: "No. Coding skills are helpful but not required. Even if you've never written a single line of code, you can join and succeed in this bootcamp.",
  },
  {
    question: "What will you learn in the 21 day bootcamp?",
    answer: "You will learn essential AI concepts, important AI tools, and work on practical AI projects, based on our unique Know-Hack-Build model.",
  },
  {
    question: "How will you apply this to your job?",
    answer: "You'll receive 3 months of coaching, along with a structured plan to apply AI to your role.",
  },
  {
    question: "How is this bootcamp different from a typical program?",
    answer: "This is a highly individual-centric bootcamp where learning is personalized to your needs using the Know–Hack–Build model. You'll receive continuous coaching focused on practical application, along with collaborative learning through an ecosystem where you can seek and share knowledge and experiences with others.",
  },
  {
    question: "What are the bootcamp timings?",
    answer: "The program duration is 60 hours spanning over 21 consecutive days including weekends. Timings 8:30 - 10:30 pm IST (4 - 6 pm CET) on weekdays. 12 - 6 pm (7:30 am - 1:30 pm CET) on Saturdays and 12 - 4 pm (7:30 am - 11:30 pm CET) on Sundays.",
  },
  {
    question: "What do you get at the end of 21 day bootcamp?",
    answer: "You'll receive an AI Practitioner certificate, followed by coaching and enrollment into an ecosystem.",
  },
];

const BootcampFAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about the AI Practitioner Bootcamp
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border border-border/50 rounded-xl"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BootcampFAQ;
