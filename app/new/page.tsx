'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBlog() {
  const [form, setForm] = useState({ title: '', content: '' });
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('blogs') || '[]');
    const newPost = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem('blogs', JSON.stringify([...existing, newPost]));
    router.push('/');
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', width: '300px' }}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', width: '300px', height: '100px' }}
        />
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
}
