import Head from 'next/head';
import { Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

export default function Home() {
  return (
    <div className="container">
      <Button type="primary">按钮</Button>
      <HeartTwoTone twoToneColor="#eb2f96" />
    </div>
  );
}
