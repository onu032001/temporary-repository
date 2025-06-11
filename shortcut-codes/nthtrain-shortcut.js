let Y = function (f) {
    return (function (x) {
        return f(function (t) {
            return x(x)(t);
        });
    })(function (x) {
        return f(function (t) {
            return x(x)(t);
        });
    });
};
let nthtrain_maker = function (maker) {
    return function (index) {
        return function (max) {
            if (index >= max) {
                return 'Train #' + String(max);
            } else {
                return 'Train #' + String(index) + '\n' + maker(index+1)(max);
            }
        };
    };
};
let nthtrain = Y(nthtrain_maker);
completion(nthtrain(1)(9));