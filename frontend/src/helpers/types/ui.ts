import { MouseEventHandler } from "react"

export type InputProps  = {
    placeholder: string;
    styling: string;
    onChange: (value: string) => void;
    value: any
}

export type ButtonProps = {
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};