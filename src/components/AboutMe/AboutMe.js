import React from "react";
import { ForceGraph3D } from "react-force-graph";
import data from "../datasets/aboutme.json";
import "./aboutme.css";

export default function AboutMe() {
  const { useRef, useCallback } = React;
  const fgRef = useRef();
  const handleClick = useCallback(node => {
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.x);
    fgRef.current.cameraPosition(
      {x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
      node,
      3000
    );
  }, [fgRef]);

  return (
    <div className="about-me">
     <ForceGraph3D
      className="force-graph"
      ref={fgRef}
      graphData={data}
      backgroundColor="#424242"
      width={window.innerWidth-25}
      height={window.innerHeight-50}
      nodeLabel="id"
      nodeAutoColorBy="group"
      onNodeClick={handleClick}
      showNavInfo={true}
     /> 
    </div>
  );
}
