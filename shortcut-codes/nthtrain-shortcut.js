Y = function (f) {
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
nthtrain_maker = function (maker) {
    return function (index) {
        return function (max) {
            if (index >= max) {
                return String(max) + '호선';
            } else {
                return String(index) + '호선\n' + maker(index-1)(max);
            }
        };
    };
};
nthtrain = Y(nthtrain_maker);
completion(nthtrain(1)(9));
