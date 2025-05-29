let direction: "left" | "right";
direction = "left";
direction = "right";

type Direction = "left" | "right";
type Margin = `margin-${Direction}`;

let margin: Margin;
margin = "margin-left";
