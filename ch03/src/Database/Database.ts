import {RecordState} from "../RecordState";
import {ITable} from "./TableBuilder";

export class Database<T extends RecordState> {
    private readonly indexDb: IDBFactory;
    private database: IDBDatabase | null = null;
    constructor(private readonly table: ITable) {
        this.indexDb = window.indexedDB;
        this.OpenDatabase();
    }

    private OpenDatabase(): void {
        const open = this.indexDb.open(this.table.Database(), this.table.Version());
        open.onupgradeneeded = (e: any) => {
            this.UpgradeDatabase(e.target.result);
        };
        open.onsuccess = (e: any) => {
            this.database = e.target.result;
        };
    }

    private UpgradeDatabase(database: IDBDatabase) {
        this.database = database;
        this.table.Build(this.database);
    }

    private GetObjectStore(): IDBObjectStore | null {
        try {
            const transaction : IDBTransaction = this.database!.transaction(this.table.TableName(), "readwrite");
            return transaction.objectStore(this.table.TableName());
        } catch (e) {
            return null;
        }
    }

    public Create(state: T): void {
        const dbStore = this.GetObjectStore();
        dbStore!.add(state);
    }

    public Read(): Promise<T[]> {
        return new Promise((res) => {
            const dbStore = this.GetObjectStore();
            const items: T[] = new Array<T>();
            const req: IDBRequest = dbStore!.openCursor();
            req.onsuccess = (e: any) => {
                const cursor: IDBCursorWithValue = e.target.result;
                if (cursor) {
                    const result: T = cursor.value;
                    if (result.IsActive) {
                        items.push(result);
                    }
                    cursor.continue();
                }
                else {
                    res(items);
                }
            }
        });
    }

    public Update(state: T): Promise<void> {
        return new Promise((resolve) => {
            const dbStore = this.GetObjectStore();
            const innerReq: IDBRequest = dbStore!.put(state);
            innerReq.onsuccess = () => {
                resolve();
            };
        });
    }

    public Delete(idx: number | string): Promise<void> {
        return new Promise((resolve) => {
            const dbStore = this.GetObjectStore();
            const innerReq: IDBRequest = dbStore!.delete(idx.toString());
            innerReq.onsuccess = () => {
                resolve();
            };
        });
    }
}
