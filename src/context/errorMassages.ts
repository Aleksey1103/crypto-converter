type ErrorMessagesMap = {
    [key: string]: {
        title: string
        text: string
    }
}
const errorMessagesMap:ErrorMessagesMap = {
    'connectionError': {
        title: 'Connection Error',
        text: 'Something went wrong. Please reload the application and try again.'
    },
    'rateError': {
        title: 'Converting Error',
        text: 'Unfortunately this kind of converting is not possible. Please change one of the currencies.'
    },
    'requestQuantityError': {
        title: 'Too many requests',
        text: 'You have exceeded the rate limit per minute. Please wait a bit.',
    }
}

export default errorMessagesMap;