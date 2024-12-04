import { PostComponent } from '@/components/post/PostComponent'
import PublicLayout from '@/layout/public-layout'

const PostPage = () => {
  return (
    <PublicLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 pt-4 pb-4 md:px-6 border-2 border-solid	border-color: currentColor  ">
          <h1>Đăng bài mới</h1>
          <PostComponent />
        </div>{' '}
      </section>
    </PublicLayout>
  )
}

export default PostPage
