
import PostComponent from "@/components/admin/PostComponent";
import { Post } from "@/types";

const mockPosts: Post[] = [
  {
    id: "p1",
    title: "Como instalar painéis solares",
    author: "João Silva",
    published: true,
    content: "Conteúdo do post...",
  },
  {
    id: "p2",
    title: "Dicas de manutenção",
    author: "Maria Souza",
    published: false,
    content: "Rascunho...",
  },
];

const PostEdit = async (props: { params: { id: string } }) => {
  const { id } = await props.params;
  const post: Post = mockPosts.find((p) => p.id === id)!;

  /**
 *   if (!post) {
    return (
      <Layout>
        <div className="alert alert-danger mt-4">Post não encontrado.</div>
      </Layout>
    );
  }
 */

  return (
    <PostComponent post={post} />
  );
};

export default PostEdit;
