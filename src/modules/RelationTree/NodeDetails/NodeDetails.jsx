import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import { Relations } from './Relations';
import css from './NodeDetails.module.css';



export const NodeDetails = memo(
  function NodeDetails({ node, className, ...props }) {
    const closeHandler = useCallback(() => props.onSelect(undefined), [props]);

    return (
      <section className={classNames(css.root, className)}>
        <header className={css.header}>
          <h3 className={css.title}>{node.id}</h3>
          <button className={css.close} onClick={closeHandler}>&#10005;</button>
        </header>
        <Relations {...props} title="Parents" items={node.parents} />
        <Relations {...props} title="Children" items={node.children} />
        <Relations {...props} title="Siblings" items={node.siblings} />
        <Relations {...props} title="Spouses" items={node.spouses} />
      </section>
    );
  },
);
