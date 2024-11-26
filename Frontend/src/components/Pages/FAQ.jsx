import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods are supported?",
      answer:
        "Our platform supports multiple payment options, including Credit/Debit Cards, PayPal, UPI, and Cash on Delivery (COD).",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you will receive a tracking link via email or SMS. You can also track your order status directly from your account dashboard.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for most items. Please ensure the product is unused and in its original packaging to qualify for a return.",
    },
    {
      question: "How secure is my payment information?",
      answer:
        "Your payment security is our priority. We use end-to-end encryption and comply with industry-standard security protocols to keep your data safe.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to selected countries. Shipping charges and delivery times may vary based on your location.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach out to us via chat on our website, email at adrenix.store@gmail.com, or call our 24/7 customer support line.",
    },
    {
      question: "Can I cancel or modify my order after placing it?",
      answer:
        "You can cancel or modify your order within 24 hours of placing it. Visit your account dashboard to manage your orders.",
    },
    {
      question: "Do you provide discounts or promotional offers?",
      answer:
        "Yes, we regularly provide discounts and promotional codes. Subscribe to our newsletter to stay updated on the latest offers.",
    },
  ];

  return (
    <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <motion.h2
        className="mb-5 text-center text-4xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="mb-12 text-center text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We’ve answered some common questions. If you still have doubts, reach
        out to us via chat.
      </motion.p>

      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.li
            key={index}
            className="text-left rounded-md border border-gray-100 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="relative flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-sm font-medium text-gray-600 lg:text-base">
                {faq.question}
              </h3>
              {expanded === index ? (
                <FaChevronUp className="text-gray-500 transition-all" />
              ) : (
                <FaChevronDown className="text-gray-500 transition-all" />
              )}
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{
                height: expanded === index ? "auto" : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-5 text-sm text-gray-600">{faq.answer}</div>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          className="inline-flex items-center rounded-lg bg-blue-500 py-3 px-5 text-lg text-white shadow-md transition hover:bg-blue-600"
          href="#"
        >
          Still have questions?
        </a>
      </motion.div>
    </div>
  );
};

export default FAQ;
