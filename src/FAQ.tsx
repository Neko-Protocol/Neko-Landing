import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Neko Protocol?",
    answer:
      "Neko Protocol is a decentralized lending and borrowing platform built on the Stellar blockchain. It allows users to unlock liquidity from real-world assets (RWAs) by using them as collateral to borrow or lend digital assets.",
  },
  {
    question: "How does lending and borrowing work?",
    answer:
      "Lenders deposit assets into liquidity pools and earn yield over time. Borrowers can use their tokenized real-world assets as collateral to take out loans. Interest rates are determined algorithmically based on supply and demand.",
  },
  {
    question: "What are Real World Assets (RWAs)?",
    answer:
      "Real World Assets are physical or traditional financial assets—like real estate, invoices, or commodities—that have been tokenized on-chain. Neko Protocol enables these assets to be used within DeFi, bridging traditional finance with blockchain.",
  },
  {
    question: "Is Neko Protocol safe to use?",
    answer:
      "Neko Protocol is built with security as a priority. Smart contracts are developed using Soroban on Stellar, and the protocol follows best practices for on-chain security. However, as with any DeFi protocol, users should do their own research and understand the risks involved.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply visit the Neko Protocol dApp, connect your Stellar wallet, and you can start lending or borrowing right away. No sign-ups or KYC required—just connect and go.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1528] to-[#0a0f1e] rounded-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Have any questions?
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Everything you need to know about Neko Protocol. Can't find what
            you're looking for? Reach out to our community.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative group">
                {/* Active glow effect */}
                {isOpen && (
                  <motion.div
                    layoutId="faq-glow"
                    className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#1a3a6e]/60 via-[#2a5aa8]/40 to-[#1a3a6e]/60"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}

                <motion.div
                  className={`relative rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-[#0f2847] via-[#162f5a] to-[#1a3a6e] border-[#2a5aa8]/40"
                      : "bg-[#111827]/80 border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(index);
                      }
                    }}
                    className="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`text-base font-medium transition-colors duration-200 pr-4 ${
                        isOpen ? "text-white" : "text-white/80"
                      }`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-white text-[#081F5C]"
                          : "bg-white/[0.06] text-white/40"
                      }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-white/50 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
