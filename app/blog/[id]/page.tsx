'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function BlogDetail() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      const blogs = JSON.parse(stored);
      const found = blogs.find((b: any) => b.id.toString() === params.id);
      if (found) {
        setBlog(found);
        document.title = `${found.title} | My Blog`; // ✅ Dynamic SEO title (client side)
      } else {
        document.title = 'Blog Not Found | My Blog';
      }
    } else {
      document.title = 'My Blog';
    }
  }, [params.id]);

  if (!blog)
    return (
      <div style={{ padding: '40px' }}>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>← Back</a>
        <p>Loading or blog not found 😕</p>
      </div>
    );

  return (
    <div style={{ padding: '40px' }}>
      <a
        href="/"
        style={{
          color: '#0070f3',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        ← Back
      </a>

      <h1><b>{blog.title}</b></h1>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{blog.content}</p>
      <div style={{ color: 'gray', marginTop: '20px' }}>{blog.date}</div>
    </div>
  );
}

