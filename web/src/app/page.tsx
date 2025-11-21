export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#fde2c2,_#f7b46e_60%,_#ee7d58_100%)] px-6 py-16 text-[#28190f]">
      <main className="camera-pan relative aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-[48px] border border-white/35 bg-gradient-to-b from-[#fef4de] via-[#f9d9a8] to-[#f6b38a] shadow-[0_40px_120px_-40px_rgba(112,65,30,0.55)]">
        <div className="absolute inset-0 sun-glow" />
        <div className="absolute inset-0 lens-layer">
          <span className="lens-flare" />
          <span className="lens-flare lens-flare--secondary" />
        </div>
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 film-grain" />

        <div className="absolute inset-x-0 bottom-[36%] flex justify-between px-12">
          <div className="tree-line tree-line--left" />
          <div className="tree-line tree-line--right" />
        </div>

        <div className="absolute inset-x-0 bottom-[28%] flex justify-between px-14">
          <div className="house-block house-block--left">
            <div className="house-roof" />
            <div className="house-body">
              <span className="house-window house-window--left" />
              <span className="house-window house-window--right" />
            </div>
          </div>
          <div className="house-block house-block--right">
            <div className="house-roof" />
            <div className="house-body">
              <span className="house-window house-window--left" />
              <span className="house-window house-window--right" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[24%] z-10 flex justify-between px-[5%]">
          <div className="lawn">
            <span className="lawn-highlight" />
          </div>
          <div className="lawn lawn--right">
            <span className="lawn-highlight lawn-highlight--right" />
          </div>
        </div>

        <div className="absolute left-[12%] bottom-[26%] z-20 flex gap-6">
          <div className="child-runner child-runner--leading">
            <span className="child-head" />
            <span className="child-body" />
          </div>
          <div className="child-runner child-runner--trailing">
            <span className="child-head" />
            <span className="child-body" />
          </div>
        </div>

        <div className="absolute left-1/2 bottom-[18%] z-30 -translate-x-1/2 car">
          <div className="car-top" />
          <div className="car-body">
            <div className="car-window car-window--front" />
            <div className="car-window car-window--rear" />
            <div className="car-trim" />
            <div className="car-plate" />
          </div>
          <div className="car-shadow" />
          <div className="car-wheel car-wheel--front">
            <span className="car-wheel-cap" />
          </div>
          <div className="car-wheel car-wheel--rear">
            <span className="car-wheel-cap" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 street">
          <div className="street-surface" />
          <div className="street-divider" />
          <div className="street-shadow" />
        </div>

        <div className="relative z-40 flex h-full flex-col justify-between p-12">
          <div className="flex max-w-lg flex-col gap-3 text-shadow">
            <span className="font-medium uppercase tracking-[0.6em] text-[#a25432]/70">
              Golden hour reel
            </span>
            <h1 className="font-serif text-5xl tracking-tight text-[#2e160a]">
              Infinite Peace
            </h1>
            <p className="text-lg leading-relaxed text-[#4a2b1c]/85">
              A slow-gliding, 35mm recollection of a suburban dream. Warm sun,
              drifting lens flare, and the gentle hum of a red wagon cruising
              home.
            </p>
          </div>
          <div className="flex items-center gap-12 text-sm uppercase tracking-[0.4em] text-[#955436]/80">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#e2764c] shadow-[0_0_12px_rgba(226,118,76,0.7)]" />
              Captured on 35mm
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f9c471]" />
              Suburban Reverie
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
