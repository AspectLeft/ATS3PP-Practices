function ExpensiveWebCall(time: number) {
    return new Promise(((resolve, reject) => setTimeout(resolve, time)));
}

class MyWebService {
    async CallExpensiveWebOperation() {
        try {
            await ExpensiveWebCall(4000);
            console.log('Finished web service');
        } catch (e) {
            console.log(`Caught ${e}`);
        }
    }
}
