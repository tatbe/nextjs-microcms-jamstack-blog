
import Link from "next/link";
import { client } from "../libs/client"

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
                {blog.title}
            </Link>
          
        </li>
      ))}
    </div>
  );
};
