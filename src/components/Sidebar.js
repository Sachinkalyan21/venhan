import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from '../store/diagramSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [nodeLabel, setNodeLabel] = useState('');
  const [nodeId, setNodeId] = useState('');

  const handleAddNode = () => {
    const newNode = {
      id: nodeId,
      data: { label: nodeLabel },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    dispatch(addNode(newNode));
    setNodeLabel('');
    setNodeId('');
  };

  return (
    <div className="sidebar">
      <h3>Add Node</h3>
      <input
        type="text"
        placeholder="Node ID"
        value={nodeId}
        onChange={(e) => setNodeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Node Label"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
      />
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;

