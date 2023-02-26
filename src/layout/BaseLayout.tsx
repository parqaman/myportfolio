import { AppHeader, AppHeaderProps } from './AppHeader'
import { Page, PageProps } from './Page'

export type BaseLayoutProps = AppHeaderProps & PageProps;

export const BaseLayout = ({ headerRightMenu, ...pageProps }: BaseLayoutProps) => {
  return (
    <div className='text-white'>
        <AppHeader headerRightMenu={headerRightMenu} />
        <Page {...pageProps} />
    </div>
  )
}
