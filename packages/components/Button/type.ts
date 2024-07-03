
import type { Component, Ref } from 'vue'
export type ButtonType = 'primary' | "success" | "warning" | "danger" | "info";
export type typeNativeType = 'button' | 'reset' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: typeNativeType;
    loading?: boolean;
    icon?: string;
    circle?: boolean;
    plain: boolean;
    round: boolean;
    disabled?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
    autofocus?: boolean;
    loadingIcon? : string;
}

export interface ButtonEmit {
    (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>
}