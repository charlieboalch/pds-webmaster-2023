const nextConfig = {
    reactStrictMode: true,
}

// module.exports = {
//     images: {
//         domains: ['unsplash.com']
//     }
// }
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '**'
        },
          {
              protocol: 'https',
              hostname: 'images.pexels.com',
              port: '',
              pathname: '**'
          }
      ]
    }
}