import React from "react";
import { IconProps } from "typescript/interface/iconprops.interface";

const BillIcon = ({ IconColor, IconWidth, IconHeight }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth ? IconWidth : "20"}
      height={IconHeight ? IconHeight : "21"}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M8.33333 7.1665H13.3333C13.5543 7.1665 13.7663 7.07871 13.9226 6.92243C14.0789 6.76615 14.1667 6.55418 14.1667 6.33317C14.1667 6.11216 14.0789 5.9002 13.9226 5.74392C13.7663 5.58764 13.5543 5.49984 13.3333 5.49984H8.33333C8.11232 5.49984 7.90036 5.58764 7.74408 5.74392C7.5878 5.9002 7.5 6.11216 7.5 6.33317C7.5 6.55418 7.5878 6.76615 7.74408 6.92243C7.90036 7.07871 8.11232 7.1665 8.33333 7.1665ZM6.66667 10.4998H13.3333C13.5543 10.4998 13.7663 10.412 13.9226 10.2558C14.0789 10.0995 14.1667 9.88752 14.1667 9.6665C14.1667 9.44549 14.0789 9.23353 13.9226 9.07725C13.7663 8.92097 13.5543 8.83317 13.3333 8.83317H6.66667C6.44565 8.83317 6.23369 8.92097 6.07741 9.07725C5.92113 9.23353 5.83333 9.44549 5.83333 9.6665C5.83333 9.88752 5.92113 10.0995 6.07741 10.2558C6.23369 10.412 6.44565 10.4998 6.66667 10.4998ZM6.66667 13.8332H13.3333C13.5543 13.8332 13.7663 13.7454 13.9226 13.5891C14.0789 13.4328 14.1667 13.2209 14.1667 12.9998C14.1667 12.7788 14.0789 12.5669 13.9226 12.4106C13.7663 12.2543 13.5543 12.1665 13.3333 12.1665H6.66667C6.44565 12.1665 6.23369 12.2543 6.07741 12.4106C5.92113 12.5669 5.83333 12.7788 5.83333 12.9998C5.83333 13.2209 5.92113 13.4328 6.07741 13.5891C6.23369 13.7454 6.44565 13.8332 6.66667 13.8332ZM16.6667 2.1665H3.33333C3.11232 2.1665 2.90036 2.2543 2.74408 2.41058C2.5878 2.56686 2.5 2.77882 2.5 2.99984V17.9998C2.5 18.1546 2.5431 18.3063 2.62446 18.438C2.70582 18.5696 2.82223 18.676 2.96066 18.7452C3.09908 18.8144 3.25404 18.8437 3.40817 18.8298C3.56231 18.8159 3.70953 18.7594 3.83333 18.6665L5.55833 17.3748L7.275 18.6665C7.41925 18.7747 7.59469 18.8332 7.775 18.8332C7.95531 18.8332 8.13075 18.7747 8.275 18.6665L10 17.3748L11.725 18.6665C11.8692 18.7747 12.0447 18.8332 12.225 18.8332C12.4053 18.8332 12.5808 18.7747 12.725 18.6665L14.4417 17.3748L16.1667 18.6665C16.2911 18.7592 16.4389 18.8154 16.5935 18.8286C16.7481 18.8419 16.9033 18.8117 17.0417 18.7415C17.1791 18.6723 17.2947 18.5663 17.3756 18.4354C17.4565 18.3045 17.4995 18.1537 17.5 17.9998V2.99984C17.5 2.77882 17.4122 2.56686 17.2559 2.41058C17.0996 2.2543 16.8877 2.1665 16.6667 2.1665ZM15.8333 16.3332L14.9417 15.6665C14.7974 15.5583 14.622 15.4998 14.4417 15.4998C14.2614 15.4998 14.0859 15.5583 13.9417 15.6665L12.225 16.9582L10.5 15.6665C10.3558 15.5583 10.1803 15.4998 10 15.4998C9.81969 15.4998 9.64425 15.5583 9.5 15.6665L7.775 16.9582L6.05833 15.6665C5.91409 15.5583 5.73864 15.4998 5.55833 15.4998C5.37802 15.4998 5.20258 15.5583 5.05833 15.6665L4.16667 16.3332V3.83317H15.8333V16.3332Z"
        fill={IconColor? IconColor: "#070707"}
      />
    </svg>
  );
};

export default BillIcon;
