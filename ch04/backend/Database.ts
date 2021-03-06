import mongoose, {Schema} from "mongoose";

export class Mongo {
    constructor(private url: string = "mongodb://localhost:27017/ch04") {
    }

    public Connect(): void {
        mongoose.connect(this.url, (err: any) => {
            if (err) {
                console.log('Unable to connect ' + err);
            }
            else {
                console.log('Connected to the database');
            }
        });
    }
}

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String
});
export const Picture = mongoose.model('picture', PictureSchema);
