import { cookies } from "next/headers";
import { kv } from "@vercel/kv";
import crypto from "crypto";

type SessionId = string;

export function getSessionId(): SessionId | undefined {
  const cookieStore = cookies();
  return cookieStore.get("session-id")?.value;
}

function setSessionId(sessionId: SessionId): void {
  const cookieStore = cookies();
  cookieStore.set("session-id", sessionId);
}

export function getSessionIdAndCreateIfMissing() {
  const sessionId = getSessionId();
  if (!sessionId) {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);

    return newSessionId;
  }

  return sessionId;
}

export async function get(key: string, namespace: string = ""): Promise<string | null> {
    const sessionId = getSessionId();
    if (!sessionId) {
      return "";
    }
    const value = await kv.hget(`session-${namespace}-${sessionId}`, key);
    return value ? String(value) : "";
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
