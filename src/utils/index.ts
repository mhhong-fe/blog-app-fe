type DebounceFunction = (...args: any[]) => void;

export function debounce<T extends DebounceFunction>(func: T, wait: number): T {
    let timeout: NodeJS.Timeout | undefined;

    return function (this: any, ...args: Parameters<T>): void {
        const context = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func.apply(context, args), wait);
    } as T;
}
