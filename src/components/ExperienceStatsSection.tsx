"use client";

import React, { useEffect, useRef, useState } from "react";

interface LotteryDigitProps {
  targetDigit: number;
  delay?: number;
  duration?: number;
  isSpinning: boolean;
}

function LotteryDigit({
  targetDigit,
  delay = 0,
  duration = 2.2,
  isSpinning,
}: LotteryDigitProps) {
  // Build a sequence with 3 full cycles of 0-9 before locking on targetDigit
  const cycles = 3;
  const strip: number[] = [];
  for (let c = 0; c < cycles; c++) {
    for (let d = 0; d <= 9; d++) {
      strip.push(d);
    }
  }
  strip.push(targetDigit);

  const targetIndex = strip.length - 1;
  const targetOffset = -(targetIndex / strip.length) * 100;

  return (
    <span className="relative inline-block h-[1.12em] overflow-hidden leading-none align-baseline">
      <span
        className="flex flex-col transform-gpu will-change-transform"
        style={{
          transform: isSpinning ? `translateY(${targetOffset}%)` : "translateY(0%)",
          transition: isSpinning
            ? `transform ${duration}s cubic-bezier(0.12, 0.95, 0.2, 1) ${delay}s`
            : "none",
        }}
      >
        {strip.map((digit, idx) => (
          <span
            key={idx}
            className="h-[1.12em] flex items-center justify-center select-none"
          >
            {digit}
          </span>
        ))}
      </span>
    </span>
  );
}

interface NumberRendererProps {
  value: string;
  isSpinning: boolean;
  baseDelay?: number;
}

function NumberRenderer({ value, isSpinning, baseDelay = 0 }: NumberRendererProps) {
  const chars = value.split("");
  let digitIndex = 0;

  return (
    <div className="flex items-center text-4xl sm:text-5xl lg:text-[44px] font-heading font-semibold text-black tracking-tight leading-none">
      {chars.map((char, i) => {
        if (/^[0-9]$/.test(char)) {
          const currentDigit = digitIndex;
          digitIndex++;
          return (
            <LotteryDigit
              key={i}
              targetDigit={parseInt(char, 10)}
              delay={baseDelay + currentDigit * 0.18}
              duration={1.8 + currentDigit * 0.3}
              isSpinning={isSpinning}
            />
          );
        }
        if (char === " ") {
          return <span key={i} className="inline-block w-[0.25em]" />;
        }
        return (
          <span key={i} className="inline-block ml-1">
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default function ExperienceStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [cardHover, setCardHover] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSpinning(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "400",
      label: "Regularizations",
    },
    {
      value: "19",
      label: "Brussels municipalities",
    },
    {
      value: "4 +",
      label: "Architects",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-24 bg-white text-black border-t border-slate-100 selection:bg-slate-900 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Title: 11 years of experience */}
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-heading font-semibold text-black leading-[1.12] tracking-tight">
              11 years
              <br />
              of experience
            </h2>
          </div>

          {/* Right Cards: 3 boxes side by side */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setCardHover(idx)}
                  onMouseLeave={() => setCardHover(null)}
                  className="bg-[#f2f2f2] px-7 py-7 sm:px-8 sm:py-8 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] lg:min-h-[190px] transition-colors duration-200 hover:bg-[#eaeaea] select-none"
                >
                  {/* Top Number with Lottery Slot Animation */}
                  <div className="pt-1">
                    <NumberRenderer
                      value={item.value}
                      isSpinning={isSpinning || cardHover === idx}
                      baseDelay={idx * 0.15}
                    />
                  </div>

                  {/* Bottom Label */}
                  <div className="text-xs sm:text-[13px] font-medium text-black tracking-tight pt-6 sm:pt-8">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
