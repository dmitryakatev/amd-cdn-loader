window.requirejs.config({
    baseUrl: 'http://localhost:8080/',
})

export class Cdn<T> {
    static create<T>(name: string) {
        return new Cdn<T>(name)
    }

    private _name: string
    private _pack: T | null
    private _task: Promise<void> | null

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
        return this._task !== null
    }

    constructor(name: string) {
        this._name = name
        this._pack = null
        this._task = null
    }

    public load(): void {
        if (!this.isLoaded && !this.isLoading) {
            this._task = new Promise<void>((resolve) => {
                window.requirejs([this._name], (pack: T) => {
                    this._task = null
                    this._pack = pack
                    resolve()
                })
            })
        }
    }
}
