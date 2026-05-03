import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  label: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    label: "About Neko",
    items: [
      {
        question: "What is Neko Protocol?",
        answer:
          "Neko Protocol is a decentralized lending and borrowing platform built on the Stellar blockchain. It allows users to unlock liquidity from real-world assets (RWAs) by using them as collateral to borrow or lend digital assets.",
      },
      {
        question: "What is Neko's mission?",
        answer:
          "Our mission is to bridge the gap between traditional finance and decentralized finance by enabling real-world assets to participate in the DeFi ecosystem. We aim to make financial services more accessible, transparent, and efficient for everyone.",
      },
      {
        question: "Why was Neko built on Stellar?",
        answer:
          "Stellar offers fast, low-cost transactions and a strong focus on real-world asset tokenization. Its Soroban smart contract platform provides a secure and efficient environment ideal for building DeFi protocols that interact with traditional financial instruments.",
      },
    ],
  },
  {
    label: "For users",
    items: [
      {
        question: "How do I get started with Neko?",
        answer:
          "Simply visit the Neko Protocol dApp, connect your Stellar wallet, and you can start lending or borrowing right away. No sign-ups or KYC required — just connect and go.",
      },
      {
        question: "How does lending and borrowing work?",
        answer:
          "Lenders deposit assets into liquidity pools and earn yield over time. Borrowers can use their tokenized real-world assets as collateral to take out loans. Interest rates are determined algorithmically based on supply and demand.",
      },
    ],
  },
  {
    label: "General",
    items: [
      {
        question: "What are Real World Assets (RWAs)?",
        answer:
          "Real World Assets are physical or traditional financial assets — like real estate, invoices, or commodities — that have been tokenized on-chain. Neko Protocol enables these assets to be used within DeFi, bridging traditional finance with blockchain.",
      },
      {
        question: "Is Neko Protocol safe to use?",
        answer:
          "Neko Protocol is built with security as a priority. Smart contracts are developed using Soroban on Stellar, and the protocol follows best practices for on-chain security. However, as with any DeFi protocol, users should do their own research and understand the risks involved.",
      },
    ],
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="relative group">
      <motion.div
        className={`relative rounded-[30px] border transition-all duration-500 ${
          isOpen
            ? "bg-white/5 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "bg-white/[0.02] border-white/10 hover:border-white/20"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-8 py-6 cursor-pointer text-left"
        >
          <span
            className={`text-lg font-bold transition-colors duration-300 pr-4 ${
              isOpen ? "text-white" : "text-white/70"
            }`}
          >
            {item.question}
          </span>

          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? "bg-white text-black"
                : "bg-white/5 text-white/40"
            }`}
          >
            {isOpen ? (
              <X className="w-5 h-5" strokeWidth={2.5} />
            ) : (
              <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
            )}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8">
                <p className="text-white/50 text-base leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function Tabs({
  categories,
  activeIndex,
  onSelect,
}: {
  categories: FAQCategory[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
      {categories.map((cat, i) => (
        <button
          key={cat.label}
          onClick={() => onSelect(i)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
            activeIndex === i
              ? "bg-white text-black shadow-lg"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const activeCategory = faqCategories[activeTab];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="w-full max-w-[90%] mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Answers to your<br/>questions
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            Find everything you need to know about Neko and the future of RWAs.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-14 flex justify-center">
          <Tabs
            categories={faqCategories}
            activeIndex={activeTab}
            onSelect={(i) => { setActiveTab(i); setOpenIndex(0); }}
          />
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {activeCategory.items.map((item, index) => (
                <AccordionItem
                  key={`${activeTab}-${index}`}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
