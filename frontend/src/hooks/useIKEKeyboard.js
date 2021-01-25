
const allowedOrigin = 'https://ike-15-interview-app-c3vbkpk2n.herokuapp.com'
window.addEventListener('message', receiveMessage, false);

const listeners = {
    'KEYBOARD_PRESS': {},
    'KEYBOARD_ENTER': {},
    'KEYBOARD_DELETE': {},
}

function receiveMessage(e) {
    if (e.origin !== allowedOrigin) {
        console.log("invalid message origin!")
        return
    }

    if (e.data.type === 'KEYBOARD_PRESS') {
        Object.values(listeners[e.data.type]).map(listener => listener(e.data.payload.key))
    }
    else if (e.data.type === 'KEYBOARD_ENTER') {
        Object.values(listeners[e.data.type]).map(listener => listener())
    }
    else if (e.data.type === 'KEYBOARD_DELETE') {
        Object.values(listeners[e.data.type]).map(listener => listener())
    }
}

function openKeyboard() {
    window.parent.postMessage({ type: 'KEYBOARD_OPEN' }, allowedOrigin)
}

function closeKeyboard() {
    window.parent.postMessage({ type: 'KEYBOARD_CLOSE' }, allowedOrigin)
}


function useIKEKeyboard() {
    const addKeyboardListener = (type, name, listener) => {
        listeners[type][name] = listener
    }
    console.log(listeners)

    return {
        addKeyboardListener,
        openKeyboard,
        closeKeyboard,
    }
}

export default useIKEKeyboard
