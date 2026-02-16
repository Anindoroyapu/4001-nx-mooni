'use client'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import ButtonThird from '@/shared/Button/ButtonThird'
import { Checkbox, CheckboxField } from '@/shared/checkbox'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import { Select } from '@/shared/select'
import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

type Tab = 'ContactInfo' | 'ShippingAddress' | 'PaymentMethod'

const Information = () => {
  const [tabActive, setTabActive] = useState<Tab>('ShippingAddress')

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id)
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div id="ContactInfo" className="scroll-mt-5 rounded-xl border">
        {/* <TabHeader
          title="Contact information"
          icon={UserCircle02Icon}
          value="Enrico Smith / +855-666-7744"
          onClickChange={() => {
            setTabActive('ContactInfo')
            handleScrollToEl('ContactInfo')
          }}
        /> */}
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ContactInfo' && 'invisible hidden')}>
          <ContactInfo
            onClose={() => {
              setTabActive('ShippingAddress')
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div>
      </div>

      <div id="ShippingAddress" className="scroll-mt-5 rounded-xl border">
        {/* <TabHeader
          title="Shipping address"
          icon={Route02Icon}
          value="St. Paul's Road, Norris, SD 57560, Dakota, USA"
          onClickChange={() => {
            setTabActive('ShippingAddress')
            handleScrollToEl('ShippingAddress')
          }}
        /> */}
        <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'ShippingAddress' && 'invisible hidden')}>
          <ShippingAddress
            onClose={() => {
              setTabActive('PaymentMethod')
              handleScrollToEl('PaymentMethod')
            }}
          />
        </div>
      </div>

      <div id="PaymentMethod" className="scroll-mt-5 rounded-xl border">
        {/* <TabHeader
          title="Payment method"
          icon={CreditCardPosIcon}
          value="Credit Card / xxx-xxx-xx55"
          onClickChange={() => {
            setTabActive('PaymentMethod')
            handleScrollToEl('PaymentMethod')
          }}
        /> */}
        {/* <div className={clsx('border-t px-4 py-7 sm:px-6', tabActive !== 'PaymentMethod' && 'invisible hidden')}>
          <PaymentMethod
            onClose={() => {
              setTabActive('ShippingAddress')
              handleScrollToEl('ShippingAddress')
            }}
          />
        </div> */}
      </div>
    </div>
  )
}

// const TabHeader = ({
//   title,
//   icon,
//   value,
//   onClickChange,
// }: {
//   title: string
//   icon: IconSvgElement
//   value: string
//   onClickChange: () => void
// }) => {
//   return (
//     <div className="flex flex-col items-start gap-5 p-5 sm:flex-row sm:p-6">
//       <HugeiconsIcon icon={icon} size={24} className="sm:mt-1.5" />
//       <div className="sm:pl-3">
//         <h3 className="flex items-center gap-3 text-neutral-700 dark:text-neutral-400">
//           <span className="tracking-tight uppercase">{title}</span>
//           <HugeiconsIcon icon={Tick02Icon} size={24} className="mb-1 text-primary-500" />
//         </h3>
//         <div className="mt-1 text-sm font-semibold">{value}</div>
//       </div>
//       <button
//         className="rounded-lg bg-neutral-50 px-4 py-2 text-sm font-medium hover:bg-neutral-100 sm:ml-auto dark:bg-neutral-800 dark:hover:bg-neutral-700"
//         onClick={onClickChange}
//         type="button"
//       >
//         Change
//       </button>
//     </div>
//   )
// }

