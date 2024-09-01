import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import css from './FamilyNode.module.css';


export const FamilyNode = React.memo(
  function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style ,AddNew}) {


  const handleMoreClick = () => {
    AddNew(node.id);
  };
    // const clickHandler = useCallback(() => onClick(node.id), [node.id, onClick]);
    // const clickSubHandler = useCallback(() => onSubClick(node.id), [node.id, onSubClick]);
    console.log('node', node)
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
          <div className={css.id}>{node.name}({node.gender})</div>
          <span className={css.id}>{node.id}</span>

          <span className={css.more} onClick={handleMoreClick}>...</span>
        </div>
      </div>
    );
  },
);
