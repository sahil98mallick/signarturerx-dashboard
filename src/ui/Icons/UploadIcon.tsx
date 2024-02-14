import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";



function UploadIcon({ IconColor, IconWidth, IconHeight }: IconProps) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={IconWidth ? IconWidth : "20"}
        height={IconHeight ? IconHeight : "21"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.71 7.7099L11 5.4099V14.9999C11 15.2651 11.1054 15.5195 11.2929 15.707C11.4804 15.8945 11.7348 15.9999 12 15.9999C12.2652 15.9999 12.5196 15.8945 12.7071 15.707C12.8946 15.5195 13 15.2651 13 14.9999V5.4099L15.29 7.7099C15.383 7.80363 15.4936 7.87802 15.6154 7.92879C15.7373 7.97956 15.868 8.00569 16 8.00569C16.132 8.00569 16.2627 7.97956 16.3846 7.92879C16.5064 7.87802 16.617 7.80363 16.71 7.7099C16.8037 7.61693 16.8781 7.50633 16.9289 7.38447C16.9797 7.26261 17.0058 7.13191 17.0058 6.9999C17.0058 6.86788 16.9797 6.73718 16.9289 6.61532C16.8781 6.49346 16.8037 6.38286 16.71 6.2899L12.71 2.2899C12.6149 2.19886 12.5028 2.12749 12.38 2.0799C12.1365 1.97988 11.8635 1.97988 11.62 2.0799C11.4972 2.12749 11.3851 2.19886 11.29 2.2899L7.29 6.2899C7.19676 6.38313 7.1228 6.49383 7.07234 6.61565C7.02188 6.73747 6.99591 6.86804 6.99591 6.9999C6.99591 7.13176 7.02188 7.26232 7.07234 7.38415C7.1228 7.50597 7.19676 7.61666 7.29 7.7099C7.38324 7.80313 7.49393 7.8771 7.61575 7.92756C7.73757 7.97802 7.86814 8.00399 8 8.00399C8.13186 8.00399 8.26243 7.97802 8.38425 7.92756C8.50607 7.8771 8.61676 7.80313 8.71 7.7099ZM21 11.9999C20.7348 11.9999 20.4804 12.1053 20.2929 12.2928C20.1054 12.4803 20 12.7347 20 12.9999V18.9999C20 19.2651 19.8946 19.5195 19.7071 19.707C19.5196 19.8945 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8945 4.29289 19.707C4.10536 19.5195 4 19.2651 4 18.9999V12.9999C4 12.7347 3.89464 12.4803 3.70711 12.2928C3.51957 12.1053 3.26522 11.9999 3 11.9999C2.73478 11.9999 2.48043 12.1053 2.29289 12.2928C2.10536 12.4803 2 12.7347 2 12.9999V18.9999C2 19.7955 2.31607 20.5586 2.87868 21.1212C3.44129 21.6838 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6838 21.1213 21.1212C21.6839 20.5586 22 19.7955 22 18.9999V12.9999C22 12.7347 21.8946 12.4803 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999Z"
          fill={IconColor? IconColor: "#070707"}
        />
      </svg>
    </div>
  );
}

export default UploadIcon;
