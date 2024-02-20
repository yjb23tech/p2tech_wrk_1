import { createRoot } from "react-dom/client"; 
import Card from "./components/Card.jsx"

const App = () => {
    
    return (
        <div>
            <Card 
                card_song_cover_art = "track_8_song_art.png"
                card_song_title = "Motion Gang"
                card_song_album_name = "The Wizard"
                card_song_artist_name = "Future"
                card_song_genre_name = "Trap Music"
            />
        </div>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)