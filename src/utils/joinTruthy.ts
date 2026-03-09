export function joinTruthy(...parts: (string | undefined)[]): string {
    return parts.filter(Boolean).join(" ");
}
