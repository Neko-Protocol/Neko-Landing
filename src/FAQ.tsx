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
      {
        question: "What makes Neko different from other DeFi protocols?",
        answer:
          "Neko Protocol specializes in real-world asset collateralization, offering a unique bridge between physical assets and DeFi liquidity. Our focus on RWAs, combined with Stellar's infrastructure, provides lower fees, faster settlements, and access to a broader range of collateral types.",
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
      {
        question: "What wallets are supported?",
        answer:
          "Neko Protocol supports popular Stellar wallets including Freighter, Albedo, and xBull. Any wallet compatible with the Stellar network and Soroban smart contracts can be used to interact with the protocol.",
      },
      {
        question: "Is there a minimum amount to lend or borrow?",
        answer:
          "There is no strict minimum for lending. For borrowing, the minimum depends on the collateral type and current market conditions. The dApp interface will guide you through the available options based on your assets.",
      },
    ],
  },
  {
    label: "For developers",
    items: [
      {
        question: "How can I build on top of Neko Protocol?",
        answer:
          "Neko Protocol provides open-source smart contracts and comprehensive documentation. Developers can integrate our lending and borrowing functionalities, build custom interfaces, or create complementary DeFi products using our SDKs and APIs.",
      },
      {
        question: "What programming languages are used?",
        answer:
          "Our smart contracts are written in Rust using the Soroban SDK for the Stellar blockchain. The frontend is built with React and TypeScript. All code is open source and available on our GitHub repository.",
      },
      {
        question: "Is there a developer grant program?",
        answer:
          "Yes, Neko Protocol supports developers building in the ecosystem through grants and bounties. Check our GitHub and community channels for current opportunities, hackathon sponsorships, and developer incentive programs.",
      },
      {
        question: "Where can I find technical documentation?",
        answer:
          "Technical documentation is available on our GitHub repository, including smart contract specifications, integration guides, API references, and architecture overviews. Join our developer community for real-time support.",
      },
    ],
  },
  {
    label: "For businesses and partners",
    items: [
      {
        question: "How can my business use Neko Protocol?",
        answer:
          "Businesses can tokenize their real-world assets and use them as collateral to access DeFi liquidity. This enables new financing options, improved capital efficiency, and access to global liquidity pools without traditional intermediaries.",
      },
      {
        question: "What types of assets can be tokenized?",
        answer:
          "Neko Protocol supports a variety of real-world assets including real estate, invoices, commodities, and other financial instruments. We work with partners to onboard and verify new asset types to ensure security and compliance.",
      },
      {
        question: "How do partnerships work?",
        answer:
          "We collaborate with asset originators, tokenization platforms, and financial institutions to expand the range of supported collateral. Reach out through our official channels to explore partnership opportunities.",
      },
      {
        question: "Is Neko Protocol compliant with regulations?",
        answer:
          "Neko Protocol is designed with regulatory considerations in mind. We work with legal advisors and compliance partners to ensure our approach to RWA tokenization and DeFi lending meets evolving regulatory standards across jurisdictions.",
      },
    ],
  },
  {
    label: "General and technical",
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
      {
        question: "How are interest rates determined?",
        answer:
          "Interest rates are calculated algorithmically based on the utilization ratio of each liquidity pool. When demand for borrowing increases, rates rise to incentivize more lending; when utilization is low, rates decrease to encourage borrowing.",
      },
      {
        question: "What happens if a borrower can't repay?",
        answer:
          "If a borrower's collateral value drops below the required threshold, the position becomes eligible for liquidation. Liquidators can repay part of the debt in exchange for the collateral at a discount, protecting lenders and maintaining protocol health.",
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
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
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
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab && tabsRef.current) {
      const containerRect = tabsRef.current.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setIndicator({
        left: tabRect.left - containerRect.left + tabsRef.current.scrollLeft,
        width: tabRect.width,
      });
    }
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % categories.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + categories.length) % categories.length;
    }
    if (nextIndex !== index) {
      onSelect(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      ref={tabsRef}
      role="tablist"
      aria-label="FAQ Categories"
      className="relative flex gap-1 overflow-x-auto scrollbar-hide p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06]"
    >
      <motion.div
        className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-[#1a3a6e] to-[#2a5aa8] shadow-lg shadow-[#2a5aa8]/20"
        animate={{ left: indicator.left, width: indicator.width }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />

      {categories.map((cat, i) => (
        <button
          key={cat.label}
          ref={(el) => { tabRefs.current[i] = el; }}
          role="tab"
          aria-selected={activeIndex === i}
          aria-controls={`faq-tabpanel-${i}`}
          id={`faq-tab-${i}`}
          tabIndex={activeIndex === i ? 0 : -1}
          onClick={() => onSelect(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={`relative z-10 whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeIndex === i
              ? "text-white"
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

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenIndex(0);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const activeCategory = faqCategories[activeTab];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1528] to-[#0a0f1e] rounded-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            We have every answer you need
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Find answers to common questions about Neko, our mission,
            technology, and how you can get involved
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <Tabs
            categories={faqCategories}
            activeIndex={activeTab}
            onSelect={handleTabChange}
          />
        </div>

        {/* FAQ Content */}
        <div
          role="tabpanel"
          id={`faq-tabpanel-${activeTab}`}
          aria-labelledby={`faq-tab-${activeTab}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-3"
            >
              {activeCategory.items.map((item, index) => (
                <AccordionItem
                  key={`${activeTab}-${index}`}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
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
