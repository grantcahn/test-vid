import React from 'react';
import { gsap } from 'gsap';
import '../App.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import test1 from './Video-Scroll/MINT_Background_00000.jpg';


function Home() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const sectionRef = useRef();
  const imgRef = useRef();
  const canvasRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 275;
    const currentFrame = (index) =>
      `./Components/Video-Scroll/MINT_Background_${(index + 1)
        .toString()
        .padStart(5, '0')}.jpg`;

    let images = [];
    let airpods = {
      frame: 0,
    };
    console.log(currentFrame);
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
          end: '+=13000',
          markers: true,
        },
      })
      .from(q('.hl1'), 0.2, { autoAlpha: 0, y: '20px' }, 0.5)
      .to(q('.hl1'), 1.8, { y: '-30px' }, 0.7)
      .to(q('.hl1'), 0.2, { autoAlpha: 0, y: '-50px' }, 2.5)
      .from(q('.hl2'), 0.2, { autoAlpha: 0, y: '20px' }, 3)
      .to(q('.hl2'), 1.8, { y: '-30px' }, 3.2)
      .to(q('.hl2'), 0.2, { autoAlpha: 0, y: '-50px' }, 5)
      .from(q('.hl3'), 0.2, { autoAlpha: 0, y: '20px' }, 5.5)
      .to(q('.hl3'), 1.8, { y: '-30px' }, 5.7)
      .to(q('.hl3'), 0.2, { autoAlpha: 0, y: '-50px' }, 7.5)
      .from(q('.hl4'), 0.2, { autoAlpha: 0, y: '20px' }, 8)
      .to(q('.hl4'), 1.8, { y: '-30px' }, 8.2)
      .to(q('.hl4'), 0.2, { autoAlpha: 0, y: '-50px' }, 10);

     images[0].onload = render;

    function render() {
      context.drawImage(images[airpods.frame], 0, 0);
      console.log(images);
    }
  }, []);

  return (
    <div className="app" ref={el}>
      <img src={test1} ref={imgRef} alt="" />
      <section ref={sectionRef}>
        <canvas ref={canvasRef}></canvas>
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
