import { retrieveUserProfileFromDatabaseByEmail } from '@/features/user-profiles/user-profiles-model';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Dashboard() {
  const user =
    await retrieveUserProfileFromDatabaseByEmail('binhdev@gmail.com');

  return (
    <Card className="mx-auto mt-3 max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>

      <CardContent>
        {user ? (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        ) : (
          <p>User not found.</p>
        )}
      </CardContent>
    </Card>
  );
}
