import expressWinston from 'express-winston'
import { transports, format } from 'winston'

const reqLogger = expressWinston.logger({
    transports : [
        new transports.File({
            level : 'info',
            filename: "logs/req-logs"
        }),
    ],
    format : format.combine(
        format.timestamp(),
        format.json()
    )
})

const errorLogger = expressWinston.errorLogger({
    transports : [
        new transports.File({
            level: 'error',
            filename: "logs/err-logs"
        }),
    ],
    format : format.combine(
        format.timestamp(),
        format.json()
    )
})


export {reqLogger, errorLogger}