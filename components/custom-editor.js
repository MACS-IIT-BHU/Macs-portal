// components/custom-editor.js

import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import axios from "axios";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
          console.log(file);
          body.append("file", file);
          body.append("upload_preset", "fvfvpwdy");
          axios
            .post(
              "https://api.cloudinary.com/v1_1/dlba1yian/image/upload",
              body
            )
            .then((response) => {
              console.log(response.data);
              const { secure_url } = response.data;
              resolve({ default: secure_url });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    },
  };
}

function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}

function CustomEditor(props) {
  const [blog, setBlog] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmitBlog = async () => {
    console.log(credentials, blog);
    if (
      !credentials.email ||
      !credentials.password ||
      !blog ||
      !title ||
      !image
    ) {
      window.alert("Please fill all details");
      return;
    }

    const body = new FormData();
    body.append("file", image);
    body.append("upload_preset", "fvfvpwdy");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlba1yian/image/upload",
        body
      );
      const { secure_url } = response.data;

      console.log(secure_url);

      const res = await axios.post("/api/blog", {
        blog: blog,
        credentials: credentials,
        title: title,
        img: secure_url,
      });
    } catch (e) {}
  };

  const handleCredentials = (e) => {
    setCredentials((initialVal) => ({
      ...initialVal,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="w-[100vw] h-[80vh">
      <CKEditor
        editor={Editor}
        config={{
          editorConfiguration,
          extraPlugins: [uploadPlugin],
        }}
        data={props.initialData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBlog(data);
        }}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              "70vh",
              editor.editing.view.document.getRoot()
            );
          });
        }}
      />
      <div className="my-2 flex items-center justify-around gap-4 px-12">
        <input
          className="border rounded px-2 flex-1 py-1"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title for Blog"
          name="title"
        ></input>
        <input
          type="file"
          className="flex-1 border w-[200px] border-black rounded"
          accept="image/*"
          onInput={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </div>

      <div className="my-2 flex items-center justify-around gap-4">
        <input
          className="border rounded px-2 py-1"
          name="email"
          onChange={handleCredentials}
          placeholder="email"
        ></input>
        <input
          onChange={handleCredentials}
          className="border rounded px-2 py-1"
          name="password"
          placeholder="password"
          type="password"
        ></input>

        <button
          onClick={handleSubmitBlog}
          className="px-3  py-2 bg-blue-600 rounded text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CustomEditor;
