import React from "react";
import TipCard from "../Tipper/TipCard";

export default function TipList(props) {
  return (
    <div className="tip-card-wrapper">
      {/* props.tips.map() */}
      <TipCard />
      <TipCard />
      <TipCard />
      <TipCard />
      <TipCard />
      <TipCard />
    </div>
  );
}