import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from './initial-elements';

import TextNode from './TextNode';
import ButtonEdge from './ButtonEdge';

import '@xyflow/react/dist/style.css';
// import './overview.css';

const nodeTypes = {
  
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      className="overview"
    >
      <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      <Controls />
      <Background />
    
    </ReactFlow>
  );
};

export default OverviewFlow;
