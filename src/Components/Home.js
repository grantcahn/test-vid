import React from 'react';
import { gsap } from 'gsap';
import '../App.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const sectionRef = useRef();
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 3840;
    canvas.height = 1882;

    let frameCount = 275;
    const currentFrame = (index) =>
      `./Video-Scroll/MINT_Background_${(index + 1)
        .toString()
        .padStart(5, '0')}.jpg`;

    let images = [];
    let airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    tl.current = gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: '+=7000',
          markers: true,
        },
      })
      .to(airpods, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        duration: 10,
      })
      .fromTo(
        q('.hl1'),
        { autoAlpha: 0, y: '20px', duration: 0.2 },
        { autoAlpha: 1, y: '0px' },
        '<0.5'
      )
      .to(q('.hl1'), { y: '-30px', duration: 1.8 }, '<0.2')
      .to(q('.hl1'), { autoAlpha: 0, y: '-50px', duration: 0.2 }, '<1.8')
      .fromTo(
        q('.hl2'),
        { autoAlpha: 0, y: '20px', duration: 0.2 },
        { autoAlpha: 1, y: '0px' },
        '<0.5'
      )
      .to(q('.hl2'), { y: '-30px', duration: 1.8 }, '<0.2')
      .to(q('.hl2'), { autoAlpha: 0, y: '-50px', duration: 0.2 }, '<1.8')
      .fromTo(
        q('.hl3'),
        { autoAlpha: 0, y: '20px', duration: 0.2 },
        { autoAlpha: 1, y: '0px' },
        '<0.5'
      )
      .to(q('.hl3'), { y: '-30px', duration: 1.8 }, '<0.2')
      .to(q('.hl3'), { autoAlpha: 0, y: '-50px', duration: 0.2 }, '<1.8')
      .fromTo(
        q('.hl4'),
        { autoAlpha: 0, y: '20px', duration: 0.2 },
        { autoAlpha: 1, y: '0px' },
        '<0.5'
      )
      .to(q('.hl4'), { y: '-30px', duration: 1.8 }, '<0.2')
      .to(q('.hl4'), { autoAlpha: 0, y: '-50px', duration: 0.2 }, '<1.8');

    images[0].onload = render;

    function render() {
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, [q]);

  return (
    <div className="app" ref={el}>
      <section ref={sectionRef}>
        <canvas
          ref={canvasRef}
          style={{ position: 'relative', zIndex: '-1' }}
        ></canvas>
        <div className="hero div1">
          <h1 className="intro-text hl1">
            OWN YOUR <br /> OWN PIECE
            <br />
            OF AFL <br /> HISTORY
          </h1>
        </div>

        <div className="hero div2">
          <h1 className="intro-text hl2">
            18 CAPTAINS <br />
            18 CLUBS
          </h1>
        </div>
        <div className="hero div3">
          <h1 className="intro-text hl3">
            INVEST IN THE <br />
            NEWEST AND RAREST AFL <br />
            MEMORABILIA
          </h1>
        </div>
        <div className="hero div4">
          <h1 className="intro-text hl4">
            GET YOUR COLLECTION <br />
            STARTED NOW
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
