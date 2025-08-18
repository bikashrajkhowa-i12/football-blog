import Button from "./Button";

const FormBuilder = (props) => {
  const {
    fields = [],
    buttons = [],
    onSubmit = () => {},
    ref = undefined,
    formClassName = null,
  } = props || {};

  const renderField = (field, idx) => {
    const {
      label = "",
      type = "text",
      required = false,
      placeholder = "",
      attributes = {},
      className = "",
      controlled = false,
      value,
      checked,
      onChange,
      ...restField
    } = field || {};

    const inputElementClass = `w-full text-base rounded-md p-2 ring-[0.3px] ring-gray-400 opacity-70 
                              focus:outline-none focus:ring-[2px] focus:opacity-90 placeholder-opacity-100 
                              placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-700 disabled:ring-gray-400 
                              disabled:opacity-70 disabled:cursor-not-allowed ${className}`;

    const id = field.id || field.name || `field-${idx}`;
    const labelElement = label && type !== "hidden" && (
      <label
        htmlFor={id}
        className="text-base w-full p-2 break-words whitespace-normal flex-1 text-gray-700"
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
              checked={controlled ? field.checked : undefined}
              defaultChecked={!controlled ? field.checked : undefined}
              onChange={controlled ? field.onChange : undefined}
              required={required}
              className="w-[14.5px] h-[14.5px] mt-0.5 accent-green-800 rounded cursor-pointer"
              {...restField}
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
            value={controlled ? field.value : undefined}
            defaultValue={!controlled ? field.value : undefined}
            onChange={controlled ? field.onChange : undefined}
            required={required}
            className={inputElementClass}
            {...restField}
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
            value={controlled ? field.value : undefined}
            defaultValue={!controlled ? field.value : undefined}
            onChange={controlled ? field.onChange : undefined}
            required={required}
            placeholder={placeholder}
            className={inputElementClass}
            {...restField}
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
            {...field}
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
            value={controlled ? field.value : undefined}
            defaultValue={!controlled ? field.value : undefined}
            onChange={controlled ? field.onChange : undefined}
            required={required}
            placeholder={placeholder}
            className={inputElementClass}
            {...restField}
            {...attributes}
          />
        );
        break;
    }

    return (
      <div key={idx} className="flex w-full items-start gap-3 text-base">
        {type === "checkbox" ? (
          <div className="flex items-center w-fit">{inputElement}</div>
        ) : (
          <>
            {label && (
              <div className="flex items-center flex-[1] max-w-[33%]">
                {labelElement}
              </div>
            )}
            <div className="flex items-center flex-[2]">{inputElement}</div>
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
        {...btn}
      />
    );
  };
  return (
    <form
      className={`flex flex-${formClassName || "col"} gap-4`}
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
