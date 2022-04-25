/* eslint-disable max-lines */
/* eslint-disable max-statements */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useEventListener } from './useEventListener';


function getElementOffset (el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}

// eslint-disable-next-line max-lines-per-function
const TrailingCursor = ({
  color = '179,34,125',
  colorMain = '179,34,125',
  colorMenu = '70,12,55',
  outerAlpha1 = 0.3,
  outerAlpha2 = 0.2,
  innerSize = 20,
  outerSize = 140,
  outerScale = 7,
  innerScale = 7
}) => {
  const cursorsRef = useRef();
  const cursorInnerRef = useRef();
  const cursorOuterRef1 = useRef();
  const cursorOuterRef2 = useRef();
  const cursorTextRef = useRef();
  const cursorSliderRef = useRef();
  const cursorSpotRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const [isSlider, setIsSlider] = useState(false);
  const [isTextActive, setIsTextActive] = useState(false);

  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setIsVisible(true);
    setCoords({
      x: clientX,
      y: clientY,
      x1: clientX,
      y1: clientY,
      x2: clientX,
      y2: clientY,
      x3: clientX,
      y3: clientY
    });
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 5;
        coords.y += (endY.current - coords.y) / 5;
        coords.x1 += (endX.current - coords.x1) / 5.6;
        coords.y1 += (endY.current - coords.y1) / 5.6;
        coords.x2 += (endX.current - coords.x2) / 6.2;
        coords.y2 += (endY.current - coords.y2) / 6.2;
        if (cursorInnerRef.current) {
          cursorTextRef.current.style.top = coords.y - 40 + 'px';
          cursorTextRef.current.style.left = coords.x - 40 + 'px';
          cursorSliderRef.current.style.top = coords.y - 30 + 'px';
          cursorSliderRef.current.style.left = coords.x - 30 + 'px';
          cursorSpotRef.current.style.top = endY.current - 140 + 'px';
          cursorSpotRef.current.style.left = endX.current - 140 + 'px';
          cursorInnerRef.current.style.transform =
            'translate(' + coords.x + 'px, ' + coords.y + 'px)';
          cursorOuterRef1.current.style.transform =
            'translate(' + coords.x1 + 'px, ' + coords.y1 + 'px)';
          cursorOuterRef2.current.style.transform =
            'translate(' + coords.x2 + 'px, ' + coords.y2 + 'px)';
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [animateOuterCursor]);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onMouseDown = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Cursors Hover/Active State

  useEffect(() => {
    if (isTextActive) {
      cursorTextRef.current.style.opacity = 1;
      cursorTextRef.current.style.backgroundColor = `rgba(${ color }, 0.9)`;
      cursorTextRef.current.style.transform = 'scale(1)';
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef1.current.style.opacity = 0;
      cursorOuterRef2.current.style.opacity = 0;
    } else {
      cursorTextRef.current.style.opacity = 1;
      cursorTextRef.current.style.backgroundColor = `rgba(${ color }, 0.9)`;
      cursorTextRef.current.style.transform = 'scale(0)';
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef1.current.style.opacity = 1;
      cursorOuterRef2.current.style.opacity = 1;
    }
  }, [color, isTextActive]);

  useEffect(() => {
    if (isAllVisible) {
      cursorsRef.current.style.opacity = 0;
    } else {
      cursorsRef.current.style.opacity = 1;
    }
  }, [isAllVisible]);

  useEffect(() => {
    if (isReveal) {
      cursorSpotRef.current.style.backgroundColor = `rgba(${ color }, 0.9)`;
      cursorSpotRef.current.style.opacity = 1;
      cursorSpotRef.current.style.zIndex = '0';
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef1.current.style.opacity = 0;
      cursorOuterRef2.current.style.opacity = 0;
    } else {
      cursorSpotRef.current.style.backgroundColor = `rgba(${ color }, 0)`;
      cursorSpotRef.current.style.opacity = 0;
      cursorSpotRef.current.style.zIndex = '1000';
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef1.current.style.opacity = 1;
      cursorOuterRef2.current.style.opacity = 1;
    }
  }, [isReveal]);

  useEffect(() => {
    if (isSlider) {
      cursorSliderRef.current.style.opacity = 1;
      cursorSliderRef.current.style.backgroundColor = `rgba(${ color }, 0.9)`;
      cursorSliderRef.current.style.transform = 'scale(1)';
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef1.current.style.opacity = 0;
      cursorOuterRef2.current.style.opacity = 0;
    } else {
      cursorSliderRef.current.style.opacity = 0;
      cursorSliderRef.current.style.backgroundColor = `rgba(${ color }, 0)`;
      cursorSliderRef.current.style.transform = 'scale(0)';
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef1.current.style.opacity = 1;
      cursorOuterRef2.current.style.opacity = 1;
    }
  }, [isSlider]);

  if (typeof window !== 'undefined') {
    useEventListener('mousemove', onMouseMove, document);
    useEventListener('mouseenter', onMouseEnter, document);
    useEventListener('mouseleave', onMouseLeave, document);
    useEventListener('mousedown', onMouseDown, document);
    useEventListener('mouseup', onMouseUp, document);
  }

  useEffect(() => {
    if (isVisible) {
      cursorTextRef.current.style.opacity = 0;
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef1.current.style.opacity = 1;
      cursorOuterRef2.current.style.opacity = 1;
    } else {
      cursorTextRef.current.style.opacity = 0;
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef1.current.style.opacity = 0;
      cursorOuterRef2.current.style.opacity = 0;
    }
  }, [isVisible]);

  useEffect(() => {
    const scrollables = document.querySelectorAll('span[data-scroll-cursor]');
    const hideclickables = document.querySelectorAll(
      'div[data-nocursor],span[data-nocursor], button[data-nocursor], a[data-nocursor], ul[data-nocursor], li[data-nocursor]'
    );
    const jobs = document.querySelectorAll(
      'a.jobpost[data-cursortext], a.presscard__block[data-cursortext], a.listing_element[data-cursortext], div.insightcard__block[data-cursortext], a.quotes__inner[data-cursortext]'
      //'div.jobs div.listing_element'
    );
    const sliders = document.querySelectorAll(
      'button.flickity-button.previous, button.flickity-button.next'
    );
    const spotlights = document.querySelectorAll('div.spotlight');
    const mainMenu = document.querySelectorAll('div.big-menu');
    const clickables = document.querySelectorAll(
      'a.insightLink[data-cursortext], div.insightImg[data-cursortext], div.puntero[data-cursortext] '
      //div.slider[data-cursortext],
    );
    const draggables = document.querySelectorAll(
      'div.slider[data-cursortextdrag], div.punteroicono[data-cursortextdrag]'
    );

    // const footers = document.querySelectorAll(
    //   'div.sociallinks__block a, div.social__block a'
    // )

    hideclickables.forEach((el) => {
      el.addEventListener('mouseover', () => {
        setIsAllVisible(true);
      });
      el.addEventListener('mouseleave', () => {
        setIsAllVisible(false);
      });
    });
    scrollables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setIsTextActive(true);
        cursorTextRef.current.innerHTML = 'Scroll';
      });
      el.addEventListener('mouseleave', () => {
        cursorTextRef.current.innerHTML = '';
        setIsTextActive(false);
      });
    });
    jobs.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setIsTextActive(true);
        if (el.dataset.cursortext)
          cursorTextRef.current.innerHTML = el.dataset.cursortext;
      });
      el.addEventListener('mouseleave', () => {
        cursorTextRef.current.innerHTML = '';
        setIsTextActive(false);
      });
    });
    sliders.forEach((el) => {
      el.addEventListener('mouseover', () => {
        setIsSlider(true);
        if (el.classList.contains('next')) {
          cursorSliderRef.current.style.backgroundImage =
            'url(\'/images/icons/icon-next.svg\')';
          cursorSliderRef.current.style.backgroundSize = '30%';
          cursorSliderRef.current.style.backgroundPosition = 'center';
          cursorSliderRef.current.style.backgroundRepeat = 'no-repeat';
        } else if (el.classList.contains('previous')) {
          cursorSliderRef.current.style.backgroundImage =
            'url(\'/images/icons/icon-prev.svg\')';
          cursorSliderRef.current.style.backgroundSize = '30%';
          cursorSliderRef.current.style.backgroundPosition = 'center';
          cursorSliderRef.current.style.backgroundRepeat = 'no-repeat';
        }
      });
      el.addEventListener('mouseleave', () => {
        setIsSlider(false);
        cursorSliderRef.current.style.backgroundImage = 'none';
      });
    });
    spotlights.forEach((el) => {
      const node = ReactDOM.findDOMNode(el);
      var offsetEl = getElementOffset(el);
      const spotlightDiameter = 280;
      const child = node.querySelector('.spotlightReveal');
      child.style.width = spotlightDiameter + 'px';
      child.style.height = spotlightDiameter + 'px';
      child.style.borderRadius = (spotlightDiameter >> 1) + 'px';

      el.addEventListener('mouseenter', () => {
        setIsReveal(true);
      });
      el.addEventListener('mouseleave', () => {
        setIsReveal(false);
        child.style.width = '0px';
        child.style.height = '0px';
        child.style.borderRadius = '0px';
        child.style.backgroundPosition = '0px 0px';
        child.style.left = '0px';
        child.style.top = '0px';
        child.style.opacity = 0;
      });
      el.addEventListener('mousemove', (ev) => {
        var centerSpot = {
          x: ev.pageX - offsetEl.left,
          y: ev.pageY - offsetEl.top
        };
        var xSpot = centerSpot.x - 140;
        var ySpot = centerSpot.y - 140;
        child.style.opacity = 1;
        child.style.backgroundPositionX = -xSpot + 'px';
        child.style.backgroundPositionY = -ySpot + 'px';
        child.style.left = xSpot + 'px';
        child.style.top = ySpot + 'px';
      });
    });
    if (!mainMenu.length) {
      const node = ReactDOM.findDOMNode(cursorsRef.current);
      const child = node.querySelector('.dot');
      child.style.backgroundColor = `rgba(${ colorMain }, 1)`;
    } else {
      const node = ReactDOM.findDOMNode(cursorsRef.current);
      const child = node.querySelector('.dot');
      child.style.backgroundColor = `rgba(${ colorMenu }, 1)`;
    }
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setIsTextActive(true);
        if (el.dataset.cursortext)
          cursorTextRef.current.innerHTML = el.dataset.cursortext;
      });
      el.addEventListener('mouseleave', () => {
        cursorTextRef.current.innerHTML = '';
        setIsTextActive(false);
      });
    });
    draggables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (el.dataset.cursortextdrag)
          cursorTextRef.current.innerHTML = el.dataset.cursortextdrag;
        setIsTextActive(true);
      });
      el.addEventListener('mouseleave', () => {
        setIsTextActive(false);
        cursorTextRef.current.innerHTML = '';
      });
    });

    return () => {
      hideclickables.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsAllVisible(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsAllVisible(false);
        });
      });
      scrollables.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsTextActive(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsTextActive(false);
        });
      });
      jobs.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsTextActive(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsTextActive(false);
        });
      });
      sliders.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsSlider(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsSlider(false);
        });
      });
      spotlights.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsReveal(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsReveal(false);
        });
        el.removeEventListener('mousemove', () => {
          setIsReveal(false);
        });
      });
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsTextActive(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsTextActive(false);
        });
      });
      draggables.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setIsTextActive(false);
        });
        el.removeEventListener('mouseleave', () => {
          setIsTextActive(false);
        });
      });
    };
  }, [isVisible, isTextActive, isReveal, isSlider, onMouseMove]);

  // Cursor Styles
  const styles = {
    cursorInner: {
      width: innerSize,
      height: innerSize,
      top: -innerSize / 2,
      left: -innerSize / 2,
      backgroundColor: `rgba(${ color }, 1)`,
      borderRadius:"20px",
    },
    cursorOuter1: {
      width: innerSize,
      height: innerSize,
      top: -innerSize / 2,
      left: -innerSize / 2,
      backgroundColor: `rgba(${ color }, ${ outerAlpha1 })`,
      borderRadius:"20px",
    },
    cursorOuter2: {
      width: innerSize,
      height: innerSize,
      top: -innerSize / 2,
      left: -innerSize / 2,
      backgroundColor: `rgba(${ color }, ${ outerAlpha2 })`,
      borderRadius:"20px",
    }
  };

  return (
    <React.Fragment>
      <div className="cursors" ref={cursorsRef}>
        <div className="cursor-text" ref={cursorTextRef} />
        <div className="cursor-slider" ref={cursorSliderRef} />
        <div className="cursor-spotlight" ref={cursorSpotRef} />
        <div
          className="cursor dot"
          ref={cursorInnerRef}
          style={styles.cursorInner}
        />
        <div
          className="cursor dot1"
          ref={cursorOuterRef1}
          style={styles.cursorOuter1}
        />
        <div
          className="cursor dot2"
          ref={cursorOuterRef2}
          style={styles.cursorOuter2}
        />
      </div>
      {/* <div className="cursor-drag">Drag me</div>
      <div className="cursor-dragging">Dragging</div> */}
    </React.Fragment>
  );
};

export default TrailingCursor;
