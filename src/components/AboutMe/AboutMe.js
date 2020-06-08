import React from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
import data from "../datasets/aboutme.js";
import "./aboutme.css";

export default function AboutMe() {
  const { useRef, useCallback } = React;
  const fgRef = useRef();
  const handleClick = useCallback(
    (node) => {
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.x);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node,
        3000
      );
    },
    [fgRef]
  );

  return (
    <div className="about-me">
      <ForceGraph3D
        className="force-graph"
        ref={fgRef}
        graphData={data}
        backgroundColor="#1d2649"
        width={window.innerWidth}
        height={window.innerHeight - 6}
        nodeLabel="id"
        nodeAutoColorBy="group"
        onNodeClick={handleClick}
        linkThreeObjectExtend={true}
        linkThreeObject={(link) => {
          const sprite = new SpriteText(`${link.source}`);
          sprite.color = "lightgrey";
          sprite.textHeight = 1.5;
          return sprite;
        }}
        linkPositionUpdate={(sprite, { start, end }) => {
          const pos = Object.assign(
            ...["x", "y", "z"].map((c) => ({
              [c]: start[c] + 5,
            }))
          );
          Object.assign(sprite.position, pos);
        }}
        showNavInfo={true}
      />
    </div>
  );
}
