// Copyright (c) 2018-2020, TurtlePay Developers
//
// Please see the included LICENSE file for more information.

import { createLogger, format, Logger as WinstonLogger, transports } from 'winston';
import * as fs from 'fs';
import { resolve } from 'path';

/** @ignore */
const LogPath = resolve(process.cwd(), 'logs/');

if (!fs.existsSync(LogPath)) {
    fs.mkdirSync(LogPath);
}

export const Logger: WinstonLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: resolve(LogPath, 'info.log') })
    ]
});

Logger.add(
    new transports.Console({
        level: (process.env.NODE_ENV !== 'production') ? 'debug' : 'info',
        format: format.combine(
            format.colorize(),
            format.timestamp(),
            format.splat(),
            format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
        )
    })
);

/**
 * Allows for adding an additional file based log
 * @param filename the filename to save the log to
 * @param level the minimum level to log
 */
export function addLog (filename: string, level?: string): void {
    Logger.add(
        new transports.File({
            level,
            filename: resolve(LogPath, filename)
        })
    );
}
