// Promise.ALL - возвращает promise, выполнится, когда будут выполнены все
// переданные в виде перечисляемого аргумента, или отклонено любое из.
Promise.customAll = function (prArr) {
    return new Promise(function (resolve, reject) {
        var resolvedCount = 0;
        var result = [];

        for (var i = 0; i < prArr.length; i++) {
            prArr[i].then(function (res) {
                    resolvedCount++;
                    result[i] = res;

                    if (resolvedCount === prArr.length) resolve(result);
                }.bind(i),
                function (err) {
                    reject(err)
                });
        }
    });
};

// Promise.RACE - возвращает выполненый или отклоненый promise, в зависимости от того,
// с каким результатом завершится первый из переданных обещаний.
Promise.customRace = function (prArr) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < prArr.length; i++) {
            prArr[i].then(function (res) {
                    return resolve(res)
                }.bind(i),
                function (err) {
                    reject(err)
                });
        }
    });
};