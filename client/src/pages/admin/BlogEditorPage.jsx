import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FormBuilder from "../../components/FormBuilder";
import Button from "../../components/Button";

const BlogEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    tags: "",
  });

  // Fetch existing blog data if edit mode
  useEffect(() => {
    if (isEditMode) {
      // Replace with real API call
      const fetchData = async () => {
        const dummy = {
          title: "Sample Blog",
          author: "John Doe",
          category: "Premier League",
          content: "Some existing blog content...",
          tags: "football, premier league",
        };
        setFormData(dummy);
      };
      fetchData();
    }
  }, [isEditMode]);

  const fields = [
    {
      label: "Title",
      name: "title",
      placeholder: "start typing...",
      type: "text",
      required: true,
      value: formData.title,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      label: "Author",
      name: "author",
      placeholder: "start typing...",
      type: "text",
      value: formData.author,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, author: e.target.value }),
    },
    {
      label: "Category",
      name: "category",
      placeholder: "start typing...",
      type: "select",
      value: formData.category,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, category: e.target.value }),
      options: [
        { label: "Select category", value: "" },
        { label: "Premier League", value: "Premier League" },
        { label: "La Liga", value: "La Liga" },
        { label: "Bundesliga", value: "Bundesliga" },
      ],
    },
    {
      label: "Content",
      name: "content",
      placeholder: "start typing...",
      type: "textarea",
      value: formData.content,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, content: e.target.value }),
    },
    {
      label: "Tags (comma separated)",
      name: "tags",
      type: "text",
      placeholder: "start typing...",
      value: formData.tags,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, tags: e.target.value }),
    },
  ];

  const buttons = isEditMode
    ? [
        {
          label: "Update",
          type: "submit",
          className: "bg-blue-600 text-white px-4 py-2 rounded",
        },
        {
          label: "Reset",
          onClick: () => window.location.reload(),
          className: "bg-gray-400 text-white px-4 py-2 rounded",
        },
      ]
    : [
        {
          label: "Create",
          type: "submit",
          className: "bg-green-600 text-white px-4 py-2 rounded",
        },
      ];

  const handleSubmit = (data) => {
    if (isEditMode) {
      console.log("Updating blog:", data);
      // API call to update blog
    } else {
      console.log("Creating blog:", data);
      // API call to create blog
    }
    navigate("/admin/content-management");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <Button
        text="← Back"
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
        onClick={() => navigate("/admin/content-management")}
      />

      <h1 className="text-2xl font-bold">
        {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>

      <FormBuilder
        fields={fields}
        buttons={buttons}
        onSubmit={handleSubmit}
        formClassName="col"
      />
    </div>
  );
};

export default BlogEditorPage;
