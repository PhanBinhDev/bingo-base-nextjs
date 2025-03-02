// Use Facades Pattern
// Note: This file is used to interact with the database and retrieve user profile data.
// Two main reasons for using facades
/**
 * 1. Increase vendor resistance - You can switch third-party providers easily.
 * For example, you might switch from Firebase to Supabase or vice versa.
 * Instead of updating your whole codebase to reflect the change,
 * you only update the facade.
 * 2. Simplify your code - A facade can reduce the code you need to write in your application because it reduces the API to your specific application needs.
 * Simultaneously, it makes your code easier to understand because you can give the facade descriptive names.
 *
 */
import { UserProfile } from '@prisma/client';

import prisma from '@/lib/prisma';

export async function retrieveUserProfileFromDatabaseByEmail(
  email: UserProfile['email'],
) {
  return await prisma.userProfile.findUnique({ where: { email } });
}
