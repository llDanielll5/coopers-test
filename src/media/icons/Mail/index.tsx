import * as React from "react";
import { SVGProps } from "react";

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m31.07 12.746-.003-.008c-.007-.021-.018-.041-.024-.053a.241.241 0 0 1-.012-.026l-.002-.007-.003-.005-.003-.01-.008-.023a.125.125 0 0 0-.056-.06.358.358 0 0 0-.08-.066.3.3 0 0 0-.103-.06.562.562 0 0 1-.06-.02v-.002l-.013-.004a.45.45 0 0 0-.112-.022l-.006-.003a.12.12 0 0 0-.04-.006h-2.173V1.44A.544.544 0 0 0 27.817.9H4.174a.544.544 0 0 0-.555.541v10.93H1.446a.12.12 0 0 0-.04.006l-.006.003a.45.45 0 0 0-.09.016l-.015.004-.007.002-.082.026a.247.247 0 0 0-.095.061.345.345 0 0 0-.08.067.113.113 0 0 0-.044.058l-.008.022a.253.253 0 0 1-.002.006c-.023.035-.035.07-.043.093l-.001.003a.41.41 0 0 0-.024.117l-.001.005v.001a.307.307 0 0 0-.008.05v17.646a.53.53 0 0 0 .546.543h29.1a.544.544 0 0 0 .554-.541V12.912a.168.168 0 0 0-.003-.032l-.005-.019-.001-.006v-.013l-.006-.016a.148.148 0 0 1-.004-.024c-.003-.013-.005-.033-.011-.056Zm-26.341 1.88V1.982h22.534v12.644l-6.752 4.91-4.515 3.293-11.267-8.203Zm23.643-1.173h.502l-.502.365v-.365Zm-24.753 0v.365l-.502-.365h.502ZM2.001 30.018V13.99l13.662 9.942a.538.538 0 0 0 .333.108.538.538 0 0 0 .332-.108l13.663-9.942v16.027H2ZM7.81 5.512h10.913a.544.544 0 0 0 .554-.541.544.544 0 0 0-.554-.542H7.81a.544.544 0 0 0-.554.542c0 .305.247.54.554.54Zm0 3.53H24.18a.544.544 0 0 0 .555-.542.544.544 0 0 0-.555-.541H7.81a.544.544 0 0 0-.554.541c0 .305.247.541.554.541Zm0 3.529H24.18a.544.544 0 0 0 .555-.542.544.544 0 0 0-.555-.54H7.81a.544.544 0 0 0-.554.54c0 .306.247.542.554.542Zm16.924 2.988a.544.544 0 0 0-.555-.541H7.81a.544.544 0 0 0-.554.54c0 .306.247.542.554.542H24.18a.544.544 0 0 0 .555-.541Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.2}
    />
  </svg>
);

export default MailIcon;