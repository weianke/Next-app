import Link from 'next/link';
import { Button } from 'antd';

export default ({ children }) => (
  <>
    <header>
        <Link href="/a?name=anke" as="/a/1">
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