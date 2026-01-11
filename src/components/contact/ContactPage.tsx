'use client'
import { Divider } from '@/components/Divider'
import SectionPromo1 from '@/components/SectionPromo1'
import ButtonPrimary from '@/shared/Button/ButtonPrimary'
import SocialsList from '@/shared/SocialsList/SocialsList'
import { Field, FieldGroup, Fieldset, Label } from '@/shared/fieldset'
import { Input } from '@/shared/input'
import { Textarea } from '@/shared/textarea'
import { Metadata } from 'next'
import Form from 'next/form'
import React from 'react'

// export const metadata: Metadata = {
//   title: 'Contact',
//   description: 'Contact us for any inquiries or support',
// }

const info = [
  {
    title: '🗺 ADDRESS',
    desc: 'Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter',
  },
  {
    title: '💌 EMAIL',
    desc: 'nc.example@example.com',
  },
  {
    title: '☎ PHONE',
    desc: '000-123-456-7890',
  },
]

const PageContact =() => {
 
    const [formData, setFormData] = React.useState({
   fullName:  '',
    email:  '',
    phone:   '',
    subject:   '',
    message:   '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const endpointBase = "https://admin.ashaa.xyz/api/MooniContact";
      

      const payload: Record<string, any> = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

     

      const res = await fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("POST Error:", err);
    }
    
  };


  return (
    <div className="pt-12 pb-16 sm:py-16 lg:py-24">
      <div className="container mx-auto flex max-w-6xl flex-col gap-y-16 lg:gap-y-28">
        <div className="grid shrink-0 grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-[1.15] font-semibold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-100">
              Contact
            </h1>
            <div className="mt-10 flex max-w-sm flex-col gap-y-8 sm:mt-14">
              {info.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">{item.title}</p>
                  <span className="mt-4 block text-neutral-500 dark:text-neutral-400">{item.desc}</span>
                </div>
              ))}
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">🌏 SOCIALS</p>
                <SocialsList className="mt-4" />
              </div>
            </div>
          </div>

          <div>
            <Form action={handleSubmit}>
              <Fieldset>
                <FieldGroup>
                  <Field>
                    <Label>Full name</Label>
                    <Input name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Example Doe" type="text" />
                  </Field>
                  <Field>
                    <Label>Email address</Label>
                    <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="example@example.com" />
                  </Field>
                  <Field> 
                    <Label>Phone number</Label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+1 (555) 000-0000" />
                  </Field>
                  <Field> 
                    <Label>Subject</Label>
                    <Input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject" />
                  </Field>


                  <Field>
                    <Label>Message</Label>
                    <Textarea name="message" rows={6} />
                  </Field>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </FieldGroup>
              </Fieldset>
            </Form>
          </div>
        </div>

        <Divider />
      </div>

      <div className="container pt-16 lg:pt-28">
        <SectionPromo1 />
      </div>
    </div>
  )
}

export default PageContact
