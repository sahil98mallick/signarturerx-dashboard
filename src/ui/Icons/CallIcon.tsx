import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

const CallIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "20"}
      height={IconHeight ? IconHeight : "20"}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.43465 2.5177C6.62959 2.55102 6.88459 2.64976 7.06695 2.89891L8.68609 5.11107C9.01842 5.56512 9.08884 6.16 8.8717 6.6791L8.15084 8.4024C8.13541 8.43929 8.14478 8.46625 8.15262 8.47738C8.6096 9.12647 9.18067 9.8187 9.89951 10.5406C9.91075 10.5506 9.92177 10.561 9.93253 10.5717C10.6646 11.3038 11.3663 11.8838 12.0237 12.3467C12.0349 12.3546 12.0618 12.3639 12.0987 12.3485L13.8217 11.6277C14.3409 11.4105 14.9358 11.481 15.3899 11.8133L17.6018 13.4325C17.8509 13.6148 17.9497 13.8698 17.983 14.0648C18.0148 14.2509 17.997 14.4277 17.9727 14.5626C17.9239 14.8345 17.8135 15.1211 17.7046 15.3639C17.4821 15.86 17.1795 16.36 17.0328 16.5777L16.9263 16.7357L16.9194 16.7459C16.6223 17.1867 16.177 17.8474 15.4457 18.175C14.1811 18.7413 12.5488 18.5208 10.9498 17.8647C9.34392 17.2057 7.63515 16.055 6.08415 14.5195C6.0713 14.5083 6.05874 14.4966 6.04649 14.4843C4.47766 12.9155 3.30315 11.1804 2.63467 9.55125C1.97852 7.9521 1.75807 6.3197 2.32443 5.05505C2.65195 4.3237 3.31266 3.87837 3.75349 3.58125C3.75687 3.57897 3.76023 3.5767 3.76359 3.57444L3.92158 3.46794C4.13932 3.32116 4.63937 3.01859 5.13545 2.79608C5.37823 2.68718 5.66488 2.57678 5.93679 2.52793C6.07173 2.50369 6.24848 2.48587 6.43465 2.5177ZM7.04562 13.3618C7.05658 13.3716 7.06733 13.3817 7.07785 13.3922C8.52866 14.8432 10.1014 15.8952 11.5193 16.477C12.9671 17.0711 14.1209 17.1247 14.8326 16.806C15.1208 16.6769 15.3517 16.388 15.6824 15.8974L15.7889 15.7394C15.8991 15.5759 16.156 15.1512 16.336 14.75C16.3882 14.6335 16.4274 14.5333 16.4546 14.4516L14.5039 13.0237C14.474 13.0018 14.4348 12.9972 14.4006 13.0115L12.6776 13.7323C12.1894 13.9365 11.6144 13.8931 11.1602 13.5732C10.4396 13.0659 9.68203 12.4394 8.90102 11.6615C8.88943 11.6512 8.87808 11.6406 8.86698 11.6295C8.07557 10.8381 7.43979 10.0705 6.9261 9.3409C6.6063 8.88666 6.56283 8.31171 6.76703 7.82355L7.48789 6.10025C7.50219 6.06607 7.49755 6.0269 7.47567 5.99701L6.04773 4.04608C5.96604 4.07326 5.86581 4.11246 5.74934 4.1647C5.34812 4.34467 4.92346 4.60156 4.76 4.71174L4.60201 4.81824C4.11138 5.14897 3.82248 5.37994 3.69341 5.66814C3.37465 6.37992 3.42826 7.53383 4.0224 8.98184C4.59595 10.3797 5.62644 11.9281 7.04562 13.3618Z"
        fill={IconColor ? IconColor : "#070707"}
      />
    </svg>
  );
};

export default CallIcon;