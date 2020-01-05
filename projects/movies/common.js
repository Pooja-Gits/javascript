let timeoutId;
function debounce(callBack, timeOut) {
    if (timeoutId)
        clearTimeout(timeoutId);
    timeoutId = setTimeout(callBack, timeOut);
}

