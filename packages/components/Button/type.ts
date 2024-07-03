/*
 * @Date: 2024-07-02 13:48:27
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-02 13:52:25
 * @Description: 
 */
import type { Component } from 'vue'
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
}