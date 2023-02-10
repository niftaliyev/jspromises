import { newFunctionOneAsync,newFunctionTwoAsync,newFunctionThreeAsync } from './loadScript.js'

async function main() {

    //// like for async
    // loadScriptAsync2('one.js').then(result => {
    //     console.log(result);
    //     one()
    // });
    // console.log('test3');
    // loadScriptAsync('two.js').then(result => two());
    // console.log('test4');
    // loadScriptAsync('three.js').then(result => three());

    // //// Promise
    try {
        //somethin
    } catch (error) {
        // error 
    }

    // //// callback
    // loadScript('one.js', function () {
    //     one();
    //     loadScript('two.js', function () {
    //         two();
    //         loadScript('three.js', function () {
    //             three();
    //         });
    //     });
    // });
}
main();


function loadScriptAsync(src) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;

            script.onload = function () {
                console.log('Script loaded...');
                resolve(src);
            };

            script.onerror = function () {
                reject(new Error('Not found!'));
            };

            document.body.append(script);
        }, 500);

    });
}


function loadScriptAsync2(src) {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;

            script.onload = function () {
                console.log('Script loaded...');
                resolve(src);
            };

            script.onerror = function () {
                reject(new Error('Not found!'));
            };

            document.body.append(script);
        }, 8000);

    });
}





////// callback
function loadScript(src, callback) {


    setTimeout(() => {

        let script = document.createElement('script');
        script.src = src;

        script.onload = function () {
            console.log('Script loaded...');
            // document.dispatchEvent(scriptLoaded);
            callback();
        };

        script.onerror = function () {
            // console.log('Not found!'); 
            // callback(new Error('Not found!'));
        };

        document.body.append(script);

    }, 1000);


}



