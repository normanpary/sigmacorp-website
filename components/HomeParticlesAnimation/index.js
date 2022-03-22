import loadable from '@loadable/component';

import React, { useEffect, useState }  from 'react';

import classnames from 'classnames';

//import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import { Cursor } from '../../common/cursor';

const PointWave = loadable(() => import('./PointWave'));

export default function HomeParticlesAnimation (){
  const [isParticlesInView, setIsParticlesInView] = useState(false);
  const [isTextInView, setIsTextInView] = useState(false);


  useEffect(() => {
    
      setTimeout(() => {
        setIsParticlesInView(true);
      }, 3600);
    
  }, [isParticlesInView]);

  useEffect(() => {
    
      setTimeout(() => {
        setIsTextInView(true);
      }, 4200);
   
  }, [isTextInView]);

  return (

    <div className="bg-gradient-to-t from-rosa via-pink-400 to-rosa">
      
      <section className="fullbkg" style={{ opacity: isParticlesInView ? '1.0' : '0.0' }}>
        {/* <Particles /> */}
        {/* <PointSphere /> */}

          <div className="hidden" id="FallbackComponent">
            <canvas style={{ width: '1794px', height: '1185px' }}/>
          </div>

          <PointWave />
   
        
      </section>
    </div>
  );
}
