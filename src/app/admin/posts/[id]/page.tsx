
import PostComponent from "@/components/admin/PostComponent";
import api from "@/lib/api";
import { Post } from "@/types";
import { cookies } from "next/headers";

const PostEdit = async (props: { params: { id: string } }) => {
  let { id } = await props.params;
  const token = (await cookies()).get("token")?.value;

  if(id === 'new') id = '';

  const {data} = await api.get(`/posts/${id}`, {
     headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });

  const post: Post = data.data

  return (
    <PostComponent post={post} />
  );
};

export default PostEdit;
