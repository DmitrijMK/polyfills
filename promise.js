// Promise.ALL - возвращает promise, выполнится, когда будут выполнены все
// переданные в виде перечисляемого аргумента, или отклонено любое из.
Promise.prototype.all = function (prArr) {
    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const result = [];

        prArr.forEach((pr, index) => {
            pr.then(v => {
                    resolvedCount++;
                    result[index] = v;

                    if (resolvedCount === prArr.length) resolve(result);
                },
                (err) => reject(err));
        });
    });
};

// Promise.RACE - возвращает выполненый или отклоненый promise, в зависимости от того,
// с каким результатом завершится первый из переданных обещаний.
Promise.prototype.race = function (prArr) {
    return new Promise((resolve, reject) => {
        prArr.forEach(pr => {
            pr.then(v => resolve(v),
                (err) => reject(err));
        });
    });
};


