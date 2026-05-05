import { prisma } from '@/lib/db'

export default async function Page() {
  const voices = await prisma.voice.findMany()
  return (
    <div>
      <h1>Voices ({voices.length})</h1>
      {voices.map(voice => (
        <div key={voice.id}>
          <h2>{voice.name}</h2>
          <p>{voice.variant}</p>
        </div>
      ))}
    </div>
  )
}
