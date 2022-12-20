export function define(target: any, props: Record<string, Function>) {
    Object.keys(props).forEach((prop) => {
        try {
            if (!target[prop]) {
                Object.defineProperty(target, prop, {
                    enumerable: false,
                    writable: true,
                    configurable: true,
                    value: props[prop]
                })
            }
        } catch (error) {}
    })
}
