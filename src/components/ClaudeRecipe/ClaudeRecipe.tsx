// import React from "react";
import "./ClaudeRecipe.css";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props: {
    recipe: string;
}) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}