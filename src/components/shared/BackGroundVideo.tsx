export default function BackGroundVideo({ nameVideo }: { nameVideo: string }) {
  return (
    <>
      <div className="flex relative overflow-visible h-0 w-full shadow-inner shadow-primaryTheme-500 z-[-50]">
        <div className="absolute top-0 left-0  w-full h-screen bg-gradient-to-b  from-primaryTheme-500 via-primaryTheme-500/50 to-primaryTheme-500 "></div>

        <video
          className="w-full h-screen object-cover "
          placeholder="blur"
          autoPlay
          muted
          loop
          src={'/assets/' + nameVideo}
          typeof="video/mp4"
        />
      </div>
    </>
  )
}
