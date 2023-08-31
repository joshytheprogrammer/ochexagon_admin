import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

export async function fetchTestimonials() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "testimonials"));
    const testimonials = [];

    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, data: doc.data() });
    });

    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
}

export async function fetchMessages() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "messages"));
    const messages = [];

    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, data: doc.data() });
    });

    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
}

export async function fetchBlogPosts() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "blog"));
    const blogPosts = [];

    querySnapshot.forEach((doc) => {
      blogPosts.push({ id: doc.id, data: doc.data() });
    });

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}
