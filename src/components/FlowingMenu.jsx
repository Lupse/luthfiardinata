"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

function FlowingMenu({ items = [] }) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  // how many times the group (text + image) is repeated
  const [repeatCount, setRepeatCount] = useState(4);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  // Adjust repeatCount dynamically so the animated row can loop seamlessly.
  useEffect(() => {
    const adjustRepeats = () => {
      if (!marqueeRef.current || !marqueeInnerRef.current) return;
      const containerWidth = marqueeRef.current.getBoundingClientRect().width;
      const group = marqueeInnerRef.current.querySelector('.marquee__group');
      if (!group) return;
      const groupWidth = group.getBoundingClientRect().width || 1;
      // We want the total content width to be at least twice the container width
      // so that translateX(-50%) produces a seamless loop.
      const needed = Math.ceil((containerWidth * 2) / groupWidth);
      const finalCount = Math.max(2, needed);
      if (finalCount !== repeatCount) setRepeatCount(finalCount);
    };

    // run now and on window resize
    adjustRepeats();
    window.addEventListener('resize', adjustRepeats);
    return () => window.removeEventListener('resize', adjustRepeats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, image]);

  const repeatedMarqueeContent = Array.from({ length: repeatCount }).map((_, idx) => (
    <div className="marquee__group" key={idx}>
      <span>{text}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </div>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a className="menu__item-link" href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
