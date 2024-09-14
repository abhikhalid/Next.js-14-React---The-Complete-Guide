'use client'; //For using useFormState, but this component will throw an error, because we are using server component inside a client component. By writing 'use client' at the top of the file, we are saying that, all of the code of this file should be rendered on the client. (Browser)

import { useFormState } from 'react-dom';
import FormSubmit from '@/components/form-submit';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export default function NewPostPage() {
  //server action must be async function.
  async function createPost(formData) {
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

    if (!image) {
      errors.push("Image is required");
    }
    
    if (errors.length > 0) {
      return { errors };
    }

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });

    redirect('/feed');
  }

  //just like useState hook
  const [state,formAction] = useFormState(createPost,{});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit/>
        </p>
      </form>
    </>
  );
}
