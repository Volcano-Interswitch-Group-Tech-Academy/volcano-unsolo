import React, { useState } from "react";
import UploadWidget from "../UploadWidget";
import Input from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import Button from "@/components/ui/Button";


const defaultValues = {
  blogName: "",
  blogPost: "",
  photos: [],
};

const BlogForm = () => {
  const [editorContent, setEditorContent] = useState("");

  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']                                         
    ],
  }

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
  });

  return (
    <>
      <div className=" flex flex-row justify-between mt-5">
        <div>
          <Controller
            name="blogName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                placeholder="Blog Name"
                styling=""
                value={field.value}
                onChange={field.onChange}
                onBlur={() => field.onBlur()}
                type={undefined}
                error="kindly give a blog name"
              />
            )}
          />
        </div>

        <div>
          <UploadWidget />
        </div>
      </div>
      <div>
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          modules={modules}
          className="my-editor"
        />
      </div>

      <div className="flex flex-end">
        <Button children={"Upload to Blog"} className="button_bg text-white font-bold mt-5"/>
      </div>
    </>
  );
};

export default BlogForm;
