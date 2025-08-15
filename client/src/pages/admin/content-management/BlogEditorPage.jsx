import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import FormBuilder from "../../../components/FormBuilder";
import { ArrowLeft } from "lucide-react";

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

  // Fetch blog data in edit mode
  useEffect(() => {
    if (!isEditMode) return;

    const fetchData = async () => {
      // Replace with API call
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
  }, [isEditMode]);

  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      category: "",
      content: "",
      tags: "",
    });
  };

  const handleSubmit = useCallback(
    (data) => {
      if (isEditMode) {
        console.log("Updating blog:", data);
        // API call to update blog
      } else {
        console.log("Creating blog:", data);
        // API call to create blog
      }
      navigate("/admin/content-management");
    },
    [isEditMode, navigate]
  );

  const fields = [
    {
      label: "Title",
      name: "title",
      placeholder: "Enter blog title...",
      type: "text",
      required: true,
      value: formData.title,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, title: e.target.value }),
    },
    {
      label: "Author",
      name: "author",
      placeholder: "Enter author name...",
      type: "text",
      value: formData.author,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, author: e.target.value }),
    },
    {
      label: "Category",
      name: "category",
      placeholder: "Select a category...",
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
      placeholder: "Write your blog content here...",
      type: "textarea",
      value: formData.content,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, content: e.target.value }),
    },
    {
      label: "Tags (comma separated)",
      name: "tags",
      type: "text",
      placeholder: "e.g. football, premier league",
      value: formData.tags,
      controlled: true,
      onChange: (e) => setFormData({ ...formData, tags: e.target.value }),
    },
  ];

  const buttons = isEditMode
    ? [
        { label: "Reset", onClick: resetForm, variant: "secondary" },
        { label: "Update", type: "submit", variant: "primary" },
      ]
    : [
        { label: "Save draft", type: "submit", variant: "danger" },
        { label: "Create and Publish", type: "submit", variant: "success" },
      ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex gap-3 items-center">
        <ArrowLeft
          size={26}
          onClick={() => navigate("/admin/content-management")}
          className="hover:cursor-pointer mt-1"
        />
        <h1 className="text-2xl font-bold">
          {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>
      </div>

      {/* Form */}
      <FormBuilder
        fields={fields}
        buttons={buttons}
        onSubmit={handleSubmit}
        formClassName="flex flex-col gap-4"
      />
    </div>
  );
};

export default BlogEditorPage;
