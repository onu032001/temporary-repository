let Y = function (f) {
    return (function (x) {
        return f(function (y) {
            return x(x)(y);
        });
    })(function (x) {
        return f(function (y) {
            return x(x)(y);
        });
    });
};
let F = function (f) {
    return function (x) {
        if (x <= 0) {
            return 'patapim';
        } else {
            return 'brr '+f(x-1);
        }
    };
};
completion(Y(F)(2));
