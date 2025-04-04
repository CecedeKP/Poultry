
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fresh are your eggs and poultry products?",
    answer: "Our eggs and poultry products are harvested daily and delivered within 24-48 hours of collection, ensuring maximum freshness and quality. We maintain a strict cold chain during transportation to preserve freshness."
  },
  {
    question: "Are your chickens free-range and organic?",
    answer: "Yes, our chickens are raised in free-range environments with access to open spaces. We follow organic farming practices, avoiding the use of antibiotics, hormones, and synthetic pesticides. Our feed is primarily organic and locally sourced."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we provide delivery services within a 50-mile radius of our farm. Delivery fees vary based on location and order size. We also offer free pickup options directly from our farm store."
  },
  {
    question: "What consulting services do you provide for poultry farming?",
    answer: "We offer comprehensive consulting services including farm setup guidance, disease management strategies, breeding program development, and operational optimization. Our experienced team provides both on-site visits and remote consultation options."
  },
  {
    question: "How do I place a bulk order for restaurants or businesses?",
    answer: "Bulk orders can be placed through our website's business portal or by directly contacting our sales team. We offer special pricing for regular bulk orders and can create customized delivery schedules to meet your business needs."
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-poultry-brown/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-poultry-brown">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-poultry-green mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and poultry farming practices.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-poultry-brown hover:text-poultry-brown/90 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Can't find what you're looking for? 
            <a href="/contact" className="text-poultry-green hover:underline ml-1">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
