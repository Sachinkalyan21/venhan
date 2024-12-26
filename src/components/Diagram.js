import ReactFlow, { Background, Controls, addEdge, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css'; // Required for React Flow styles
import { useSelector, useDispatch } from 'react-redux';
import { addEdge as addEdgeAction } from '../store/diagramSlice';

const Diagram = () => {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state) => state.diagram);

  const [nodesState, setNodes, onNodesChange] = useNodesState(nodes);
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = (connection) => {
    const newEdge = { ...connection, id: `e${connection.source}-${connection.target}` };
    setEdges((eds) => addEdge(newEdge, eds));
    dispatch(addEdgeAction(newEdge));
  };

  return (
    <div style={{ height: '90vh' }}>
      <ReactFlow
        nodes={nodesState}
        edges={edgesState}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;

