import { CheckCircle2, CircleAlert, AlertTriangle, Info } from "lucide-react";

const Alert = ({ type = "info", message }) => {
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-400",
      text: "text-green-700",
      Icon: CheckCircle2,
      defaultMsg: "Action completed successfully.",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-400",
      text: "text-red-700",
      Icon: CircleAlert,
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
      bg: "bg-blue-50",
      border: "border-blue-400",
      text: "text-blue-700",
      Icon: Info,
      defaultMsg: "Here’s some information for you.",
    },
  };

  const { bg, border, text, Icon, defaultMsg } = styles[type] || styles.info;

  return (
    <div
      className={`w-full max-w-md mx-auto rounded-lg ${bg} ${border} ${text} px-4 py-3 shadow-sm`}
    >
      <p className="text-sm font-medium flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {message || defaultMsg}
      </p>
    </div>
  );
};

export default Alert;
