import { useState, useRef, useCallback } from 'react'

const SOUNDS = [
  { file: 'arnold-good-morning.mp3', label: 'Arnold Good Morning' },
  { file: 'big-explosion.mp3', label: 'Big Explosion' },
  { file: 'punch-sound-effect.mp3', label: 'Punch' },
  { file: 'quack_5.mp3', label: 'Quack' },
  { file: 'goofy-yell.mp3', label: 'Goofy Yell' },
  { file: 'hooyahh.mp3', label: 'Hooyahh' },
  { file: 'oh-hell-no-vine_1.mp3', label: 'Oh Hell No' },
  { file: 'oh-shit_4.mp3', label: 'Oh Shit' },
  { file: 'good-job-gordon.mp3', label: 'Good Job Gordon' },
  { file: 'loser-youre-a-loser-2.mp3', label: 'You\'re a Loser' },
  { file: 'f-ck-you-jack-black.mp3', label: 'Jack Black' },
  { file: 'i-fart-in-your-general-direction.mp3', label: 'Fart In Your Direction' },
  { file: 'angeloooo.mp3', label: 'Angeloooo' },
  { file: 'ai-caramba-venha-venha.mp3', label: 'Ai Caramba' },
  { file: 'answer-my-goddamn-question.mp3', label: 'Answer My Question' },
  { file: 'avada-kedavra-kurwa.mp3', label: 'Avada Kedavra Kurwa' },
  { file: 'buuuuuuuuuuurp-5.mp3', label: 'Burp' },
  { file: 'coconut-song.mp3', label: 'Coconut Song' },
  { file: 'disconnect.mp3', label: 'Disconnect' },
  { file: 'donate-sound-here-comes-the-money.mp3', label: 'Here Comes The Money' },
  { file: 'dylan-scream.mp3', label: 'Dylan Scream' },
  { file: 'eww-brother-eww.mp3', label: 'Eww Brother' },
  { file: 'fahhhh-6.mp3', label: 'Fahhhh' },
  { file: 'germany-very-friendly.mp3', label: 'Germany Very Friendly' },
  { file: 'haha-mean-look.mp3', label: 'Mean Look' },
  { file: 'i-aint-gettin-all-sweaty.mp3', label: 'Not Getting Sweaty' },
  { file: 'i-like-yo-cut-g-aaaaaaaaaaaaaaah.mp3', label: 'I Like Yo Cut G' },
  { file: 'i-need-a-minute.mp3', label: 'I Need A Minute' },
  { file: 'im-sorry-your-parents-are-brother-and-sister.mp3', label: 'Brother And Sister' },
  { file: 'its-up-your-ahh.mp3', label: 'Up Your Ahh' },
  { file: 'ive-got-this-faaaaaaaaahhhhh.mp3', label: 'I\'ve Got This' },
  { file: 'laughing-dog-meme.mp3', label: 'Laughing Dog' },
  { file: 'micheal-jackson-heeeeeeheeeheheeeeeheeee.mp3', label: 'MJ Heehee' },
  { file: 'noob_NLwTWAV.mp3', label: 'Noob' },
  { file: 'nuclear-diarrhea.mp3', label: 'Nuclear Diarrhea' },
  { file: 'nunubot_1.mp3', label: 'Nunubot' },
  { file: 'oh-shit-not-good_ZUcKH4I.mp3', label: 'Not Good' },
  { file: 'okeoke.mp3', label: 'Oke Oke' },
  { file: 'oouuegh.mp3', label: 'Oouuegh' },
  { file: 'pickyourshit.mp3', label: 'Pick Your Shit' },
  { file: 'pozharnaia-trevoga.mp3', label: 'Fire Alarm' },
  { file: 'realistic-fart-button.mp3', label: 'Realistic Fart' },
  { file: 'sorry-boss.mp3', label: 'Sorry Boss' },
  { file: 'tequila-heineken_OWrxA6f.mp3', label: 'Tequila Heineken' },
  { file: 'ultimate-fart.mp3', label: 'Ultimate Fart' },
  { file: 'you-are-a-scammer.mp3', label: 'You Are A Scammer' },
  { file: 'you-problem.mp3', label: 'You Problem' },
  { file: 'youre-ruining-it.mp3', label: 'You\'re Ruining It' },
  { file: 'babychild.mp3', label: 'Baby Child' },
  { file: 'canada_73KN5sD.mp3', label: 'Canada' },
  { file: 'dlia-feli.mp3', label: 'Dlia Feli' },
  { file: 'movie_1.mp3', label: 'Movie' },
  { file: 'video0_k03U0Iy.mp3', label: 'Video' },
  { file: 'untitled_x5mZ3OG.mp3', label: 'Mystery Sound' },
  { file: 'fahhhhh.mp3', label: 'Fahhhhh Extended' },
]

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <div className="group relative">
      <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-colors">
        <span className="text-orange-400 px-4 py-3 text-sm select-none font-medium shrink-0">{label}</span>
        <code className="flex-1 text-left px-4 py-3 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-nowrap">{text}</code>
        <button
          onClick={handleCopy}
          className="px-4 py-3 text-zinc-500 hover:text-orange-400 transition-colors shrink-0 cursor-pointer"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

