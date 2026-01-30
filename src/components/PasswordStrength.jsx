export default function PasswordStrength({ strength }) {
  const getStrengthClass = () => {
    if (strength.includes("Weak")) return "weak";
    if (strength.includes("Medium")) return "medium";
    if (strength.includes("Strong")) return "strong";
    return "";
  };

  return strength ? <div className={`strength ${getStrengthClass()}`}>{strength}</div> : null;
}
