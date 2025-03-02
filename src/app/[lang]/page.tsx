import { getDictionary } from '@/features/internationalization/get-dictionaries';
import { Locale } from '@/features/internationalization/i18n-config';

import { CounterComponent } from './counter-component';
import Dashboard from './dashboard';

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>This text is rendered on the server: {dictionary.landing.welcome}</p>
      <CounterComponent dictionary={dictionary.counter} />
      <Dashboard />
    </div>
  );
}
