import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between upskilling and reskilling?",
    answer:
      "Upskilling and Reskilling are often used interchangeably, but they are different. In upskilling, you learn new skills within your current role and continue in the same role. In Reskilling, you learn new skills beyond your current role, which may allow you to stay in the same role or transition to a new one.",
  },
  {
    question: "What is AI Reskilling?",
    answer:
      "In Reskilling, you learn new skills in Traditional AI, Generative AI, or Agentic AI. It is mainly because AI has changed or is expected to change your current non-AI job requirements, or when you want to transition into a new AI-related role.",
  },
  {
    question: "I am already in an AI role. I learn a new AI skill. Is it reskilling?",
    answer: "No, it is upskilling.",
  },
  {
    question: "What is the difference between role, job, competence and skill?",
    answer:
      "Skill refers to specific abilities or expertise of an individual. Competence refers to the knowledge, ability, and experience needed to effectively apply skills in various contexts. Job implies specific competencies within an organization. Role implies broader competencies relevant to a career at an industry level. One or more skills make up competence. Job or role comprises one or more competencies.",
  },
  {
    question: "How does AI impact job?",
    answer:
      "AI will impact jobs in two ways: 1) Eliminate current roles, and 2) Create new roles. Creation of new roles can be of two types: Modification of current roles or Origination of new roles.",
  },
  {
    question: "What is personalized, continuous, collaborative AI Reskilling Journey?",
    answer:
      "A personalized, continuous, and collaborative AI reskilling journey is an approach to learning AI that adapts to individual needs and evolves over time. Personalized means learning is tailored to the specific goals, role, and requirements of an individual. Continuous means individuals receive ongoing updates, insights, and learning content on the latest AI topics relevant to their interests. Collaborative means learning is supported through a community or ecosystem, enabling shared knowledge, discussion, and peer learning.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You Should Know
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/30"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
