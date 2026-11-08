import type { ReactNode } from "react";

type CommonProps = {
  name: string;
  label: string;
  hint?: string;
  errors?: string[];
  required?: boolean;
  optional?: boolean;
};

function LabelRow({ name, label, required, optional }: Pick<CommonProps, "name" | "label" | "required" | "optional">) {
  return (
    <label htmlFor={name} className="field-label">
      {label}
      {required ? <span className="text-red-600"> *</span> : null}
      {optional ? <span className="font-normal text-muted"> (optional)</span> : null}
    </label>
  );
}

function Messages({ name, hint, errors }: Pick<CommonProps, "name" | "hint" | "errors">) {
  return (
    <>
      {hint ? (
        <p id={`${name}-hint`} className="field-hint">
          {hint}
        </p>
      ) : null}
      {errors?.length ? (
        <p id={`${name}-error`} className="field-error" role="alert">
          {errors[0]}
        </p>
      ) : null}
    </>
  );
}

function describedBy(name: string, hint?: string, errors?: string[]) {
  const ids = [hint ? `${name}-hint` : null, errors?.length ? `${name}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function TextField({
  name,
  label,
  hint,
  errors,
  required,
  optional,
  type = "text",
  defaultValue,
  autoComplete,
  max,
}: CommonProps & {
  type?: "text" | "tel" | "email" | "date";
  defaultValue?: string;
  autoComplete?: string;
  max?: string;
}) {
  return (
    <div>
      <LabelRow name={name} label={label} required={required} optional={optional} />
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        max={max}
        aria-invalid={errors?.length ? true : undefined}
        aria-describedby={describedBy(name, hint, errors)}
        className="field"
      />
      <Messages name={name} hint={hint} errors={errors} />
    </div>
  );
}

export function TextArea({
  name,
  label,
  hint,
  errors,
  required,
  optional,
  rows = 3,
  defaultValue,
}: CommonProps & { rows?: number; defaultValue?: string }) {
  return (
    <div>
      <LabelRow name={name} label={label} required={required} optional={optional} />
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={errors?.length ? true : undefined}
        aria-describedby={describedBy(name, hint, errors)}
        className="field"
      />
      <Messages name={name} hint={hint} errors={errors} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  hint,
  errors,
  required,
  optional,
  options,
  placeholder = "Please select",
  defaultValue,
}: CommonProps & { options: readonly string[]; placeholder?: string; defaultValue?: string }) {
  return (
    <div>
      <LabelRow name={name} label={label} required={required} optional={optional} />
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-invalid={errors?.length ? true : undefined}
        aria-describedby={describedBy(name, hint, errors)}
        className="field"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Messages name={name} hint={hint} errors={errors} />
    </div>
  );
}

/** Radio or checkbox group rendered as a fieldset. */
export function ChoiceGroup({
  name,
  label,
  hint,
  errors,
  required,
  options,
  type,
  columns = 1,
  defaultValues = [],
  onChange,
}: CommonProps & {
  options: readonly { value: string; label: string }[];
  type: "radio" | "checkbox";
  columns?: 1 | 2 | 3;
  defaultValues?: string[];
  onChange?: (value: string, checked: boolean) => void;
}) {
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" }[columns];
  return (
    <fieldset aria-describedby={describedBy(name, hint, errors)}>
      <legend className="field-label">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </legend>
      <div className={`grid gap-2 ${cols}`}>
        {options.map((o) => {
          const id = `${name}-${o.value.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
          return (
            <label
              key={o.value}
              htmlFor={id}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm hover:border-brand-200 has-checked:border-brand-500 has-checked:bg-brand-50/60"
            >
              <input
                id={id}
                type={type}
                name={name}
                value={o.value}
                defaultChecked={defaultValues.includes(o.value)}
                onChange={onChange ? (e) => onChange(o.value, e.target.checked) : undefined}
                className="mt-0.5 size-4 accent-brand-600"
              />
              <span>{o.label}</span>
            </label>
          );
        })}
      </div>
      <Messages name={name} hint={hint} errors={errors} />
    </fieldset>
  );
}

export function FormSection({
  step,
  title,
  text,
  children,
}: {
  step: string;
  title: string;
  text?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:rounded-3xl sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
          {step}
        </span>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {text ? <p className="mt-1 text-sm text-muted">{text}</p> : null}
        </div>
      </div>
      <div className="mt-6 grid gap-5">{children}</div>
    </section>
  );
}
