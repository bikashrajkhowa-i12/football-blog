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
      className = "",
    } = field || {};

    const inputElementClass = `w-full text-sm rounded-md px-3 py-2 ring-[0.3px] ring-gray-400 opacity-70 
      focus:outline-none focus:ring-[2px] focus:ring-gray-400 focus:opacity-90 placeholder-opacity-100 placeholder-gray-500 ${className}`;
    const id = field.id || field.name || `field-${idx}`;
    const labelElement = label && type !== "hidden" && (
      <label
        htmlFor={id}
        className="w-32 break-words whitespace-normal flex-1 text-gray-700"
      >
        {label}
      </label>
    );

    let inputElement;

    switch (type) {
      case "checkbox":
        inputElement = (
          <label className="flex items-center gap-2">
            <input
              id={id}
              name={id}
              type="checkbox"
              checked={field.controlled ? field.checked : undefined}
              defaultChecked={!field.controlled ? field.checked : undefined}
              onChange={field.controlled ? field.onChange : undefined}
              required={required}
              className="w-[14.5px] h-[14.5px] mt-0.5 accent-green-800 rounded cursor-pointer"
              {...attributes}
            />
            <span className="text-gray-600 text-sm">{label}</span>
          </label>
        );
        break;
      case "select":
        inputElement = (
          <select
            id={id}
            name={id}
            value={field.controlled ? field.value : undefined}
            defaultValue={!field.controlled ? field.value : undefined}
            onChange={field.controlled ? field.onChange : undefined}
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
            value={field.controlled ? field.value : undefined}
            defaultValue={!field.controlled ? field.value : undefined}
            onChange={field.controlled ? field.onChange : undefined}
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
            value={field.controlled ? field.value : undefined}
            defaultValue={!field.controlled ? field.value : undefined}
            onChange={field.controlled ? field.onChange : undefined}
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
            value={field.controlled ? field.value : undefined}
            defaultValue={!field.controlled ? field.value : undefined}
            onChange={field.controlled ? field.onChange : undefined}
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
        {type === "checkbox" ? (
          <div className="flex items-center w-50">{inputElement}</div>
        ) : (
          <>
            {label && (
              <div className="flex items-center w-20">{labelElement}</div>
            )}
            <div className="flex items-center w-full">{inputElement}</div>
          </>
        )}
      </div>
    );
  };

  const renderButton = (btn, idx) => {
    return (
      <Button
        key={idx}
        name={btn.name || ""}
        type={btn.type || "button"}
        onClick={btn.onClick}
        className={btn.className}
        text={btn.label}
      />
    );
  };
  return (
    <form
      className="flex flex-col gap-4"
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
      <div className="flex flex-col gap-3">
        {fields.length > 0 ? fields.map(renderField) : ""}
      </div>
      <div className="flex gap-3">
        {buttons.length > 0 ? buttons.map(renderButton) : ""}
      </div>
    </form>
  );
};

export default FormBuilder;
