import Hero from './components/Hero';
import Envelope from './components/Envelope';
import PhotoFrame from './components/PhotoFrame';
import Qualities from './components/Qualities';
import CTA from './components/CTA';
import AmbientEffects from './components/AmbientEffects';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
      <AmbientEffects />
      <MusicPlayer />
      
      <main className="relative z-10 w-full overflow-hidden flex flex-col items-center">
        <Hero />
        <Envelope />
        <PhotoFrame />
        <Qualities />
        <CTA />
        
        <footer className="w-full text-center py-6 pb-24 text-soft-purple font-dancing text-xl z-10">
          Made with 💕 sirf aapke liye, Mummy
        </footer>
      </main>
    </>
  );
}

export default App;