const ContactInfo = ({ onClose }: { onClose: () => void }) => {
  return (
    <form
      action="#"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()
        const formValues = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        console.log(formValues)
        onClose()
      }}
    >
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Contact infomation</h3>
            <p className="text-sm">
              Do not have an account?{` `}
              <Link href="/login" className="font-medium underline">
                Log in
              </Link>
            </p>
          </div>
          <Field className="max-w-lg">
            <Label>Your phone number</Label>
            <Input defaultValue={'+808 xxx'} type="tel" name="phone" />
          </Field>
          <Field className="max-w-lg">
            <Label>Email address</Label>
            <Input type="email" name="email" />
          </Field>
          <Field>
            <CheckboxField>
              <Checkbox name="newsletter" defaultChecked />
              <Label>Email me news and offers</Label>
            </CheckboxField>
          </Field>

          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <ButtonPrimary type="submit">Next to shipping address</ButtonPrimary>
            <ButtonThird type="button" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  )
}

const ThankYouModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 text-center dark:bg-neutral-800">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
            <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">Thank You!</h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Your order has been placed successfully. We'll send you a confirmation email shortly.
        </p>
        <ButtonPrimary onClick={() => setIsOpen(false)} className="w-full">
          Continue Shopping
        </ButtonPrimary>
      </div>
    </div>
  )
}

