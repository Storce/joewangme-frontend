// app/page.js
import { redirect } from 'next/navigation';

export default function Page() {
    redirect('https://blog.joewang.me');
    return null; // This won't actually render since redirect() triggers an immediate navigation
}
