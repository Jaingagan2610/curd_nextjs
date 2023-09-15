import { useState } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [isPosted, setIsPosted] = useState(false); // Add a state variable for tracking post status

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the data as needed, e.g., update state or show a success message.
        console.log('User created:', data);

        // Set the post status to true
        setIsPosted(true);
      } else {
        // Handle error cases here
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
      <div className="flex items-center">
        <label htmlFor="name" className="mr-2">Name:</label>
        <input
          className="border border-gray-400 p-2"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="email" className="mr-2">Email:</label>
        <input
          className="border border-gray-400 p-2"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="h-10 w-36 bg-gray-400 text-white rounded-lg hover:bg-gray-500">
        Create User
      </button>

      {isPosted && (
        <p className="text-green-600 font-bold">User has been successfully created!</p>
      )}
    </form>
  );
};

export default YourComponent;
