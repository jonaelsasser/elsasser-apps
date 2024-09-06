import { createDirectus, rest } from "@directus/sdk";

const directusUrl = process.env.DIRECTUS_URL

const directus = createDirectus(directusUrl).with(rest());

export async function authenticateDirectusUser(email: string, password: string) {
  try {
    const { access_token } = await directus.auth.login({ email, password });
    return access_token;
  } catch (error) {
    throw new Error("Authentication failed");
  }
}

export async function getDirectusUser(token: string) {
  directus.auth.static(token);  // Use the token for authentication
  return directus.users.me.read();
}
