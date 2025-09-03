import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { IntlProvider } from 'react-intl'
import Header from '../components/Header'
import appCss from '../styles.css?url'
import type { PropsWithChildren } from 'react'
import { getLocale, getMessages } from '@/lang/config'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My Magazine' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <div>Not Found</div>,
})

function RootDocument({ children }: PropsWithChildren) {
  const locale = getLocale(navigator.language)

  return (
    <html lang={navigator.language}>
      <head>
        <HeadContent />
      </head>
      <body>
        <IntlProvider locale={locale} messages={getMessages(locale)}>
          <Header />
          {children}
        </IntlProvider>
        <Scripts />
      </body>
    </html>
  )
}
