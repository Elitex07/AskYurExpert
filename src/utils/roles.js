import { auth } from '@clerk/nextjs/server'

export const checkRole = 
/**
 * 
 * @param { Roles } role 
 * @returns 
 */
async (role) => {
  const { sessionClaims } = await auth()
  return sessionClaims?.metadata.role === role
}