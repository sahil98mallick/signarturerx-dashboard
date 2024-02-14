import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

const MailIcon = ({IconColor,IconWidth,IconHeight}:IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth: "20"}
        height={IconHeight? IconHeight: "24"}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M15.8327 3.83325H4.16602C3.50297 3.83325 2.86709 4.09664 2.39825 4.56549C1.92941 5.03433 1.66602 5.67021 1.66602 6.33325V14.6666C1.66602 15.3296 1.92941 15.9655 2.39825 16.4344C2.86709 16.9032 3.50297 17.1666 4.16602 17.1666H15.8327C16.4957 17.1666 17.1316 16.9032 17.6005 16.4344C18.0693 15.9655 18.3327 15.3296 18.3327 14.6666V6.33325C18.3327 5.67021 18.0693 5.03433 17.6005 4.56549C17.1316 4.09664 16.4957 3.83325 15.8327 3.83325ZM15.491 5.49992L10.591 10.3999C10.5135 10.478 10.4214 10.54 10.3198 10.5823C10.2183 10.6246 10.1094 10.6464 9.99935 10.6464C9.88934 10.6464 9.78042 10.6246 9.67887 10.5823C9.57732 10.54 9.48515 10.478 9.40768 10.3999L4.50768 5.49992H15.491ZM16.666 14.6666C16.666 14.8876 16.5782 15.0996 16.4219 15.2558C16.2657 15.4121 16.0537 15.4999 15.8327 15.4999H4.16602C3.945 15.4999 3.73304 15.4121 3.57676 15.2558C3.42048 15.0996 3.33268 14.8876 3.33268 14.6666V6.67492L8.23268 11.5749C8.70143 12.0431 9.33685 12.3061 9.99935 12.3061C10.6619 12.3061 11.2973 12.0431 11.766 11.5749L16.666 6.67492V14.6666Z"
        fill={IconColor? IconColor: "#070707"}
      />
    </svg>
  );
};

export default MailIcon;
