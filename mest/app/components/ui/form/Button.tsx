import { ButtonProps } from "~/types/types";

export const Button = ({
  type,
  title,
  size,
  color,
  icon,
  borderRadius,
  variant,
  compact,
  onClick,
}: ButtonProps) => {
  const sizeStyle =
    size === "xs"
      ? "text-xs"
      : size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-base"
      : size === "lg"
      ? "text-lg"
      : size === "xl"
      ? "text-xl"
      : "text-base";

  const colorStyle =
    color === "primary"
      ? "bg-blue-700"
      : color === "secondary"
      ? "bg-red-700"
      : color === "cta"
      ? "bg-teal-700"
      : "bg-transparent";

  const borderRadiusStyle =
    borderRadius === "xs"
      ? "rounded-sm"
      : borderRadius === "sm"
      ? "rounded"
      : borderRadius === "md"
      ? "rounded-md"
      : borderRadius === "lg"
      ? "rounded-lg"
      : borderRadius === "xl"
      ? "rounded-full"
      : "rounded-none";

  const variantStyle = variant === "outline" ? "background-none border" : "";
  const compactStyle = `${compact ? "w-max" : "w-full"}`;

  return (
    <button
      type={type}
      className={`p-2 text-center text-white capitalize font-medium focus:outline-none flex items-center justify-center gap-2 ${sizeStyle} ${colorStyle} ${borderRadiusStyle} ${variantStyle} ${compactStyle}`}
      onClick={onClick}
    >
      {icon && icon.position === "left" && (
        <span className="text-inherit">{icon.src}</span>
      )}
      <span>{title}</span>
      {icon && icon.position === "right" && (
        <span className="text-inherit">{icon.src}</span>
      )}
    </button>
  );
};
