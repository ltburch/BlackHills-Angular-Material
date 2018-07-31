import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

export enum Level {
  off = 0,
  error = 1,
  warn = 2,
  info = 3,
  log = 4
}

/**
 * Wrapper for console output methods with support for silencing messages in production
 */
@Injectable()
export class Logger {
  private _level: Level;

  constructor() {
    this._level = environment.enableLogging ? Level.log : Level.off;
  }

  public error(...messages: any[]) {
    this.logToConsole(Level.error, messages);
  }
  public warn(...messages: any[]) {
    this.logToConsole(Level.warn, messages);
  }
  public info(...messages: any[]) {
    this.logToConsole(Level.info, messages);
  }
  public log(...messages: any[]) {
    this.logToConsole(Level.log, messages);
  }

  public isErrorLoggingEnabled = () => this.isLevelEnabled(Level.error);
  public isWarnLoggingEnabled = () => this.isLevelEnabled(Level.warn);
  public isInfoLoggingEnabled = () => this.isLevelEnabled(Level.info);
  public islogLoggingEnabled = () => this.isLevelEnabled(Level.log);

  private isLevelEnabled(level: Level) {
    return this._level >= level;
  }

  private logToConsole(level: Level, messages?: any[]) {
    if (console && this.isLevelEnabled(level)) {
      let method = Level[level];
      const label = method.toUpperCase();

      // prefix message with log level
      if (!messages || !messages.length) {
        messages = [];
      }
      messages.unshift(`[UI.SPA: ${label}]`);

      // default to console.log if other methods unsupported
      if (!console[method]) {
        method = 'log';
      }

      // log to console, if log method available
      if (console[method]) {
        console[method](...messages);
      }
    }
  }
}
