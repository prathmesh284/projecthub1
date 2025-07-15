// import React, { useState } from "react";

// const ProfilePage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Profile updated!");
//     console.log(formData);
//   };

//   return (
//     <div className="h-screen min-w-screen overflow-y-auto bg-gradient-to-br from-white to-slate-100 py-10 px-48 sm:px-8 lg:px-48 scrollbar-hide">
//       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto border border-gray-200">
//         <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center">👤 Profile Page</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-gray-700 mb-1">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Middle Name</label>
//               <input
//                 type="text"
//                 name="middleName"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Bio / About</label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full h-28 border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               placeholder="Write something about yourself..."
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Membership</label>
//             <select
//               name="membership"
//               value={formData.membership}
//               onChange={handleChange}
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             >
//               <option value="Free">Free</option>
//               <option value="Premium">Premium</option>
//             </select>
//           </div>

//           {formData.membership === "Premium" && (
//             <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-md text-cyan-800">
//               🎁 You have access to premium content like advanced project ideas, early access features, and priority support.
//             </div>
//           )}

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition"
//             >
//               Update Profile
//             </button>
//           </div>
//         </form>

//       </div>
//         <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4 mt-10">
          
//         </section>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    membership: "Free",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.membership === "Premium") {
      if (!paymentDetails.cardNumber || !paymentDetails.expiry || !paymentDetails.cvv) {
        alert("Please enter complete payment details for Premium membership.");
        return;
      }
    }
    alert("Profile updated successfully!");
    console.log({ ...formData, paymentDetails });
  };

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-white to-slate-100 py-10 px-6 sm:px-10 md:px-20 lg:px-48 scrollbar-hide">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl mx-auto border border-gray-200">
        <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center">👤 Profile Page</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-3 gap-4">
            {["firstName", "middleName", "lastName"].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 mb-1">
                  {field === "firstName" ? "First" : field === "middleName" ? "Middle" : "Last"} Name
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            ))}
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 mb-1">Bio / About</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full h-28 border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write something about yourself..."
            />
          </div>

          {/* Membership Dropdown */}
          <div>
            <label className="block text-gray-700 mb-1">Membership</label>
            <select
              name="membership"
              value={formData.membership}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          {/* Premium Perks */}
          {formData.membership === "Premium" && (
            <>
              <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 p-4 rounded-md">
                🎁 <strong>Premium Perks:</strong> Access to exclusive project ideas, early features, and direct mentorship.
              </div>

              {/* Payment UI */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-cyan-600">💳 Payment Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="text"
                    name="expiry"
                    placeholder="Expiry Date (MM/YY)"
                    value={paymentDetails.expiry}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="password"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition"
            >
              {formData.membership === "Premium" ? "Pay & Update Profile" : "Update Profile"}
            </button>
          </div>
        </form>
      </div>
        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4 mt-10">
        </section>
    </div>
  );
};

export default ProfilePage;