function SoundButton({ file, label }: { file: string; label: string }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggle = useCallback(() => {
    if (playing && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setPlaying(false)
      return
    }

    const audio = new Audio(`/sounds/${file}`)
    audioRef.current = audio
    audio.play()
    setPlaying(true)
    audio.onended = () => setPlaying(false)
  }, [playing, file])

  return (
    <button
      onClick={toggle}
      className={`sound-btn group flex items-center gap-2.5 px-4 py-3 rounded-lg border transition-all duration-200 cursor-pointer text-left ${
        playing
          ? 'bg-orange-500/20 border-orange-500/60 text-orange-300 animate-pulse-glow'
          : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-orange-500/40 hover:text-zinc-200 hover:bg-zinc-800/80'
      }`}
    >
      <span className={`shrink-0 text-lg ${playing ? 'animate-shake' : ''}`}>
        {playing ? '🔊' : '▶'}
      </span>
      <span className="text-sm font-medium truncate">{label}</span>
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Rainbow glow orbs */}
        <div className="orb-1 absolute top-10 left-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[100px]" />
        <div className="orb-2 absolute top-20 right-1/4 w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-[100px]" />
        <div className="orb-3 absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="orb-2 absolute top-40 left-1/3 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />
        <div className="orb-1 absolute top-60 right-1/3 w-[250px] h-[250px] bg-green-400/10 rounded-full blur-[90px]" />

        {/* Sparkle particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 70}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#4dabf7', '#9775fa', '#f06595'][i % 7],
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              boxShadow: `0 0 ${6 + Math.random() * 10}px currentColor`,
            }}
          />
        ))}

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="animate-float mb-8 relative inline-block">
            <span className="text-8xl md:text-9xl select-none drop-shadow-[0_0_40px_rgba(249,115,22,0.5)]">🧴</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">un</span><span className="rainbow-text drop-shadow-[0_0_40px_rgba(249,115,22,0.4)]">wank</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4 font-semibold drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
            Stop wanking while your AI agent works.
          </p>

          <p className="text-base text-zinc-500 max-w-xl mx-auto mb-12">
            A Claude Code plugin that plays aggressively random sound effects when your agent finishes
            or needs your attention. Because apparently you can't be trusted to just <em>sit there</em>.
          </p>

          {/* Install commands */}
          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            <p className="text-xs uppercase tracking-widest text-zinc-600 font-semibold mb-4">Install in 2 commands</p>
            <CopyButton label="Step 1" text="/plugin marketplace add bigboggy/unwank" />
            <CopyButton label="Step 2" text="/plugin install unwank@unwank" />
          </div>

          <p className="text-sm text-zinc-400 italic">Then restart Claude Code. We know, we know — the hardest part.</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How it works</h2>
        <p className="text-zinc-500 text-center mb-14 max-w-lg mx-auto">
          It's not complicated. You're just bad at waiting.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-white font-semibold mb-2">Agent does work</h3>
            <p className="text-sm text-zinc-500">Claude Code is writing code, running tests, doing actual productive things. Unlike you.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧴</div>
            <h3 className="text-white font-semibold mb-2">You get... distracted</h3>
            <p className="text-sm text-zinc-500">Reddit. Twitter. That weird Wikipedia rabbit hole about medieval cheese. We've all been there.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔊</div>
            <h3 className="text-white font-semibold mb-2">SOUND plays</h3>
            <p className="text-sm text-zinc-500">A random, unhinged sound effect yanks you back to reality. You're welcome.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Features</h2>
        <p className="text-zinc-500 text-center mb-14 max-w-lg mx-auto">
          "Features" is a strong word. But here's what you get.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5">
            <span className="text-2xl shrink-0">🎲</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Random Sound Selection</h3>
              <p className="text-sm text-zinc-500">56 sounds. Zero dignity. Every notification is a surprise — like life, but louder.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5">
            <span className="text-2xl shrink-0">⚡</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Two Event Hooks</h3>
              <p className="text-sm text-zinc-500">Fires on task completion AND permission requests. Double the interruptions, double the productivity.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5">
            <span className="text-2xl shrink-0">💻</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Cross-Platform</h3>
              <p className="text-sm text-zinc-500">macOS, Linux, Windows. No one is safe. Shame knows no operating system.</p>
            </div>
          </div>
          <div className="flex gap-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5">
            <span className="text-2xl shrink-0">🔇</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Async & Non-Blocking</h3>
              <p className="text-sm text-zinc-500">Sounds play in the background. Your workflow stays unblocked. Your coworkers' peace of mind does not.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* Sound Gallery */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Sound Gallery</h2>
        <p className="text-zinc-500 text-center mb-6 max-w-lg mx-auto">
          56 hand-curated sounds to make sure you never feel comfortable at your desk again.
        </p>
        <p className="text-xs text-zinc-600 text-center mb-10 italic">
          Warning: do not preview these on a video call. Or do. We're not your manager.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SOUNDS.map((sound) => (
            <SoundButton key={sound.file} file={sound.file} label={sound.label} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400 italic mb-4">"I was watching a 45-minute video essay about the decline of Western civilization when a nuclear diarrhea sound brought me back to my PR review. 10/10."</p>
            <p className="text-xs text-zinc-600">— Senior Engineer, somewhere</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400 italic mb-4">"My coworkers think I'm insane. My sprint velocity is up 300%. These two facts are related."</p>
            <p className="text-xs text-zinc-600">— Team Lead, probably</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
            <p className="text-sm text-zinc-400 italic mb-4">"I flinch every time Claude finishes now. I think I have PTSD but at least my code ships on time."</p>
            <p className="text-xs text-zinc-600">— Fullstack Dev, allegedly</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">FAQ</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-white font-semibold mb-2">Is this a real product?</h3>
            <p className="text-sm text-zinc-500">Unfortunately, yes. And it works. Install it and hate yourself for needing it.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Can I add my own sounds?</h3>
            <p className="text-sm text-zinc-500">Drop any .mp3 in the sounds folder. We recommend recordings of your disappointed parents for maximum motivation.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">What if I'm in a meeting?</h3>
            <p className="text-sm text-zinc-500">Then your colleagues will learn something about your workflow. Character building for everyone involved.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Why is it called "unwank"?</h3>
            <p className="text-sm text-zinc-500">Because "productivity-notification-sound-plugin" doesn't fit on a sticker. Also, you know exactly why.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Does it work on Linux?</h3>
            <p className="text-sm text-zinc-500">Yes. We support macOS, Linux, and Windows. Procrastination is cross-platform and so is the cure.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        {/* Rainbow glow orbs */}
        <div className="orb-3 absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-[100px]" />
        <div className="orb-1 absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-pink-500/12 rounded-full blur-[90px]" />
        <div className="orb-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px]" />
        <div className="orb-3 absolute top-10 right-1/3 w-[250px] h-[250px] bg-yellow-500/10 rounded-full blur-[80px]" />
        <div className="orb-1 absolute top-20 left-1/3 w-[200px] h-[200px] bg-green-400/10 rounded-full blur-[70px]" />

        {/* Sparkle particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`cta-sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${4 + Math.random() * 7}px`,
              height: `${4 + Math.random() * 7}px`,
              background: ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#4dabf7', '#9775fa', '#f06595'][i % 7],
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              boxShadow: `0 0 ${6 + Math.random() * 10}px currentColor`,
            }}
          />
        ))}

        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Ready to stop </span><span className="rainbow-text">wanking</span><span className="text-white">?</span>
          </h2>
          <p className="text-zinc-400 mb-12 text-lg">Two commands. That's it. Your dignity was already gone.</p>

          <div className="max-w-2xl mx-auto space-y-3 mb-8">
            <CopyButton label="Step 1" text="/plugin marketplace add bigboggy/unwank" />
            <CopyButton label="Step 2" text="/plugin install unwank@unwank" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-zinc-800/60 py-10 px-6 text-center">
        <div className="orb-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-pink-500/8 via-purple-500/8 to-cyan-500/8 rounded-full blur-[80px]" />

        {[...Array(8)].map((_, i) => (
          <div
            key={`footer-sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background: ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#4dabf7', '#9775fa', '#f06595'][i % 7],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
            }}
          />
        ))}

        <p className="relative text-sm text-zinc-500">
          Made with questionable judgment by{' '}
          <a href="https://github.com/bigboggy" target="_blank" rel="noopener noreferrer" className="rainbow-text font-semibold hover:opacity-80 transition-opacity">
            Bogdan Chayka
          </a>
        </p>
        <p className="relative text-xs text-zinc-600 mt-2">
          No developers were harmed in the making of this plugin. Psychologically, maybe.
        </p>
      </footer>
    </div>
  )
}

export default App
