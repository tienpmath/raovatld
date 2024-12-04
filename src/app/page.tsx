import ProductGridPage from '@/components/ProductGridPage'
import { Hero } from '@/components/sections/hero'
import PublicLayout from '@/layout/public-layout'

/**
 * The Home component is an asynchronous function that returns a JSX element.
 * It uses the PublicLayout component to wrap the Hero component.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
interface IProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Home() {
  const SkipCount = 12
  const MaxResultCount = 100
  //const session = await auth()
  // const url = 'https://admin.raovatlamdong.vn'
  // const res = await sendRequest<IBackendAbbRes<any>>({
  //   url: `${url}/products`,
  //   method: 'GET',
  //   nextOption: {
  //     next: { tags: ['list-products'] },
  //   },
  // })
  //console.log(slug);
  const res = await fetch(
    'https://admin.raovatlamdong.vn/api/app/product?SkipCount=10&MaxResultCount=100',
    {
      method: 'GET',
      next: { tags: ['list-products'] },
    }
  )
  //const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
  const data = await res.json()
  // console.log(data)
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gray-100">
        {/* <ModernUI products={products} /> */}
        <ProductGridPage data={data} />
      </div>
      <Hero />
    </PublicLayout>
  )
}
