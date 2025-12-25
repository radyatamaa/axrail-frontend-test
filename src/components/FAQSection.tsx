import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Your questions,<br />answered</h2>

      <div className="faq-list">
        {faqItems.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-header" onClick={() => toggle(i)}>
              <span>{item.title}</span>
              <span className={`faq-icon ${open === i ? "open" : ""}`}>⌃</span>
            </button>
            <div
              className="faq-body"
              style={{
                maxHeight: open === i ? item.content.length * 40 + "px" : "0px",
              }}
            >
              <div className="faq-body-inner" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>

      <div className="faq-bottom">
        <p>Still have questions?</p>
        <p className="faq-small">Get answers from an experienced local host.</p>
        <button className="ask-btn">Ask a host</button>
      </div>
    </section>
  );
}

const faqItems = [
  {
    title: "Top questions",
    content: `
      <h4>Is my place right for Airbnb?</h4>
      <p>Airbnb guests are interested in all kinds of places—spare rooms, apartments, houses, vacation homes, even treehouses.</p>
      <br/>

      <h4>Do I have to host all the time?</h4>
      <p>Nope—you control your calendar. You can host once a year, a few nights a month, or more often.</p>
      <br/>

      <h4>What are Airbnb’s fees?</h4>
      <p>It’s free to create a listing, Airbnb collects around 3% service fee when you get paid.</p>
    `,
  },
  {
    title: "Hosting basics",
    content: `
      <h4>How do I get started?</h4>
      <p>You can create a listing in just a few steps, all at your own pace.</p>
      <br/>

      <h4>How do I get my home ready?</h4>
      <p>Make sure your home is clean, clutter-free, and everything works properly.</p>
      <br/>

      <h4>How am I protected?</h4>
      <p>AirCover for Hosts provides top-to-bottom protection every time you host your home on Airbnb.</p>
    `,
  },
  {
    title: "Policy & regulations",
    content: `
      <h4>Are there any regulations that apply in my city?</h4>
      <p>Some areas have laws and regulations for hosting your home.</p>
      <br/>

      <h4>What if I have more questions?</h4>
      <p>We can connect you with an experienced host to answer more questions.</p>
    `,
  },
  {
    title: "Co-hosts",
    content: `
      <h4>What can co-hosts help with?</h4>
      <p>They can help with setting up your listing, messaging guests, cleaning, maintenance, and more.</p>
      <br/>

      <h4>How do I pay a co-host?</h4>
      <p>You can agree on payment terms, and optionally share part of each booking payout.</p>
    `,
  },
];
