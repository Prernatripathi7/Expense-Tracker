export const colors = {
  primary: "#5B5FEF",
  primaryHover: "#4346D3",
  income: "#0D9488", 
  expense: "#DC2626", 
  textDark: "#1F2937",
  textMuted: "#6B7280",
  border: "#E2E8F0",
  surfaceMuted: "#F1F5F9",
  white: "#FFFFFF",
};

export const formatCurrency = (amount) => {
  const value = Number(amount);
  if (Number.isNaN(value)) return "₹0";
  return `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
};