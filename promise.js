// Promise.ALL - возвращает promise, выполнится, когда будут выполнены все
// переданные в виде перечисляемого аргумента, или отклонено любое из.
Promise.customAll = function (prArr) {
    return new Promise(function (resolve, reject) {
        let resolvedCount = 0;
        const result = [];

        prArr.forEach(function (pr, index) {
            pr.then(function (v) {
                    resolvedCount++;
                    result[index] = v;

                    if (resolvedCount === prArr.length) resolve(result);
                },
                function (err) {
                    reject(err)
                });
        });
    });
};

// Promise.RACE - возвращает выполненый или отклоненый promise, в зависимости от того,
// с каким результатом завершится первый из переданных обещаний.
Promise.customRace = function (prArr) {
    return new Promise(function (resolve, reject) {
        prArr.forEach(function (pr) {
            pr.then(function (v) {
                    return resolve(v)
                },
                function (err) {
                    reject(err)
                });
        });
    });
};
