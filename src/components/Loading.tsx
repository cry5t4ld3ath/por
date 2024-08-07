"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface LoadingProps {
  children: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const [showChildren, setShowChildren] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      
      gsap.set([topRef.current, bottomRef.current], { x: "-100%" });
      gsap.to(topRef.current, { duration: 1, x: 0, ease: "power3.out" });
      gsap.to(bottomRef.current, { duration: 1, x: 0, ease: "power3.out", delay: 0.2 });

      setTimeout(() => {
        setShowChildren(true);
      }, 3000);

      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            sessionStorage.setItem('hasVisited', 'true');
          }
        });

        tl.to(topRef.current, {
          duration: 1,
          x: '-100%',
          ease: "power3.inOut"
        });

        tl.to(bottomRef.current, {
          duration: 1,
          x: '100%',
          ease: "power3.inOut"
        }, "-=0.8");
      }, 4000);
    } else {
      setIsLoading(false);
      setShowChildren(true);
    }
  }, []);

  return (
    <React.Fragment>
      {showChildren && children}
      {isLoading && (
        <>
          <div
            ref={topRef}
            className="w-full h-[50vh] fixed top-0 bg-red-950 z-50"
          />
          <div
            ref={bottomRef}
            className="w-full h-[50vh] fixed bottom-0 bg-red-950 z-50"
          />
        </>
      )}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: false });