import * as React from "react";
import { SVGProps } from "react";

const RectSVGForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={166}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#46BD62" d="M0 0h166v23H0z" />
  </svg>
);

export default RectSVGForm;
