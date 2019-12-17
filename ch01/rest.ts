let guitar = { manufacturer: 'Ibanez', type: 'Jem 777', strings: 6};

let { manufacturer: maker, ...details} = guitar;

const instruments = [ 'Guitar', 'Violin', 'Oboe', 'Drums' ];
let [gtr, ...instrumentslice] = instruments;

function PrintInstruments(log: string, ...instruments: string[]): void {
    console.log(log);
    instruments.forEach(instrument => {
        console.log(instrument);
    })
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');
