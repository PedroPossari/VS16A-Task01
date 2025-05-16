"use client";

import dynamic from 'next/dynamic';

const WindowResizer = dynamic(
  () => import('../../../components/WindowResizer/WindowResizer'),
  { ssr: false, loading: () => <p>Carregando...</p> }
);

export default function TesteJanelaPage() {
  return (
    <main className="container mx-auto py-8">
      <WindowResizer />
    </main>
  );
}