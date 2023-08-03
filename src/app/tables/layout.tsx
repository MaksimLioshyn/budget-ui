import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Table page',
  description: 'Meaningless description for table page',
};

export default function TablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
