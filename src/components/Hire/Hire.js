import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Fuse from "fuse.js";
import projects from "./projects";
import "./hire.css";

export default function Hire() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([]);

  const options = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    keys: ["title", "author", "tags"],
  };

  const fuse = new Fuse(projects, options);

  const onSearch = ({ currentTarget }) => {
    updateQuery(currentTarget.value);
    updateResults(fuse.search(query));
  };

  return (
    <div className="hire">
      <div className="search-header">
        <h1>What skills do you need?</h1>
      </div>
      <div className="search-bar">
        <input type="text" value={query} onChange={onSearch} />
      </div>
      <div className="search-results">
        {results === [] ? <p>Research</p> : ""}
        {results.map((result, i) => {
          return (
            <Card key={i}>
              <Card.Img
                src={`https://picsum.photos/id/${parseInt(
                  Math.random() * 993
                )}/200/200`}
                alt="Card Background"
              />
              <Card.ImgOverlay>
                <Card.Title>{result.item.title}</Card.Title>
                <Card.Text>{result.item.description}</Card.Text>
                <Card.Text>
                  {result.item.tags.map((tag, i) => {
                    return (
                      <Badge pill variant="info">
                        {tag}
                      </Badge>
                    );
                  })}
                </Card.Text>
                <Card.Link
                  href={result.item.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  github
                </Card.Link>
                <Card.Link
                  href={result.item.website}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  website
                </Card.Link>
              </Card.ImgOverlay>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
