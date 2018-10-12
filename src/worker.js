import workly from 'workly'

function busyFunc() {
    let st = Date.now();
    while (true) {
        if ((Date.now() - st) > 5000) break;
    }
    return "Yeah";
}

workly.expose(busyFunc);