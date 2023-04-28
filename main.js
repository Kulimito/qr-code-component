import "./style.scss";

import qrCodeIcon from "./assets/other/qr-code.svg";

document.querySelector("#app").innerHTML = `
  <div class="qr-code-container">
    <img src=${qrCodeIcon} alt="QR Code">
  </div>
  <div class="text-container">
    <p>Improve your front-end <br> skills by building projects</p>
    <p>Scan the QR code to visit Frontend <br> Mentor and take your coding skills to <br> the next level</p>
  </div>  
`;
