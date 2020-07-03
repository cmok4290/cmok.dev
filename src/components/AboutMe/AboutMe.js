import React, { useState, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
//import { ReactComponent as GitHubIcon } from "../../assets/github-corner-right.svg";
import data from "../datasets/aboutme.js";
//import "./aboutme.css";

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
  const size = useWindowSize();

  /**
   * Gabe Ragland
   * https://usehooks.com/useWindowSize
   * This hook returns an object containing the window's width and height
   */
  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }); // empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }

  return (
    <div className="about-me">
      {/* TODO: fix position
      <a
        href="https://github.com/vasturiano/react-force-graph"
        target="_blank"
        rel="noopener noreferrer"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <GitHubIcon fill="#fff" />
      </a>
      */}
      <ForceGraph3D
        className="force-graph"
        ref={fgRef}
        graphData={data}
        backgroundColor="#1d2649"
        width={size.width}
        height={size.height}
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
