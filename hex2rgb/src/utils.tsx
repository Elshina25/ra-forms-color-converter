export function isValidHex(hex: string): boolean {
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.test(hex);
};

export function hexToRgb(str: string): string {
    const hexString = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.exec(str);
    return hexString ? `rgb ${parseInt(hexString[1], 16)} ${parseInt(hexString[2], 16)} ${parseInt(hexString[3], 16)}` : 'Невалидный формат ввода!';
}