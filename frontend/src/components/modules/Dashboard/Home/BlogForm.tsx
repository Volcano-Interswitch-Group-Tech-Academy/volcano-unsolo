import React, { useState } from "react";
import UploadWidget from "../UploadWidget";
import Input from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import Button from "@/components/ui/Button";

const defaultValues = {
  blogName: "",
  blogPost: "",
  photos: [],
};

const BlogForm = () => {
  const [editorContent, setEditorContent] = useState("");

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    mode: "all"
  });

  const  blogName = errors?.blogName?.message
  const values = watch();


  return (
    <>
      <div className=" flex flex-row justify-between my-5">
        <div>
          <Controller
            name="blogName"
            control={control}
            defaultValue=""
            rules={{ required: "Blog name is required is required" }}
            render={({ field }) => (
              <Input
                placeholder="Blog Name"
                styling=""
                value={field.value}
                onChange={field.onChange}
                onBlur={() => field.onBlur()}
                type= "text"
                error= {blogName}
              />
            )}
          />
        </div>

        <div className="border border-gray-300">
          <UploadWidget />
        </div>
      </div>
      <div>
        <Controller
          name="blogPost"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              style={{ width: "100%", height: "200px", padding: "10px" }}
              className="input"
            ></textarea>
          )}
        />
      </div>

      <div className="flex flex-end">
        <Button
          children={"Upload to Blog"}
          className="button_bg text-white font-bold mt-5"
        />
      </div>
    </>
  );
};

export default BlogForm;
