window.requirejs.config({
    baseUrl: 'http://localhost:8080/',
})

export class Cdn<T> {
    static create<T>(name: string) {
        return new Cdn<T>(name)
    }

    private _name: string
    private _pack: T | null
    private _load: boolean

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
