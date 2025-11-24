import type { DropdownProps as PrimeDropdownProps } from "primereact/dropdown";
import type { InputNumberProps } from "primereact/inputnumber";
import type { InputTextProps } from "primereact/inputtext";
import type { InputTextareaProps } from "primereact/inputtextarea";
import type { RadioButtonProps } from "primereact/radiobutton";
import type { ToggleButtonProps } from "primereact/togglebutton";
import React from "react";

// TODO: We may be able to remove these
type FormFieldProps = {
  className?: string;
  disabled?: boolean;
  id: string;
  label: string;
  style?: React.CSSProperties;
};

type NonCheckboxFieldProps = {
  floatLabel?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  tooltip?: string;
};

export type DropdownProps = PrimeDropdownProps &
  FormFieldProps &
  NonCheckboxFieldProps;

export type InputProps = InputTextProps &
  FormFieldProps &
  NonCheckboxFieldProps;

export type MultiselectProps = {} & FormFieldProps;

export type NumberInputProps = InputNumberProps &
  FormFieldProps &
  NonCheckboxFieldProps;

export type RadioInputProps = RadioButtonProps & FormFieldProps;

export type TextareaProps = InputTextareaProps &
  FormFieldProps & { floatLabel?: boolean };

export type ToggleInputProps = ToggleButtonProps & FormFieldProps;
