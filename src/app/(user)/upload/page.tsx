// 'use client'
// import { Button } from '@/components/ui/button'
// import PublicLayout from '@/layout/public-layout'
// import axios from 'axios'
// import { useState } from 'react'

// export const FileUpload = () => {
//   const [file, setFile] = useState([]) //define list instead

//   const handleFileChange = (e: any) => {
//     setFile([...file, e.target.files[0]]) //append the file list
//   }

//   const importFile = async () => {
//     console.log(file) //check all files

//     for (const uploadedFile of file) {
//       if (uploadedFile) {
//         const formData = new FormData() //make a bew FormData for every file.
//         formData.append('ImageFile', uploadedFile, uploadedFile.name)

//         try {
//           const res = await axios.post('https://localhost:7077/addImages', formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               Accept: 'application/json',
//             },
//           })
//           console.log(res)
//         } catch (ex) {
//           console.log(ex)
//         }
//       }
//     }
//   }

//   return (
//     <PublicLayout>
//       <input
//         // className={`w-full md:w-full px-2 md:mb-0 block uppercase tracking-wide text-gray-700 text-xs font-bold mt-2 mb-2 ${fileStyles.customFileInput}`}
//         id="ImageFile"
//         name="ImageFile"
//         type="file"
//         title="Attach ImageFile"
//         onChange={handleFileChange}
//         multiple
//       />
//       <hr />

//       <Button
//         className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//         type="submit"
//         onClick={importFile}
//       >
//         Upload Hình ảnh
//       </Button>
//     </PublicLayout>
//   )
// }

// export default FileUpload

const FileUpload = () => {
  return <></>
}
export default FileUpload
