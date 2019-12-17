class Queue<T> {
    private queue: T[] = [];

    public Push(value: T): void {
        this.queue.push(value);
    }

    public Pop(): T | undefined {
        return this.queue.shift();
    }
}
