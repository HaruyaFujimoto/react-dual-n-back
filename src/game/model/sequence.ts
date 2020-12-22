class Sequence {
    private sequence: Array<any> = [];
    private inputs: Array<any> = [];
    private currentIndex: number = 0;
    private maxIndex: number;
    private _hasNext: boolean = true;
    
    constructor(n: number) {
        this.maxIndex = n - 1;
        [...Array(n)].map(
            () => {
                const obj = {
                    pos: this.getRandomIndex(),
                    letter: this.getRandomAlphabet()
                }
                this.sequence.push(obj);
            }
        )
    }

    private getRandomIndex() :number {
        return Math.floor(Math.random() * 9);
    }

    private getRandomAlphabet() :string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charLength = characters.length;
        return characters.charAt(Math.floor(Math.random() * charLength))
    }

    public setInputs(pos: boolean, letter: boolean) {
        const obj = {
            pos: pos,
            letter: letter
        }
        this.inputs.push(obj);
    }

    public getCurrentIndex() :number {
        return this.currentIndex;
    }

    public progress() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex += 1;
            return;
        }
        this._hasNext = false;
    }

    public getCurrentSequence() : any {
        return this.sequence[this.currentIndex];
    }

    get hasNext() {
        return this._hasNext;
    }


}

export default Sequence
