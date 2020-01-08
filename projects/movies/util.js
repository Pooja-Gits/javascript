function debounce(callback, delay = 1000) {
    let debounceTimeoutId;
    return (...args) => {
        if (debounceTimeoutId)
            clearTimeout(debounceTimeoutId);
        debounceTimeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, delay);
    };
}