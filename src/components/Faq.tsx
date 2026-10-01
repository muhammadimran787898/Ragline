"use client";

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'What is Enragline?',
    answer: 'Enragline is an AI/RAG SaaS starter kit for developers, startups, agencies, and software teams building AI-enabled SaaS applications. It combines multi-tenant SaaS capabilities with an integrated RAG pipeline, knowledge management, AI usage controls, subscriptions, and flexible deployment.'
  },
  {
    question: 'What is a RAG pipeline?',
    answer: 'A Retrieval-Augmented Generation (RAG) pipeline connects your proprietary data to Large Language Models (LLMs). It processes your documents, creates vector embeddings, and retrieves relevant context to provide grounded, accurate AI responses.'
  },
  {
    question: 'Does Enragline support multi-tenant RAG?',
    answer: 'Yes, Enragline is built with complete multi-tenant isolation from the ground up. Each tenant gets their own isolated vector spaces, knowledge bases, and usage tracking to ensure data privacy and secure multi-tenant AI operations.'
  },
  {
    question: 'What types of knowledge can Enragline ingest?',
    answer: 'Enragline supports various data sources including PDF, TXT, CSV documents, web scraping, and API integrations. The ingestion engine automatically chunks, embeds, and stores the knowledge in your vector database.'
  },
  {
    question: 'Is Enragline tied to a specific AI provider?',
    answer: 'No, Enragline is provider-flexible. You can plug in OpenAI, Anthropic, Cohere, or even open-source models via Ollama or HuggingFace. You maintain full control over which models your application uses.'
  },
  {
    question: 'Can I self-host Enragline?',
    answer: 'Yes, you can deploy Enragline anywhere. Whether it is on Vercel, AWS, Google Cloud, or a private VPS using Docker, you have complete ownership of the infrastructure and deployment process.'
  },
  {
    question: 'Can I monetize the AI capabilities in my application?',
    answer: 'Absolutely. Enragline includes built-in Stripe integration with usage-based billing, subscription tiers, and AI token tracking, allowing you to easily monetize AI usage and feature access.'
  },
  {
    question: 'Who is Enragline built for?',
    answer: 'Enragline is designed for developers, agencies, and founders who want to rapidly build and launch AI products without spending months reinventing the wheel on foundational SaaS and RAG infrastructure.'
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative w-full bg-black overflow-hidden border-t border-b border-[#585858]">
      {/* Header Area */}
      <div className="relative px-6 py-8 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1000px] flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <h2 className="max-w-[400px] text-3xl sm:text-[40px] font-medium tracking-tight text-white leading-[1.1]">
            Everything You Need to<br />
            Know <span className="bg-[linear-gradient(90deg,#9C4A46_0%,#D06A53_48%,#F6B172_100%)] bg-clip-text text-transparent">About Enragline</span>
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#8E8E93] lg:mt-2">
            Find answers about RAG, multi-tenancy, deployment, AI providers, monetization, and getting started with Enragline.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Area */}
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-10 pb-20 sm:pb-28">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border-b border-[#333333]">
              <button
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
              >
                <span className="text-lg sm:text-[19px] font-medium tracking-tight text-white">
                  {item.question}
                </span>
                <span aria-hidden="true" className="relative ml-6 size-3.5 shrink-0 text-[#8E8E93]">
                  <span className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
                  <span className={`absolute top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${openIndex === index ? 'rotate-0' : 'rotate-90'}`} />
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                aria-hidden={openIndex !== index}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                <p className="max-w-[850px] pb-6 text-[14px] leading-relaxed text-[#8E8E93]">
                  {item.answer}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Hatched Divider */}
      <div className="relative h-9 w-full border-t border-[#585858] bg-black">
        <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  );
};
