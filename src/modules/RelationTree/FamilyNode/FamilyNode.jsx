import React, { useCallback } from 'react';
import classNames from 'classnames';
import css from './FamilyNode.module.css';


export const FamilyNode = React.memo(
  function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style }) {
   

    return (
      <div className={css.root} style={style}>

        <div
          className={classNames(
            css.inner,
            css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
        >
          <div className={css.image}>
            <img className={css.profilePic} src={node.profileImg}/>
          </div>
          <div className={css.id}>{node.name}</div>
          <span className={css.more}>...</span>
        </div>
        {node.hasSubTree && (
          <div
            className={classNames(css.sub, css[node.gender])}
            // onClick={clickSubHandler}
          />
        )}
      </div>
    );
  },
);