const ShippingAddress = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()

  const productId = searchParams.get('products') || ''
  const [products, setProduct] = useState<any>(null)

  useEffect(() => {
    if (!productId) return

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://admin.ashaa.xyz/api/MooniAddProduct/${productId}`)
        const data = await res.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    fetchProduct()
  }, [productId])

  type TFormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    size: string
    address: string
    aptSuite: string
    city: string
    stateProvince: string
    postalCode: string
    country: string
    addressType: 'inside' | 'outside'
    quantity: number
    status: string
  }
  const [formData, setFormData] = useState<TFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    size: '',
    address: '',
    aptSuite: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    addressType: 'inside',
    quantity: 1,
    status: 'pending',
  })
  const shippingCost = useMemo(() => {
    return formData.addressType === 'inside' ? 70 : 130
  }, [formData.addressType])

  const subTotal = useMemo(() => {
    return (products?.priceSale || 0) * formData.quantity
  }, [products, formData.quantity])

  const total = useMemo(() => {
    return subTotal + shippingCost
  }, [subTotal, shippingCost])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!products) return

    const payload = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      size: formData.size,
      address:
        formData.address +
        +formData.aptSuite +
        +formData.city +
        +formData.stateProvince +
        +formData.postalCode +
        +formData.country,

      sub_total: subTotal,
      total,
      shipping: shippingCost,
      quantity: formData.quantity,
      productId: productId,
      productName: products.name,
      productSku: products.sku || '',
      status: formData.status,
    }

    try {
      await fetch('https://admin.ashaa.xyz/api/MooniCheckout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      setIsOpen(true)
    } catch (err) {
      console.error('Checkout error:', err)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }))
  }

  return (
    <div>
      <Fieldset>
        <FieldGroup className="mt-0!">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input
                placeholder="Cole"
                value={formData?.firstName || ''}
                name="firstName"
                onChange={handleInputChange}
              />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input
                placeholder="Enrico"
                value={formData?.lastName || ''}
                name="lastName"
                onChange={handleInputChange}
              />
            </Field>
          </div>
          <Field>
            <Label>Email</Label>
            <Input
              placeholder="example@example.com"
              value={formData?.email || ''}
              name="email"
              onChange={handleInputChange}
            />
          </Field>
          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>Phone</Label>
              <Input
                placeholder="01xxxxxxxxx"
                value={formData?.phone || ''}
                name="phone"
                onChange={handleInputChange}
              />
            </Field>
            <Field>
              <Label>City</Label>
              <Input placeholder="Dhaka" value={formData?.city || ''} name="city" onChange={handleInputChange} />
            </Field>
          </div>
          {/* ============ */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Address</Label>
              <Input
                placeholder={'123, Dream Avenue, USA'}
                value={formData?.address || ''}
                type={'text'}
                name="address"
                onChange={handleInputChange}
              />
            </Field>
          </div>
          <div className="flex gap-10">
            <label className="flex gap-2.5">
              <input
                type="radio"
                name="addressType"
                value="inside"
                checked={formData.addressType === 'inside'}
                onChange={handleInputChange}
                className=" "
              />
              <div className="font-semibold">Inside Dhaka (70Tk)</div>
            </label>

            <label className="flex gap-2.5">
              <input
                type="radio"
                name="addressType"
                value="outside"
                checked={formData.addressType === 'outside'}
                onChange={handleInputChange}
              />
              <div className="font-semibold">Outside Dhaka (130Tk)</div>
            </label>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>Size</Label>
              <Select name="size" onChange={handleInputChange}>
                <option value="" defaultChecked>
                  Select size
                </option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
              </Select>
            </Field>
            <Field>
              <Label>Quantity</Label>
              <Select name="quantity" onChange={handleInputChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </Select>
            </Field>
          </div>
          <div className="mt-4">
            <p>Product Price: {products?.priceSale || 0} Tk</p>
            <p>Sub Total: {subTotal} Tk</p>
            <p>Shipping: {shippingCost} Tk</p>
            <p className="font-bold">Total: {total} Tk</p>
          </div>
          {/* ============ */}
          <div className="flex flex-wrap gap-2.5 pt-6">
            <ButtonPrimary type="submit" className="cursor-pointer" onClick={handleSubmit}>
              Confirm Order
            </ButtonPrimary>
            <ButtonThird type="button" className="cursor-pointer" onClick={onClose}>
              Cancel
            </ButtonThird>
          </div>
        </FieldGroup>
      </Fieldset>
      {<ThankYouModal isOpen={isOpen} setIsOpen={(value: boolean) => setIsOpen(value)} />}
    </div>
  )
}

// const PaymentMethod = ({ onClose }: { onClose: () => void }) => {
//   const [mothodActive, setMethodActive] = useState<'Credit-Card' | 'Internet-banking' | 'Wallet'>('Credit-Card')

// const renderDebitCredit = () => {
//   const active = mothodActive === 'Credit-Card'
//   return (
//     <div>
//       <RadioGroup
//         name="payment-method"
//         aria-label="Payment method"
//         onChange={(e) => setMethodActive(e as any)}
//         value={mothodActive}
//       >
//         <RadioField className="sm:gap-x-6">
//           <Radio className="pt-3" value="Credit-Card" defaultChecked={active} />
//           <Label className="flex items-center gap-x-4 sm:gap-x-6">
//             <div
//               className={clsx(
//                 'rounded-xl border-2 border-neutral-600 p-2.5 dark:border-neutral-300',
//                 active ? 'opacity-100' : 'opacity-25'
//               )}
//             >
//               <HugeiconsIcon icon={CreditCardIcon} size={24} />
//             </div>
//             <p className="font-medium sm:text-base">Debit / Credit Card</p>
//           </Label>
//         </RadioField>
//       </RadioGroup>

//       <div className={clsx('space-y-5 py-6 sm:pl-10', active ? 'block' : 'hidden')}>
//         <Field className="max-w-lg">
//           <Label>Card number</Label>
//           <Input autoComplete="off" name="card-number" />
//         </Field>
//         <Field className="max-w-lg">
//           <Label>Name on Card</Label>
//           <Input autoComplete="off" name="name-on-card" />
//         </Field>
//         <div className="flex flex-col gap-3 sm:flex-row">
//           <Field className="flex-2/3">
//             <Label>Expiration date (MM/YY)</Label>
//             <Input autoComplete="off" placeholder="MM/YY" name="expiration-date" />
//           </Field>
//           <Field className="flex-1/3">
//             <Label>CVC</Label>
//             <Input autoComplete="off" placeholder="CVC" name="cvc" />
//           </Field>
//         </div>
//       </div>
//     </div>
//   )
// }

// const renderInterNetBanking = () => {
//   const active = mothodActive === 'Internet-banking'
//   return (
//     <div>
//       <RadioGroup
//         name="payment-method"
//         aria-label="Payment method"
//         onChange={(e) => setMethodActive(e as any)}
//         value={mothodActive}
//       >
//         <RadioField className="sm:gap-x-6">
//           <Radio className="pt-3" value="Internet-banking" defaultChecked={active} />
//           <Label className="flex items-center gap-x-4 sm:gap-x-6">
//             <div
//               className={clsx(
//                 'rounded-xl border-2 border-neutral-600 p-2.5 dark:border-neutral-300',
//                 active ? 'opacity-100' : 'opacity-25'
//               )}
//             >
//               <HugeiconsIcon icon={InternetIcon} size={24} />
//             </div>
//             <p className="font-medium sm:text-base">Internet banking</p>
//           </Label>
//         </RadioField>
//       </RadioGroup>

//       <div className={clsx('py-6 sm:pl-10', active ? 'block' : 'hidden')}>
//         <Subheading>Your order will be delivered to you after you transfer to</Subheading>
//         <DescriptionList className="mt-3.5">
//           <DescriptionTerm>Customer</DescriptionTerm>
//           <DescriptionDetails>BooliiTheme</DescriptionDetails>

//           <DescriptionTerm>Bank name</DescriptionTerm>
//           <DescriptionDetails>Example Bank Name</DescriptionDetails>

//           <DescriptionTerm>Account number</DescriptionTerm>
//           <DescriptionDetails>555 888 777</DescriptionDetails>

//           <DescriptionTerm>Sort code</DescriptionTerm>
//           <DescriptionDetails>999</DescriptionDetails>

//           <DescriptionTerm>IBAN</DescriptionTerm>
//           <DescriptionDetails>IBAN</DescriptionDetails>

//           <DescriptionTerm>BIC</DescriptionTerm>
//           <DescriptionDetails>BIC/Swift</DescriptionDetails>
//         </DescriptionList>
//       </div>
//     </div>
//   )
// }

// const renderWallet = () => {
//   const active = mothodActive === 'Wallet'
//   return (
//     <div>
//       <RadioGroup
//         name="payment-method"
//         aria-label="Payment method"
//         value={mothodActive}
//         onChange={(e) => setMethodActive(e as any)}
//       >
//         <RadioField className="sm:gap-x-6">
//           <Radio className="pt-3" value="Wallet" defaultChecked={active} />
//           <Label className="flex items-center gap-x-4 sm:gap-x-6">
//             <div
//               className={clsx(
//                 'rounded-xl border-2 border-neutral-600 p-2.5 dark:border-neutral-300',
//                 active ? 'opacity-100' : 'opacity-25'
//               )}
//             >
//               <HugeiconsIcon icon={Wallet03Icon} size={24} />
//             </div>
//             <p className="font-medium sm:text-base">Google / Apple Wallet</p>
//           </Label>
//         </RadioField>
//       </RadioGroup>

//       <div className={clsx('py-6 sm:pl-10', active ? 'block' : 'hidden')}>
//         <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore quod quas fugit perspiciatis
//           architecto, temporibus quos ducimus libero explicabo?
//         </p>
//       </div>
//     </div>
//   )
// }

//   return (
//     <form
//       action="#"
//       method="POST"
//       onSubmit={(e) => {
//         e.preventDefault()
//         const formValues = Object.fromEntries(new FormData(e.target as HTMLFormElement))
//         console.log(formValues)
//         onClose()
//       }}
//     >
//       <Fieldset>
//         <FieldGroup className="mt-0!">
//           {renderDebitCredit()}
//           {renderInterNetBanking()}
//           {renderWallet()}

//           <div className="flex flex-wrap gap-2.5 pt-4">
//             <ButtonPrimary className="min-w-56" type="submit">
//               Confirm order
//             </ButtonPrimary>
//             <ButtonThird type="button" onClick={onClose}>
//               Back to shipping address
//             </ButtonThird>
//           </div>
//         </FieldGroup>
//       </Fieldset>
//     </form>
//   )
// }

export default Information
