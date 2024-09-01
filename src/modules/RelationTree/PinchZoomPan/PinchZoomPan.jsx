import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { create } from 'pinch-zoom-pan';

import css from './PinchZoomPan.module.css';

let canvas

export const PinchZoomPan = React.memo(
  function PinchZoomPan({ min, max, captureWheel, className, style, children,  }) {
    const root = useRef(null);

    useEffect(() => {
      const element = root.current;
      if (!element) return;
     canvas = create({ element, minZoom: min, maxZoom: max, captureWheel });
      return canvas.destroy;
    }, [min, max, captureWheel]);

    return (
      <div ref={root} className={classNames(className, css.root)} style={style}>
        <div className={css.point}>
          <div className={css.canvas}>
            {children}
            <div style={{display:'flex',flexDirection:'column',}}>
              <div style={{width:'5%',marginLeft:'auto',border:'1px solid #e4e4e4',borderRadius:'8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
          <button style={{borderBottomLeftRadius: '0px',borderBottomRightRadius: '0px',width:'100%'}} onClick={()=>{canvas.update((prev) => ({ z: prev.z + 0.2 }))}}>+</button>
          <button style={{borderTopLeftRadius: '0px',borderTopRightRadius: '0px',width:'100%'}} onClick={()=>{
              canvas.update((prev) => ({ z: Math.max(prev.z - 0.2, min) }));
            }}>-</button>
            </div>
</div>

          </div>
        </div>
      </div>
    );
  },
);
