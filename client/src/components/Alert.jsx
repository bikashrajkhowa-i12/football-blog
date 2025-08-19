import { AlertTriangle, Info, BadgeCheck, CircleX } from "lucide-react";

const Alert = ({ type = "info", message }) => {
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-700",
      text: "text-green-800",
      Icon: BadgeCheck,
      defaultMsg: "Action completed successfully.",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-400",
      text: "text-red-700",
      Icon: CircleX,
      defaultMsg: "Something went wrong. Please try again.",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700",
      Icon: AlertTriangle,
      defaultMsg: "Be careful. There might be an issue.",
    },
    info: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      text: "text-sky-400",
      Icon: Info,
      defaultMsg: "Here’s some information for you.",
    },
  };

  const { bg, border, text, Icon, defaultMsg } = styles[type] || styles.info;

  return (
    <div
      className={`w-full max-w-md mx-auto rounded-lg ${bg} ${border} ${text} p-2 border-[1px] shadow-sm`}
    >
      <p className="text-sm font-medium flex items-center gap-2">
        <Icon size={20} />
        {message || defaultMsg}
      </p>
    </div>
  );
};

export default Alert;
