import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: [],
  edges: [],
};

const diagramSlice = createSlice({
  name: 'diagram',
  initialState,
  reducers: {
    setMetadata: (state, action) => {
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
    },
    addNode: (state, action) => {
      state.nodes.push(action.payload);
    },
    addEdge: (state, action) => {
      state.edges.push(action.payload);
    },
    removeNode: (state, action) => {
      state.nodes = state.nodes.filter(node => node.id !== action.payload);
      state.edges = state.edges.filter(edge => edge.source !== action.payload && edge.target !== action.payload);
    },
    removeEdge: (state, action) => {
      state.edges = state.edges.filter(edge => edge.id !== action.payload);
    },
    updateNode: (state, action) => {
      const index = state.nodes.findIndex(node => node.id === action.payload.id);
      if (index !== -1) {
        state.nodes[index] = action.payload;
      }
    },
  },
});

export const { setMetadata, addNode, addEdge, removeNode, removeEdge, updateNode } = diagramSlice.actions;
export default diagramSlice.reducer;
