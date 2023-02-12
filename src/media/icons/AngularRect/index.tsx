import * as React from "react";
import { SVGProps } from "react";

const AngularRect = (props: SVGProps<SVGSVGElement> | any) => (
  <svg height="230" width={"100%"} z={0} pointsAtZ={0}>
    <path
      d={`M0 25 L0 300 L${props.width ? props.width + 10 : 500} 300 L${
        props.width ? props.width + 10 : 300
      } 0 Z`}
      fill={props.color ?? "black"}
      stroke="#fff"
      strokeWidth={1}
      pointsAtZ={-1}
      z={-1}
      style={{
        position: "absolute",
        zIndex: -2,
      }}
    />
  </svg>
);

export default AngularRect;
