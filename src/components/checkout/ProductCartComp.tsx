'use client'
import { Coordinate01Icon, PaintBucketIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProductCartComp = () => {
  const [products, setProducts] = useState<any>(null)

  const searchParams = useSearchParams()
  const Sl = searchParams.get('products') || ''
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://admin.ashaa.xyz/api/MooniAddProduct/${Sl}`)
        const json = await res.json()
        setProducts(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (Sl) {
      fetchData()
    }
  }, [Sl])
  return (
    <div className="mt-8">
      <div className="relative flex py-8 first:pt-0 last:pb-0 sm:py-10 xl:py-12">
        <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:w-32">
          <Image fill src={products?.defaultImage} alt={'image.alt'} sizes="300px" className="object-cover" priority />

          {/* <Link href={'/products/' + handle} className="absolute inset-0"></Link> */}
        </div>

        <div className="ml-3 flex flex-1 flex-col sm:ml-6">
          <div>
            <div className="flex justify-between">
              <div className="flex-[1.5]">
                <h3 className="text-base font-semibold">
                  {products?.title}
                  {/* <Link href={'/products/' + handle}>{name}</Link> */}
                </h3>
                <div className="mt-1.5 flex text-sm text-neutral-600 sm:mt-2.5 dark:text-neutral-300">
                  <div className="flex items-center gap-x-2">
                    <HugeiconsIcon icon={PaintBucketIcon} size={16} color="currentColor" strokeWidth={1.5} />
                    <span>{'color'}</span>
                  </div>
                  <span className="mx-4 border-l border-neutral-200 dark:border-neutral-700"></span>
                  <div className="flex items-center gap-x-2">
                    <HugeiconsIcon icon={Coordinate01Icon} size={16} color="currentColor" strokeWidth={1.5} />
                    <span>{'size'}</span>
                  </div>
                </div>
                <div className="mt-5">Price: {products?.priceSale} Tk</div>

                {/* <div className="relative mt-3 flex w-full justify-between sm:hidden">
                  <select
                    name="qty"
                    id="qty"
                    defaultValue={1}
                    className="form-select relative z-10 rounded-md bg-white px-2 py-1 text-xs outline-1 outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-neutral-800"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <Prices contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full" price={price || 0} />
                </div> */}
              </div>

              {/* <div className="hidden flex-1 justify-end sm:flex">
                <Prices price={price || 0} className="mt-0.5" />
              </div> */}
            </div>
          </div>

          {/* <div className="mt-auto flex items-end justify-between pt-4 text-sm">
            <div className="hidden sm:block">
              <NcInputNumber className="relative z-10" />
            </div>

            <div className="relative z-10 mt-3 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500">
              <span>Remove</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCartComp
