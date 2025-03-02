type Cdn<T extends [any, unknown][]> = {
    [K in keyof T & `${number}` as T[K][0]]: CdnPackage<T[K][1]>
}

type CdnPackage<T> = {
    name: string
    pack: T
    isLoaded: boolean
    isLoading: boolean
    load(): void
}

class CdnItem<T> implements CdnPackage<T> {
    private _name: string
    private _pack: T | null
    private _load: boolean

    get name() {
        return this._name
    }

    get pack() {
        if (this._pack === null) {
            throw 'package not loaded!'
        }

        return this._pack
    }

    get isLoaded() {
        return this._pack !== null
    }

    get isLoading() {
        return this._load
    }

    constructor(name: string) {
        this._name = name
        this._pack = null
        this._load = false
    }

    public load(): void {
        if (!this.isLoaded && !this.isLoading) {
            this._load = true
            window.requirejs([this._name], (pack: T) => {
                this._load = false
                this._pack = pack
            })
        }
    }
}

export const createCdn = <T extends [any, unknown][] | []>(baseUrl: string, config: string[]) => {
    window.requirejs.config({ baseUrl })

    const cdn = {} as Cdn<T>

    for (const name of config) {
        cdn[name as keyof T] = new CdnItem<any>(name)
    }

    return cdn
}
