import { useState } from "react";
import LeftSidebar from "../Menu/LeftSidebar";
import Cart from "../Menu/Cart";
import EditProfileModal from "../Profile/ProfileModal";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Juan Dela Cruz",
    email: "juandelacruz@gmail.com",
    phone: "09123456789",
    profilePic: "",
    preferences: ["Vegetarian", "Paleolithic", "Halal", "Fruitarian", "Gluten-Free", "Organic", "Dairy-Free"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setUser({ ...user, profilePic: imageURL });
    }
  };

  const handlePreferenceChange = (preference: string) => {
    setUser((prevUser) => {
      const updatedPreferences = prevUser.preferences.includes(preference)
        ? prevUser.preferences.filter((p) => p !== preference) // Remove if exists
        : [...prevUser.preferences, preference]; // Add if not exists

      return { ...prevUser, preferences: updatedPreferences };
    });
  };

  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <div className="flex flex-col flex-grow p-5 overflow-y-auto h-screen w-[900px] bg-[#F2F2F2]">
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <button onClick={() => setIsEditing(true)} className="absolute top-4 right-4 text-[#32347C] hover:text-gray-800">
            ✎ Edit
          </button>

          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
              {user.profilePic ? (
                <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
              )}
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-[#32347C] mb-1">{user.name}</h2>
              <p>Email address: <a href={`mailto:${user.email}`} className="text-[#32347C]">{user.email}</a></p>
              <p>Phone number: <a href={`tel:${user.phone}`} className="text-[#32347C]">{user.phone}</a></p>
            </div>
          </div>

          {/* Updated Preferences List */}
          <div className="mt-4 flex gap-2 flex-wrap">
            {user.preferences.length > 0 ? (
              user.preferences.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tag}</span>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No dietary preferences selected.</p>
            )}
          </div>
        </div>
      </div>

      <Cart cartItems={[]} removeFromCart={() => {}} updateQuantity={() => {}} />

      {isEditing && (
        <EditProfileModal 
          user={user} 
          handleChange={handleChange} 
          handleFileUpload={handleFileUpload} 
          handlePreferenceChange={handlePreferenceChange} 
          onClose={() => setIsEditing(false)} 
        />
      )}
    </div>
  );
};

export default UserProfile;