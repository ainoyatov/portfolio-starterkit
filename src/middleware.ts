import createMiddleware from 'next-intl/middleware'
// Importing 'NextRequest' type from Next.js, which represents an incoming request in the middleware
import { NextRequest } from 'next/server'
import { locales } from './i18n'
// Importing localePrefix setting from the navigation configuration file, which likely determines URL structure for locales
import { localePrefix } from './navigation'

// Defining a custom middleware type that takes a NextRequest and returns a Promise resolving to NextRequest
type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>

// Custom middleware function that logs a message and returns the request as-is
const customMiddleware: CustomMiddleware = async req => {
  console.log('Custom middleware executed before next-intl') // Log to indicate custom middleware execution
  return req // Returning the request unmodified; you can add custom logic here if needed
}

// Creating the internationalization middleware with specified locales, default locale, and locale prefix settings
const intlMiddleware = createMiddleware({
  locales,          // Supported locales (e.g., ['en', 'fr', 'ja'])
  defaultLocale: 'en', // Default locale to fall back to if none is detected
  localePrefix      // Controls how locales are prefixed in URLs (e.g., '/en', '/fr')
})

// Main middleware function that first runs custom middleware, then the intl middleware
export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> { // Ensuring the function returns what intlMiddleware returns (likely a NextResponse)
  await customMiddleware(req) // Execute custom logic before internationalization
  return intlMiddleware(req)  // Process the request with next-intl's middleware for language handling
}

// Configuring the middleware to apply to specific routes using the matcher
export const config = {
  matcher: [
    '/', // Apply middleware to the root path
    '/(fr|en|ja|de|ru|es|fa|ar)/:path*' // Apply to any paths prefixed with supported locales, followed by any subpath
    // Example matches: '/', '/en/about', '/fr/contact', '/ja/products'
  ]
}





// import createMiddleware from 'next-intl/middleware'
// import { NextRequest } from 'next/server'
// import { locales } from './i18n'
// import { localePrefix } from './navigation'

// type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>

// const customMiddleware: CustomMiddleware = async req => {
//   console.log('Custom middleware executed before next-intl')
//   return req
// }

// const intlMiddleware = createMiddleware({
//   locales,
//   defaultLocale: 'en',
//   localePrefix
// })

// export default async function middleware(
//   req: NextRequest
// ): Promise<ReturnType<typeof intlMiddleware>> {
//   await customMiddleware(req)
//   return intlMiddleware(req)
// }

// export const config = {
//   matcher: ['/', '/(fr|en|ja|de|ru|es|fa|ar)/:path*']
// }
