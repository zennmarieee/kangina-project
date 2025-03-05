import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface EditProfileModalProps {
    user: {
        profilePic?: string;
        name: string;
        email: string;
        phone: string;
        preferences: string[];
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePreferenceChange: (preference: string) => void;
    onClose: () => void;
}

const dietaryOptions = [
    "Vegetarian", "Paleolithic", "Halal", "Fruitarian",
    "Gluten-Free", "Organic", "Dairy-Free"
];

const EditProfileModal: React.FC<EditProfileModalProps> = ({
    user,
    handleChange,
    handleFileUpload,
    handlePreferenceChange,
    onClose
}) => {
    // Create a local copy of user data to track changes without affecting the original
    const [localUser, setLocalUser] = useState({ ...user });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false
    });

    // Update local user when original user changes
    useEffect(() => {
        setLocalUser({ ...user });
    }, [user]);

    // Handle local change without affecting parent state
    const handleLocalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLocalUser(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field
        setErrors(prev => ({
            ...prev,
            [name]: false
        }));
    };

    // Handle local preference change
    const handleLocalPreferenceChange = (preference: string) => {
        setLocalUser(prev => {
            const newPreferences = prev.preferences.includes(preference)
                ? prev.preferences.filter(p => p !== preference)
                : [...prev.preferences, preference];
            
            return {
                ...prev,
                preferences: newPreferences
            };
        });
    };

    // Handle local file upload
    const handleLocalFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLocalUser(prev => ({
                    ...prev,
                    profilePic: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Validate form before saving
    const validateForm = () => {
        const newErrors = {
            name: !localUser.name.trim(),
            email: !localUser.email.trim() || !/^\S+@\S+\.\S+$/.test(localUser.email),
            phone: !localUser.phone.trim()
        };
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    // Handle save button click
    const handleSave = () => {
        if (validateForm()) {
            // Apply changes to parent component using the original handlers
            if (localUser.name !== user.name) {
                const nameEvent = {
                    target: { name: 'name', value: localUser.name }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChange(nameEvent);
            }
            
            if (localUser.email !== user.email) {
                const emailEvent = {
                    target: { name: 'email', value: localUser.email }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChange(emailEvent);
            }
            
            if (localUser.phone !== user.phone) {
                const phoneEvent = {
                    target: { name: 'phone', value: localUser.phone }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChange(phoneEvent);
            }
            
            // Update preferences if changed
            const preferencesToAdd = localUser.preferences.filter(p => !user.preferences.includes(p));
            const preferencesToRemove = user.preferences.filter(p => !localUser.preferences.includes(p));
            
            preferencesToAdd.forEach(p => handlePreferenceChange(p));
            preferencesToRemove.forEach(p => handlePreferenceChange(p));
            
            // Update profile picture if changed
            if (localUser.profilePic !== user.profilePic) {
                // This will require handling the file upload differently
                // For now, we'll rely on the original handleFileUpload function
            }
            
            // Close the modal after saving
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl h-auto max-h-[90vh] relative overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold mb-4 text-[#32347C] text-left">
                    Edit Profile
                </h2>

                {/* Content Section with increased spacing */}
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 px-6">
                    {/* Upload Profile Image */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden">
                            {localUser.profilePic ? (
                                <img src={localUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                            )}
                        </div>
                        <label className="bg-[#32347C] text-white px-6 py-2 rounded hover:bg-[#21215C] transition cursor-pointer">
                            Upload Image
                            <input type="file" accept="image/*" onChange={handleLocalFileUpload} className="hidden" />
                        </label>
                    </div>

                    {/* Edit Fields */}
                    <div className="w-full">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={localUser.name}
                                    onChange={handleLocalChange}
                                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                                    required
                                />
                                {errors.name && 
                                    <p className="text-red-500 text-sm mt-1">Full name is required</p>
                                }
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={localUser.email}
                                    onChange={handleLocalChange}
                                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                                    required
                                />
                                {errors.email && 
                                    <p className="text-red-500 text-sm mt-1">Valid email address is required</p>
                                }
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={localUser.phone}
                                    onChange={handleLocalChange}
                                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                                    required
                                />
                                {errors.phone && 
                                    <p className="text-red-500 text-sm mt-1">Phone number is required</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dietary Preferences */}
                <div className="mt-4 px-6">
                    <label className="block text-gray-700 font-medium">Dietary Preferences</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {dietaryOptions.map((option) => (
                            <label
                                key={option}
                                className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={localUser.preferences.includes(option)}
                                    onChange={() => handleLocalPreferenceChange(option)}
                                    className="accent-[#32347C]"
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="mt-6 flex justify-end px-6">
                    <button
                        onClick={handleSave}
                        className="bg-[#32347C] text-white px-5 py-2 rounded-full hover:bg-[#21215C] transition"
                    >
                        Save
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default EditProfileModal;