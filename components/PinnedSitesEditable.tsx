import ReactImageFallback from 'react-image-fallback'

export const PinnedSites = ({ urls }: { urls: string[] }) => {
  return (
    <div className='flex justify-center overflow-x-auto'>
      {urls.map((url) => {
        const parsed = new URL(url)
        return (
          <a
            href={url}
            className={`bg-white rounded-xl shadow bg-primary mx-1 p-2`}
          >
            <ReactImageFallback
              className='w-96 rounded-xl'
              src={
                parsed.host === 'octii.chat'
                  ? 'https://cdn.octii.chat/assets/default.webp'
                  : `https://octii-cdn.nyc3.digitaloceanspaces.com/tab/icons/${parsed.host}.png`
              }
              fallbackImage={[
                `${parsed.origin}/favicon.svg`,
                `${parsed.origin}/touch-icon-iphone-retina.png`,
                `${parsed.origin}/touch-icon-ipad-retina.png`,
                `${parsed.origin}/touch-icon-ipad.png`,
                `${parsed.origin}/touch-icon-iphone.png`,
                `${parsed.origin}/apple-touch-icon.png`,
                `https://favicons.githubusercontent.com/${parsed.host}`,
                `${parsed.origin}/favicon.png`,
                `${parsed.origin}/favicon.ico`
              ]}
            />
          </a>
        )
      })}
    </div>
  )
}

export default PinnedSites