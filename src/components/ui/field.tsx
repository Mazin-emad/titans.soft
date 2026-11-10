import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-[4px] border border-ink/25 bg-surface px-4 text-[16px] text-ink transition-[border-color,box-shadow] placeholder:text-muted/80 hover:border-ink/50 focus-visible:border-ink focus-visible:shadow-[0_0_0_3px_var(--accent)] focus-visible:outline-none aria-[invalid=true]:border-danger disabled:cursor-not-allowed disabled:opacity-50";

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, "h-12", className)} {...props} />;
}

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, "min-h-[150px] py-3 leading-relaxed", className)} {...props} />;
}

function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("block text-[15px] font-medium", className)} {...props} />;
}

function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}

/** Radio group styled as selectable chips — one tap instead of a dropdown. */
function ChoiceGroup<T extends string>({
  name,
  legend,
  options,
  value,
  onChange,
  required,
  error,
  errorId,
}: {
  name: string;
  legend: React.ReactNode;
  options: { value: T; label: string }[];
  value: string;
  onChange: (v: T) => void;
  required?: boolean;
  error?: string;
  errorId?: string;
}) {
  return (
    <fieldset aria-invalid={!!error} aria-describedby={error ? errorId : undefined} aria-required={required}>
      <legend className="text-[15px] font-medium">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const id = `${name}-${o.value}`;
          return (
            <label
              key={o.value}
              htmlFor={id}
              className="cursor-pointer rounded-[4px] border border-ink/25 bg-surface px-4 py-2.5 text-[15px] transition-colors hover:border-ink/60 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:shadow-[0_0_0_3px_var(--accent)]"
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={o.value}
                checked={value === o.value}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          );
        })}
      </div>
      {error && errorId ? <FieldError id={errorId} message={error} /> : null}
    </fieldset>
  );
}

export { Input, Textarea, Label, FieldError, ChoiceGroup };
