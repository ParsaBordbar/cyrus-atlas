import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>صفحه مورد نظر پیدا نشد</h1>
      <p>متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <Link to="/history/cyrus-era">
        بازگشت به مقاله
      </Link>
    </main>
  )
}