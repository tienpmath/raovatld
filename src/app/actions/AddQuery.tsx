// /services/actions/AddQuery
'use server'

export async function addQuery(formData: FormData) {
  const name = formData.get('name')
  const categoryId = formData.get('categoryId')
  const description = formData.get('description')
  const phone = formData.get('phone')
  const address = formData.get('address')
  const price = formData.get('price')
  let image = formData.get('image')
  const email = formData.get('email')
  const seller = formData.get('seller')
  // console.log(formData)
  // console.log(phone)
  //console.log(description)
  //console.log(address)
  console.log(image)
  if (image == null) {
    image = 'khong-co-anh.jpg'
  }
  console.log(image)
  // console.log(JSON.stringify({ fullName: fullName, email: email, messageBody: subject, phone: phone, subject: fullName }));

  const response = await fetch(`https://admin.raovatlamdong.vn/api/app/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      slug: 'tieu-de-bai',
      categoryId: categoryId,
      price: price,
      description: description,
      details: description,
      phone: phone,
      address: address,
      image: image,
      seller: seller,
      email: email,
    }),
  })
  const result = await response.json()

  if (result) {
    //     // console.log(result);
    //     //     //  message.success("Gửi data thành công succeed!")
    //     // const notify = () => toast("Wow so easy!");
    //     // toast("Bạn đã gửi thông tin thành công ");
    //     ////  notify();

    //     // <Noti />
    //redirect('/')
    //   }
    // console.log(result)
    return result
  }
}
// "price": 0,
// "image": "string",
// "keySpecs": "string",
// "shortDescription": "string",
// "description": "string",
// "variableTheme": "string",
// "categoryId": 0,
// "slug": "string",
// "status": 0,
// "view": 0,
// "viewCount": 0,
// "dateEnd": "2024-11-27T13:19:58.476Z",
// "seller": "string",
// "phone": "string",
// "email": "string",
// "address": "string"
export async function uploadImages(images: File[]) {
  console.log(images)
}
