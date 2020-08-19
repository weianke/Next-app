import Link from 'next/link';
import { Button } from 'antd';

export default ({ children }) => (
  <>
    <header>
        <Link href="/a?id=93948mm3233">
          <div>
            <Button type="primary">linkA</Button>
          </div>
        </Link>
        <Link href="/test/b">
          <div>
            <Button type="primary">linkB</Button>
          </div>
        </Link>
    </header>
    {children}
  </>
)