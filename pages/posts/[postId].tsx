import { useRouter } from "next/router";
import * as React from "react";

export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  const router = useRouter();
  return (
    <div>
      post
      <p>Post {JSON.stringify(router.query)}</p>
    </div>
  );
}
