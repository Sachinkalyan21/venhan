import React, { useEffect } from 'react';
import Diagram from './components/Diagram';
import Sidebar from './components/Sidebar';
import { useDispatch } from 'react-redux';
import { setMetadata } from './store/diagramSlice';
import metadata from './metadata.json';
import ReactFlow, { Background, Controls, addEdge, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css'; // Add this for React Flow styles


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMetadata(metadata));
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <Diagram />
    </div>
  );
}

export default App;

