import * as React from 'react';
import { Props as SelectProps } from './Select';

export interface OptionTypeBase {
  [key: string]: any;
}

export type OptionsType<OptionType extends OptionTypeBase> = ReadonlyArray<OptionType>;

export interface GroupType<OptionType extends OptionTypeBase> {
  options: OptionsType<OptionType>;
  [key: string]: any;
}

export type GroupedOptionsType<OptionType extends OptionTypeBase> = ReadonlyArray<GroupType<OptionType>>;

export type ValueType<OptionType extends OptionTypeBase, IsMulti extends boolean> =  (IsMulti extends true ? OptionsType<OptionType> : OptionType) | null | undefined;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type InnerRef = React.Ref<any>;
export interface PropsWithInnerRef {
  /** The inner reference. */
  innerRef: React.Ref<any>;
}

export interface PropsWithStyles {
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {};
  theme: Theme;
}

export type ClassNameList = string[];
export type ClassNamesState = { [key: string]: boolean } | undefined;

export interface CommonProps<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  clearValue: () => void;
  className?: string;
  cx: (state: ClassNamesState | undefined, className: string | undefined) => string;
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {};
  getValue: () => ValueType<OptionType, IsMulti>;
  hasValue: boolean;
  isMulti: boolean;
  options: OptionsType<OptionType>;
  selectOption: (option: OptionType) => void;
  selectProps: SelectProps<OptionType>;
  setValue: (value: ValueType<OptionType, IsMulti>, action: ActionTypes) => void;
}

export type ActionTypes =
  | 'select-option'
  | 'deselect-option'
  | 'remove-value'
  | 'pop-value'
  | 'set-value'
  | 'clear'
  | 'create-option';

export interface ActionMeta<OptionType extends OptionTypeBase> {
  action: ActionTypes;
  name?: string;
  option?: OptionType;
  removedValue?: OptionType;
}

export type InputActionTypes =
  | 'set-value'
  | 'input-change'
  | 'input-blur'
  | 'menu-close';

export interface InputActionMeta {
  action: InputActionTypes;
}

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export type FocusDirection =
  | 'up'
  | 'down'
  | 'pageup'
  | 'pagedown'
  | 'first'
  | 'last';

export type OptionProps = PropsWithInnerRef & {
  data: any,
  id: number,
  index: number,
  isDisabled: boolean,
  isFocused: boolean,
  isSelected: boolean,
  label: string,
  onClick: MouseEventHandler,
  onMouseOver: MouseEventHandler,
  value: any,
};

export interface ThemeSpacing {
  baseUnit: number;
  controlHeight: number;
  menuGutter: number;
}

export interface Theme {
  borderRadius: number;
  colors: { [key: string]: string };
  spacing: ThemeSpacing;
}
