import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('./en/404');
}
