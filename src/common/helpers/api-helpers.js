import nodeFetch from "node-fetch";
import internalServerError from "../../assets/internal-server-error-model.json"

export function createGetBasePath(path) {
    return () => process.env.MONO_BACKEND_URL + path
}

export function fetch(path, init) {
    return nodeFetch(path, {
        ...init,
        headers: {
            ...(init.headers || {}),
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .catch(exception => {
            console.warn(exception)
            return {
                ...internalServerError,
                error: {
                    ...(internalServerError.error || {}),
                    message: exception.message
                }
            }
        })
}