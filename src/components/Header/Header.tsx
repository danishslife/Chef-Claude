import chefClaudeIcon from "../../assets/chef-claude-icon.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={chefClaudeIcon} alt="Chef Claude" className="logo-icon" />
      <h1 className="logo-text">Chef Claude</h1>
    </header>
  );
};


