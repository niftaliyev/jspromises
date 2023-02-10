
// export async function newFunctionAsync(src) {
//     let result = await loadScriptAsync3(src);
//     console.log(result);
//     one();
// }
export function newFunctionOneAsync(src) {
    loadScriptAsyncForOne(src).then(result =>{
        console.log(result);
        one();
    });

}
// export async function newFunctionOneAsync(src) {
//     let result = await loadScriptAsync3(src);
//     console.log(result);
//     one();
// }
export async function newFunctionTwoAsync(src) {
    loadScriptAsync3(src).then(result =>{
    console.log(result);
    two();
});

}
export async function newFunctionThreeAsync(src) {
    loadScriptAsync4(src).then(result =>{
    console.log(result);
    three();
});

}
export function loadScriptAsync3(src) {
    return new Promise(function(resolve, reject) {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            
            script.onload = function() {
                console.log('Script loaded...'); 
                resolve(src);

            };
        
            script.onerror = function() {
                reject(new Error('Not found!'));
            };
        
            document.body.append(script);
        }, 10000);
        
    });
}


export function loadScriptAsync4(src) {
    return new Promise(function(resolve, reject) {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            
            script.onload = function() {
                console.log('Script loaded...'); 
                resolve(src);

            };
        
            script.onerror = function() {
                reject(new Error('Not found!'));
            };
        
            document.body.append(script);
        }, 3000);
        
    });
}

export function loadScriptAsyncForOne(src) {
    return new Promise(function(resolve, reject) {

        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            
            script.onload = function() {
                console.log('Script loaded...'); 
                resolve(src);

            };
        
            script.onerror = function() {
                reject(new Error('Not found!'));
            };
        
            document.body.append(script);
        }, 7000);
        
    });
}