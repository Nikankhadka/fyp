

import {
  cloudinaryCloudName,
  cloudinaryUploadPreset,
} from '../../configs/constant'

interface imageUpload{
    imgId:string
    imgUrl:string
}


export async function uploadImage(image:any):Promise<imageUpload>{
    try{
    if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
      throw new Error('Cloudinary upload is not configured')
    }
        
    //there might be multiple image upload so
    const imageData = new FormData()
    //first upload image
    imageData.append('file',image)
    imageData.append('cloud_name', cloudinaryCloudName)
    imageData.append('upload_preset', cloudinaryUploadPreset)

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      {
        method: 'POST',
        body: imageData,
      }
    )
    const response = await res.json()
    return{
        imgId:response.public_id,
        imgUrl:response.secure_url ?? response.url
    }

    }catch(e){
        console.log(e)
        throw e;
    }
}

export async function deleteImage(imgId: string): Promise<boolean> {
  console.warn(`Cloudinary delete is disabled in demo mode for asset ${imgId}.`)
  return false
}
