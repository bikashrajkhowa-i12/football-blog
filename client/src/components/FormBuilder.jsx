import Button from "./Button";

const FormBuilder = (props) => {
  const {
    fields = [],
    buttons = [],
    onSubmit = () => {},
    ref = undefined,
  } = props || {};

  const renderField = (field, idx) => {
    const {
      label = "",
      type = "text",
      required = false,
      placeholder = "",
      attributes = {},
    } = field || {};

    const inputElementClass = `w-full text-sm rounded-lg px-3 py-1 ring-[0.5px] ring-gray-400 focus:outline-none focus:ring-[1.5px] focus:ring-green-800 focus:opacity-50`;
    const id = field.id || field.name || `field-${idx}`;
    const labelElement = label && type !== "hidden" && (
      <label
        htmlFor={id}
        className="w-32 break-words whitespace-normal flex-1 font-semibold text-gray-700"
      >
        {label}
      </label>
    );

    let inputElement;

    switch (type) {
      case "select":
        inputElement = (
          <select
            id={id}
            name={id}
            required={required}
            className={inputElementClass}
            {...attributes}
          >
            {field.options?.map((opt) => {
              const { label = null, value = null } = opt || {};
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
        );
        break;

      case "textarea":
        inputElement = (
          <textarea
            id={id}
            name={id}
            required={required}
            placeholder={placeholder}
            className={inputElementClass}
            {...attributes}
          />
        );
        break;

      case "hidden":
        inputElement = (
          <input
            type={type}
            id={id}
            name={id}
            value={field.value || ""}
            {...attributes}
          />
        );
        break;

      default:
        inputElement = (
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            placeholder={placeholder}
            className={inputElementClass}
            {...attributes}
          />
        );
        break;
    }

    return (
      <div
        key={idx}
        className="flex w-full justify-between items-start gap-3 text-sm sm:text-base"
      >
        {label && <div className="flex items-center w-20">{labelElement}</div>}
        {<div className="flex items-center w-full">{inputElement}</div>}
      </div>
    );
  };

  const renderButton = (btn, idx) => {
    return (
      <Button
        key={idx}
        type={btn.type || "button"}
        onClick={btn.onClick}
        className={btn.className}
        text={btn.label}
      />
    );
  };
  return (
    <form
      className="flex flex-col gap-5"
      ref={ref}
      onSubmit={
        !ref
          ? (e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.target));
              onSubmit(data);
            }
          : undefined
      }
    >
      <div className="flex flex-col gap-4">
        {fields.length > 0 ? fields.map(renderField) : ""}
      </div>
      <div className="flex gap-3">
        {buttons.length > 0 ? buttons.map(renderButton) : ""}
      </div>
    </form>
  );
};

export default FormBuilder;
