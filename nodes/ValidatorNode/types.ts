export interface InputField {
    name: string; // New property for naming the validation
    validationType: 'string' | 'number' | 'boolean' | 'date' | 'enum';
    required: boolean;
    stringData?: string;
    numberData?: number;
    booleanData?: boolean;
    dateData?: string;
    enumValues?: string;
    pattern?: string;
    stringFormat?: 'email' | 'url' | 'uuid' | 'pattern';
    numberValidationType?: 'none' | 'min' | 'max' | 'range';
    minValue?: number;
    maxValue?: number;
}