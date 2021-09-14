import { Button } from './Button'

interface SideBars {
  genres: Array<{
    id: number
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
    title: string
  }>
  selectedGenreId: number
  handleClickButton: (argo: number) => void
}

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: SideBars) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
