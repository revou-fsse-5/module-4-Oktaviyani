import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';


// Validation Schema
const CategorySchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

// Category Interface
interface Category {
  id: number;
  name: string;
}

const ProductPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const navigate = useNavigate(); // Initialize navigate for routing

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Handle Add/Update Category
  const handleSubmit = async (values: { name: string }, { resetForm }: any) => {
    try {
      if (editCategory) {
        // Update category
        await axios.put(`http://localhost:5000/categories/${editCategory.id}`, values);
        setCategories(categories.map(cat => (cat.id === editCategory.id ? { ...cat, ...values } : cat)));
      } else {
        // Add new category
        const response = await axios.post('http://localhost:5000/categories', values);
        setCategories([...categories, response.data]);
      }
      resetForm();
      setEditCategory(null);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  // Handle Edit
  const handleEdit = (category: Category) => {
    setEditCategory(category);
  };

  // Handle Delete
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/categories/${id}`);
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Logout handler
  const handleLogout = () => {
    // Perform logout logic here if necessary, e.g., clearing tokens or user data
    navigate('/login'); // Navigate to login page
  };

  return (
    <div >
      <Button variant="outlined" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <div className="product-container"> 
        <h1>Breeds 🐶 Categories</h1>
        <Formik
          initialValues={{ name: editCategory ? editCategory.name : '' }}
          validationSchema={CategorySchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div>
                <Field
                  as={TextField}
                  name="name"
                  label="Category Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="name" />}
                  error={Boolean(<ErrorMessage name="name" />)}
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                {editCategory ? 'Update Category' : 'Add Category'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        {categories.map((category) => (
          <Card key={category.id} style={{ margin: '10px 0' }}>
            <CardContent>
              <Typography variant="h6">{category.name}</Typography>
              <Button onClick={() => handleEdit(category)} color="primary">
                Edit
              </Button>
              <Button onClick={() => handleDelete(category.id)} color="secondary">
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
