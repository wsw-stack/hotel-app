'use client';

import { useEffect, useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

export default function UserIcon() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchProfileImage()
      .then((url) => {
        if (!cancelled && url) setImage(url);
      })
      .catch(console.error);
    return () => { cancelled = true; };    // 避免卸载后 setState
  }, []);

  if (!image) {
    return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
  }
  return <img src={image} className="w-6 h-6 rounded-full object-cover" />;
}
