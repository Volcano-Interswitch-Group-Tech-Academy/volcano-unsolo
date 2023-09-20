import { MouseEventHandler } from "react"

export type InputProps  = {
    placeholder: string;
    styling: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: any
    type: any
    onBlur?: () => void;
     error?: string
}

export type ButtonProps = {
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export interface SearchBarProps {
    onSearch: (term: string) => void;
  }

 export type ModalProps = {
    open:boolean;
    onClose:any;

  }

 export type DropdownFilterProps = {
    defaultOption: string
    styling:string
    options: Array<{ value: string, label: string }>;
    onchange: (value: string) => void;
    defaultValue:string;
}