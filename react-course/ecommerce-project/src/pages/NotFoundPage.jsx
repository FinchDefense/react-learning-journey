import { Header } from '../components/Header'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <>
      <title>404 Page Not Found</title>
      <Header />

      <div className="page-not-found-message">
        404
        Page Not Found
      </div>
    </>
  )
}