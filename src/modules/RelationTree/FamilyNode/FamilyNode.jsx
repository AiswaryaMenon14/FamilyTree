import React, { useCallback } from 'react';
import classNames from 'classnames';
import css from './FamilyNode.module.css';


export const FamilyNode = React.memo(
  function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style }) {
    const clickHandler = useCallback(() => onClick(node.id), [node.id, onClick]);
    const clickSubHandler = useCallback(() => onSubClick(node.id), [node.id, onSubClick]);

    return (
      <div className={css.root} style={style}>
        <div
          className={classNames(
            css.inner,
            css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
          // onClick={clickHandler}
        >
          {console.log(node,'node')}
          <div className={css.id}>{node.name}</div>
          <div style={{borderRadius:'50%',width:'20px',height:'20px',display:'flex',justifyContent:'center',overflow:'hidden'}}>
            <img src={node.profileImg}/>
          </div>
        </div>
        {node.hasSubTree && (
          <div
            className={classNames(css.sub, css[node.gender])}
            onClick={clickSubHandler}
          />
        )}
      </div>
    );
  },
);
