import React, { useMemo, useState, useCallback } from "react";
import ReactFamilyTree from "react-family-tree";
import { PinchZoomPan } from "../PinchZoomPan/PinchZoomPan";
import { FamilyNode } from "../FamilyNode/FamilyNode";
import { NODE_WIDTH, NODE_HEIGHT, DEFAULT_SOURCE } from "../const";
import { getNodeStyle } from "./utils";
import Header from "../../Header/index"
import Sidebar from "../../SideBar/Index"

import css from "./Index.module.css";
import ProfileNotification from "../../../components/ProfileNotification";

export default React.memo(function Index() {
  const [nodes, setNodes] = useState(DEFAULT_SOURCE);

  const firstNodeId = useMemo(() => nodes[0].id, [nodes]);
  const [rootId, setRootId] = useState(firstNodeId);

  const [selectId, setSelectId] = useState();
  const [hoverId, setHoverId] = useState();

  return (
    <>
    <div style={{width:'5%',background:'#202123',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingBottom:'20px'}}>
      <Sidebar/>
      <div style={{marginTop:'auto'}}><ProfileNotification/></div>
    </div>
    <div className={css.root}>
    <div><Header/></div>

      {nodes.length > 0 && (
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
              />
            )}
          />
        </PinchZoomPan>
      )}
    </div>
    </>
  );
});
