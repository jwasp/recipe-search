import React from "react";

import classnames from "classnames";
import styles from "./Input.module.scss";
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  disabled,
  ...props
}) => {
  return (
    <input
      type="text"
      value={value}
      {...props}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      disabled={disabled}
      className={classnames(styles.input, disabled && styles.disabled)}
    />
  );
};

export default React.memo(Input);
