import React, { useMemo, useState, useCallback } from "react";
import ReactFamilyTree from "react-family-tree";
import { PinchZoomPan } from "../PinchZoomPan/PinchZoomPan";
import { FamilyNode } from "../FamilyNode/FamilyNode";
import { NODE_WIDTH, NODE_HEIGHT, DEFAULT_SOURCE } from "../const";
import { getNodeStyle } from "./utils";

import css from "./App.module.css";

export default React.memo(function App() {
  const [nodes, setNodes] = useState(DEFAULT_SOURCE);

  const firstNodeId = useMemo(() => nodes[0].id, [nodes.length]);
  const [rootId, setRootId] = useState(firstNodeId);

  const [selectId, setSelectId] = useState();
  const [hoverId, setHoverId] = useState();
;




  const AddNew = (id, addChildren = true) => {
    const addChild = prompt('Add child? Y / N')
    addChildren = addChild === 'Y'
    const name = prompt(`Enter the name of the ${addChildren ? 'child':'parent'}`);
    if (name) {
      console.log("name", name);

      const newNode = {
        id: "node"+Date.now(),
        gender: "male",
        name: name,
        profileImg: "https://randomuser.me/api/portraits/men/90.jpg",
        spouses: [],
        siblings: [],
        children: [],     
        parents: [],
      };
      if(addChildren) {
        newNode.parents.push({
          id,
          type: 'blood'
        })
      } else {
        newNode.children.push({
          id,
          type: 'blood'
        })
      }
      let _nodes = nodes.map((node) => {
        if (node.id === id) {
          if (addChildren) {
            node.children.push({
              id: newNode.id,
              type: "blood",
            })
          } else {
            node.parents.push({
              id: newNode.id,
              type: "blood",
            });
          }
        }
        return node;
      });

      let index = nodes.findIndex((node) => node.id === id)
      if (addChildren) {
        index = index + 1 // children
      }
      if(index < 0) {
        index = 0
      }
      if(index >= _nodes.length) {
        index = _nodes.length - 1
      }
      _nodes.splice(index, 0, newNode)
      console.log("nodes", _nodes);
      setRootId(_nodes[0].id);
      setNodes(JSON.parse(JSON.stringify(_nodes)));
    }
  };

  return (
    <div className={css.root}>
      <PinchZoomPan
        min={1}
        max={5}
        captureWheel={false}
        className={css.wrapper}
      >
        <ReactFamilyTree
          nodes={nodes}
          rootId={rootId}
          width={NODE_WIDTH}
          height={NODE_HEIGHT}
          className={css.tree}
          renderNode={(node) => (
            <FamilyNode
              key={node.id}
              node={node}
              isRoot={node.id === rootId}
              isHover={node.id === hoverId}
              onClick={setSelectId}
              onSubClick={setRootId}
              style={getNodeStyle(node)}
              AddNew={AddNew}
            />
          )}
        />
        {/* </div> */}
      </PinchZoomPan>

      <pre style={{ width: 1000, height: 200 }}>
        {JSON.stringify(nodes, null, 3)}
      </pre>
    </div>
  );
});
