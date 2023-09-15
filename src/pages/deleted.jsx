import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/user/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // User deleted successfully
        setDeleted(true);
      } else {
        // Handle error cases here
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Call the delete function with a specific user ID, e.g., handleDelete(123)
  }, []);

  
  return (
    <div>
  {deleted ? (
    <p className="text-green-600 font-bold">User has been deleted.</p>
  ) : (
    <div className="flex items-center space-x-4">
      <input
        className="border-2 border-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        id="idd"
        placeholder="Enter User ID"
      />
      <button
        onClick={() => {
          const id1 = document.getElementById('idd');
          const id = id1.value;
          console.log(id);
          handleDelete(id);
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete User
      </button>
    </div>
  )}
</div>

  );
};

export default YourComponent;
