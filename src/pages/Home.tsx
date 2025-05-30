export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Nyx Guard</h1>
      <p>Analizza abbonamenti, ottimizza spese, proteggi le tue finanze.</p>
      <a href="/app">
        <button style={{ marginTop: '1rem' }}>Inizia ora</button>
      </a>
      <p style={{ marginTop: '2rem' }}>
        <a href="/plans">Visualizza piani Premium</a>
      </p>
    </main>
  );
}
