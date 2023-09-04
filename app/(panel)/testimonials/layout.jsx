"use client"

import TestimonialsContext from "@utils/context/TestimonialsContext";
import { firestore } from "@utils/firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const TestimonialSectionLayout = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const colRef = collection(firestore, "testimonials");
  const q = query(colRef, orderBy("lastModified", "desc"));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(updatedData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [q]);

  return (
    <TestimonialsContext.Provider value={{testimonials, loading}}>
      <div className="h-full w-full flex flex-col">
        <h1 className="font-bold text-[25px]">Testimonials</h1>

        <div className="bg-white border w-full h-[85%] lg:h-[90%] rounded-lg mt-6 py-4 px-2 mo-sm:px-4 first-letter:self-center justify-self-center overflow-hidden">
          {children}
        </div>
      </div>
    </TestimonialsContext.Provider>
  );
};

export default TestimonialSectionLayout;
