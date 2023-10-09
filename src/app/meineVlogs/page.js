import BlogPost from '@/components/blogpost';

export default function MeineVlogs() {
  return (
    <div>
      <h1>Meine Vlogs</h1>
      <BlogPost postId={1} />
      <br />
      <BlogPost postId={2} />
      <br />
      <BlogPost postId={3} />
    </div>
  );
}
