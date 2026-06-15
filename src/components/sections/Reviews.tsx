"use client";



const reviews = [
  { text: "Bro, this edit went crazy 🔥", type: "received", time: "10:42 AM" },
  { text: "Watch time doubled. My mind is blown.", type: "received", time: "11:15 AM" },
  { text: "Can we do monthly?", type: "received", time: "2:30 PM" },
  { text: "The pacing on this is absolutely perfect.", type: "received", time: "Yesterday" },
  { text: "Send the invoice. Worth every penny.", type: "received", time: "Yesterday" },
  { text: "How did you even think of that transition?", type: "received", time: "Monday" },
  { text: "Client loved it, no revisions needed 🤝", type: "received", time: "Monday" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-[80px] md:py-[120px] bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 mb-16 max-w-[1280px]">
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-white">
          Real Messages.
        </h2>
        <p className="text-white/60 text-[18px]">
          What happens when you focus on impact instead of effects.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
        
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-6">
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="inline-flex flex-col gap-1 min-w-[280px]"
            >
              <div className="bg-[#1C1C1E] text-[#F2F2F7] px-5 py-3 rounded-[20px] rounded-bl-[4px] text-[16px] font-medium leading-[1.4] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/[0.05]">
                {review.text}
              </div>
              <span className="text-[11px] font-medium text-white/40 pl-1">
                {review.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
