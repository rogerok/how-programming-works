const curry = (fn, ...params) => {

    const curried = (...args) =>
        fn.length > args.length ?
            curry(fn.bind(null, ...args)) : fn(...args);

    return params.length ? curry(...params) : curried;
}