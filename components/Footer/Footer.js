import "./Footer.css";

export const Footer = () => `
  <h2>"Contáctame para feedback o cualquier cosa"</h2>
  <div class="footer-buttons">
    ${Button("/gmail.png", "mailto:kabalera@gmail.com", "Gmail")}
    ${Button("/github.png", "https://github.com/kabalera82", "GitHub")}
    ${Button("/linked-in.png", "https://www.linkedin.com/in/marcos-padilla-puentes-373761127/", "LinkedIn")}
    ${Button("/telegram-plane.png", "https://t.me/kabalera82", "Telegram")}
  </div>
`;
export const Button = (iconPath, link, altText = "") => `
  <a href="${link}" target="_blank" rel="noopener noreferrer" class="btn">
    <img src="${iconPath}" alt="${altText}" />
  </a>
  
`;