"use server";
import { uploadImage } from '@/lib/cloudinary';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

//server action must be async function. 
export async function createPost(prevState, formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    // console.log(title, image, content);

    let errors = [];

    if (!title || title.trim().length === 0) {
        errors.push("Title is required");
    }

    if (!content || content.trim().length === 0) {
        errors.push("Content is required");
    }

    if (!image || image.size === 0) {
        errors.push("Image is required");
    }

    if (errors.length > 0) {
        return { errors };
    }

    let imageUrl;

    try {
       imageUrl =  await uploadImage(image);
    }
    catch (error) {
        throw new Error('Image upload failed, post was not created. Please try again later.');
    }

    await storePost({
        imageUrl: imageUrl,
        title,
        content,
        userId: 1
    });

    redirect('/feed');
}