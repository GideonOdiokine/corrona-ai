import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)'],
    ignoredRoutes: ['/chatbot'],
})

export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',],
}
