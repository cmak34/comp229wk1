export function parentWithoutClosure() {
    const message = 'Hello World';

    // replaced alert with console.log to avoid using browser
    function child() {
        console.log(message);
    }

    child();
}

export function parentWithClosure() {
    const message = 'Hello World';

    // replaced alert with console.log to avoid using browser
    function child() {
        console.log(message);
    }

    return child;
}