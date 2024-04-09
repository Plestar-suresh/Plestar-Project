import { kv } from "@vercel/kv";
import crypto from "crypto";
import { v4 as uuidv4 } from 'uuid';
type SessionId = string;

export function getSessionId(): SessionId | undefined {
    const cookies = document.cookie;
    const matches = cookies.match(new RegExp('(^| )session-id=([^;]+)'));
    if (matches) {
      return matches[2];
    }
    return undefined;
  }

  function setSessionId(sessionId: SessionId): void {
    document.cookie = `session-id=${sessionId}`;
  }

  export function getSessionIdAndCreateIfMissing(): SessionId {
    let sessionId = getSessionId();
    if (!sessionId) {
      sessionId = uuidv4();
      setSessionId(sessionId);
    }
    return sessionId;
  }

export function get(key: string, namespace: string = ""): string {
    const sessionId = getSessionId();
    if (!sessionId) {
      return "";
    }
    const value = kv.hget(`session-${namespace}-${sessionId}`, key);
    return typeof value === 'string' ? value : "";
}


export function getAll(namespace: string = "") {
  const sessionId = getSessionId();
  if (!sessionId) {
    return null;
  }
  return kv.hgetall(`session-${namespace}-${sessionId}`);
}

export function set(key: string, value: string, namespace: string = "") {
  const sessionId = getSessionIdAndCreateIfMissing();
  return kv.hset(`session-${namespace}-${sessionId}`, { [key]: value });
}
