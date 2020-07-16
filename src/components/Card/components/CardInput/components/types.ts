import { PaymentAmount } from '../../../../../types';

export interface BrandIconProps {
    brand: string;
}

export interface CardFieldsProps {
    brand?: string;
    cvcRequired?: any;
    errors?: any;
    focusedElement?: any;
    hasCVC?: any;
    hideCVCForBrand?: any;
    onFocusField?: any;
    showBrandIcon?: boolean;
    valid?: any;
}

export interface CardHolderNameProps {
    error: boolean;
    isValid: boolean;
    onChange: (event) => void;
    placeholder?: string;
    required?: boolean;
    value?: string;
}

export interface CardNumberProps {
    brand: string;
    error: boolean;
    filled: boolean;
    focused: boolean;
    isValid: boolean;
    label: string;
    onFocusField: (fieldName: string) => void;
    showBrandIcon: boolean;
}

export interface CVCProps {
    className?: string;
    classNameModifiers?: string[];
    cvcRequired: boolean;
    error?: boolean;
    filled?: any;
    focused?: any;
    frontCVC?: boolean;
    hideCVCForBrand?: boolean;
    isValid?: any;
    label?: any;
    onFocusField: (field: string) => void;
}

export interface CVCHintProps {
    frontCVC: boolean;
}

export interface ExpirationDateProps {
    className?: string;
    error?: boolean;
    filled?: boolean;
    focused?: boolean;
    isValid?: boolean;
    label?: string;
    onFocusField: (fieldName: string) => {};
}

export interface InstallmentsProps {
    amount?: PaymentAmount;
    brand?: string;
    onChange?: (installmentAmount: number) => void;
    installmentOptions: InstallmentOptions;
}

interface InstallmentOptions {
    [key: string]: {
        values: number[];
    };
}

export interface InstallmentsItem {
    id: number;
    name: string;
}

export interface KCPErrors {
    taxNumber: boolean | string;
}

export interface KCPProps {
    encryptedPasswordState: {
        data: string;
        valid: boolean;
        errors: boolean | string;
    };
    filled?: boolean;
    focusedElement;
    onFocusField: (str: string) => {};
    onChange: (data: object, valid: object) => {};
    ref: any;
    taxNumber?: string;
}

export type RtnType_ParamBooleanFn = (tn) => boolean;
export type RtnType_ParamVoidFn = (e) => void;

export interface StoredCardFieldsProps {
    brand: string;
    cvcRequired: boolean;
    errors: any;
    expiryMonth: string;
    expiryYear: string;
    focusedElement: string;
    hasCVC: boolean;
    hideCVCForBrand: any;
    lastFour: string;
    onFocusField: any;
    valid: any;
}
