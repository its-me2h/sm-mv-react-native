import React from "react";

function CheckBoxIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" fillRule="nonzero">
          <path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zM10 14.44l6.47-6.47a.75.75 0 011.133.976l-.073.084-7 7a.75.75 0 01-.976.073l-.084-.073-3-3a.75.75 0 01.976-1.133l.084.073L10 14.44l6.47-6.47L10 14.44z"></path>
        </g>
      </g>
    </svg>
  );
}

export default CheckBoxIcon;